<?php
/**
 * The executions entry point of ZenTaoPMS.
 *
 * @copyright   Copyright 2009-2021 禅道软件（青岛）有限公司(ZenTao Software (Qingdao) Co., Ltd. www.cnezsoft.com)
 * @license     ZPL(http://zpl.pub/page/zplv12.html) or AGPL(https://www.gnu.org/licenses/agpl-3.0.en.html)
 * @author      Chunsheng Wang <chunsheng@cnezsoft.com>
 * @package     entries
 * @version     1
 * @link        https://www.zentao.pm
 */
class feedbacksEntry extends entry
{
    /**
     * GET method.
     *
     * @access public
     * @return string
     */
    public function get()
    {
        if(strpos(strtolower($this->param('fields')), 'moduleandproduct') !== false) return $this->getModuleAndProduct();

        $control = $this->loadController('feedback', 'admin');
        $control->admin($this->param('status', 'unclosed'), 0, $this->param('orderBy', 'id_desc'), 0, $this->param('limit', 20), $this->param('page', 1));
        $data = $this->getData();

        if(!$data or !isset($data->status)) return $this->sendError(400, 'error');
        if(isset($data->status) and $data->status == 'fail') return $this->sendError(400, $data->message);

        $feedbacks = $data->data->feedbacks;
        $pager     = $data->data->pager;

        $result = array();
        foreach($feedbacks as $feedback)
        {
            $result[] = $this->format($feedback, 'openedBy:user,openedDate:time,reviewedBy:user,reviewedDate:time,processedBy:user,processedDate:time,closedBy:user,closedDate:time,editedBy:user,editedDate:time,assignedTo:user,mailto:userList,deleted:bool');
        }

        $data = array();
        $data['page']      = $pager->pageID;
        $data['total']     = $pager->recTotal;
        $data['limit']     = $pager->recPerPage;
        $data['feedbacks'] = $result;

        return $this->send(200, $data);
    }

    /**
     * POST method.
     *
     * @access public
     * @return string
     */
    public function post()
    {
        $fields = 'module,product,type,title,public,desc,status,feedbackBy,notify,uid';
        $this->batchSetPost($fields);

        $this->setPost('notifyEmail', $this->request('notifyEmail', ''));

        $control = $this->loadController('feedback', 'create');
        $this->requireFields('title,product');
        $control->create();

        $data = $this->getData();
        if(isset($data->result) and $data->result == 'fail') return $this->sendError(400, $data->message);

        $feedback = $this->loadModel('feedback')->getById($data->id);

        return $this->send(201, $this->format($feedback, 'openedBy:user,openedDate:time,reviewedBy:user,reviewedDate:time,processedBy:user,processedDate:time,closedBy:user,closedDate:time,editedBy:user,editedDate:time,assignedTo:user,assignedDate:time,feedbackBy:user,mailto:userList,deleted:bool'));
    }

    /**
     * GET method.
     *
     * @access public
     * @return string
     */
    public function getModuleAndProduct()
    {
        $control = $this->loadController('feedback', 'create');
        $control->create();

        $data = $this->getData();

        $modules  = $data->data->modules;
        $products = $data->data->products;

        $data = array();
        $data['modules']  = $modules;
        $data['products'] = $products;

        return $this->send(200, $data);
    }

}
