<?php
global $app;
helper::import($app->getModulePath('', 'user') . 'model.php');
class extuserModel extends userModel 
{
/**
 * Get user by his account.
 *
 * @param mixed $account
 * @access public
 * @return object           the user.
 */
public function getByAccount($account)
{
    return $this->dao->select('*')->from(TABLE_USER)
        ->beginIF(validater::checkEmail($account))->where('email')->eq($account)->fi()
        ->beginIF(!validater::checkEmail($account))->where('account')->eq($account)->fi()
        ->andWhere('deleted')->eq('0')
        ->fetch();
}/**
 * Get the project or execution in which the user participates..
 *
 * @param  string $account
 * @param  string $type project|execution
 * @param  string $status
 * @param  string $orderBy
 * @param  object $pager
 * @access public
 * @return array
 */
public function getObjects($account, $type = 'execution', $status = 'all', $orderBy = 'id_desc', $pager = null)
{
    $objectType    = $type == 'execution' ? 'sprint,stage,kanban' : $type;
    $myObjectsList = $this->dao->select('t1.*,t2.*')->from(TABLE_TEAM)->alias('t1')
        ->leftJoin(TABLE_PROJECT)->alias('t2')->on('t1.root = t2.id')
        ->where('t1.type')->eq($type)
        ->andWhere('t2.type')->in($objectType)
        ->beginIF(strpos('doing|wait|suspended|closed', $status) !== false)->andWhere('status')->eq($status)->fi()
        ->beginIF($status == 'done')->andWhere('status')->in('done,closed')->fi()
        ->beginIF($status == 'undone')->andWhere('status')->notin('done,closed')->fi()
        ->beginIF($status == 'openedbyme')->andWhere('openedBy')->eq($account)->fi()
        ->beginIF($type == 'execution' and !$this->app->user->admin)->andWhere('t2.id')->in($this->app->user->view->sprints)->fi()
        ->beginIF($type == 'project' and !$this->app->user->admin)->andWhere('t2.id')->in($this->app->user->view->projects)->fi()
        ->andWhere('t1.account')->eq($account)
        ->andWhere('t2.deleted')->eq(0)
        ->andWhere('t2.vision')->eq($this->config->vision)
        ->orderBy("t2.$orderBy")
        ->page($pager)
        ->fetchAll('root');

    $objectIdList  = array();
    $projectIdList = array();
    foreach($myObjectsList as $object)
    {
        $objectIdList[]  = $object->id;
        $projectIdList[] = $object->project;
    }

    /* Get all tasks and compute totalConsumed, totalLeft, totalWait, progress according to them. */
    $hours       = array();
    $emptyHour   = array('totalConsumed' => 0, 'totalLeft' => 0, 'progress' => 0, 'waitTasks' => 0, 'assignedToMeTasks' => 0, 'doneTasks' => 0, 'taskTotal' => 0);
    $searchField = $type == 'project' ? 'project' : 'execution';
    $tasks       = $this->dao->select('id, project, execution, consumed, `left`, status, assignedTo,finishedBy')
        ->from(TABLE_TASK)
        ->where('parent')->lt(1)
        ->andWhere($searchField)->in($objectIdList)->fi()
        ->andWhere('deleted')->eq(0)
        ->fetchGroup($searchField, 'id');

    /* Compute totalEstimate, totalConsumed, totalLeft. */
    foreach($tasks as $objectID => $objectTasks)
    {
        $hour = (object)$emptyHour;
        $hour->taskTotal = count($objectTasks);
        foreach($objectTasks as $task)
        {
            if($task->status == 'wait') $hour->waitTasks += 1;
            if($task->finishedBy != '') $hour->doneTasks += 1;
            if($task->status != 'cancel') $hour->totalConsumed += $task->consumed;
            if($task->status != 'cancel' and $task->status != 'closed') $hour->totalLeft += $task->left;
            if($task->assignedTo == $account) $hour->assignedToMeTasks += 1;
        }
        $hours[$objectID] = $hour;
    }

    /* Compute totalReal and progress. */
    foreach($hours as $hour)
    {
        $hour->totalConsumed = round($hour->totalConsumed, 1);
        $hour->totalLeft     = round($hour->totalLeft, 1);
        $hour->totalReal     = $hour->totalConsumed + $hour->totalLeft;
        $hour->progress      = $hour->totalReal ? round($hour->totalConsumed / $hour->totalReal, 2) * 100 : 0;
    }

    $myObjects   = array();
    $projectList = $this->loadModel('project')->getByIdList($projectIdList);
    foreach($myObjectsList as $object)
    {
        /* Judge whether the project or execution is delayed. */
        if($object->status != 'done' and $object->status != 'closed' and $object->status != 'suspended')
        {
            $delay = helper::diffDate(helper::today(), $object->end);
            if($delay > 0) $object->delay = $delay;
        }

        /* Process the hours. */
        $object->progress          = isset($hours[$object->id]) ? $hours[$object->id]->progress : 0;
        $object->waitTasks         = isset($hours[$object->id]) ? $hours[$object->id]->waitTasks : 0;
        $object->doneTasks         = isset($hours[$object->id]) ? $hours[$object->id]->doneTasks : 0;
        $object->taskTotal         = isset($hours[$object->id]) ? $hours[$object->id]->taskTotal : 0;
        $object->totalConsumed     = isset($hours[$object->id]) ? $hours[$object->id]->totalConsumed : 0;
        $object->assignedToMeTasks = isset($hours[$object->id]) ? $hours[$object->id]->assignedToMeTasks : 0;

        if($object->project)
        {
            $parentProject = zget($projectList, $object->project, '');
            $object->projectName = $parentProject ? $parentProject->name : '';
        }
        $myObjects[$object->id] = $object;
    }

    return $myObjects;
}public function identify($account, $password)
{
	// invalid fields
	if(!$account or !$password ) return false;
	// ldap closed redirect to parent
	if($this->config->ldap->turnon == 0) return parent::identify($account, $password);
	$user = false;
	$record = $this->dao->select('*')->from(TABLE_USER)
		->where('account')->eq($account)
		->andWhere('deleted')->eq(0)
		->fetch();
	// no user data, return false
	if(!$record) return false;
	// not ldap auth
	if(empty($record->ldap)){
		return parent::identify($account, $password);
	}

	$ldap = $this->loadModel('ldap');
	$dn = $ldap->getUserDn($this->config->ldap, $account);
	$pass = $ldap->identify($this->config->ldap->host, $this->config->ldap->port, $dn, $password);
	if (0 == strcmp('Success', $pass)) {
		$user = $record;
		$ip   = $this->server->remote_addr;
				$last = $this->server->request_time;
				// ZenTao requires password re-verification in multiple places, so we need to save the MD5 of the password in the session for subsequent verification
				$user->password = md5($password);
				// Determine if the user is from ldap
				$user->fromldap = true;
				$this->dao->update(TABLE_USER)->set('visits = visits + 1')->set('ip')->eq($ip)->set('ip')->eq($ip)->set('last')->eq($last)->where('account')->eq($account)->exec();
				$user->last = date(DT_DATETIME1, $user->last);
				
				/* Create cycle todo in login. */
		$todoList = $this->dao->select('*')->from(TABLE_TODO)->where('cycle')->eq(1)->andWhere('account')->eq($user->account)->fetchAll('id');
		$this->loadModel('todo')->createByCycle($todoList);
	}
	return $user;
}public function updatePassword($userID)
{
  if( $this->app->user->fromldap == true ){
    dao::$errors['originalPassword'][] = "ldap 用户不能修改密码";
    return false;
  }
  return parent::updatePassword($userID);
}
//**//
}