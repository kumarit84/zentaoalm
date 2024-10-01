<?php
global $app;
helper::import($app->getModulePath('', 'story') . 'model.php');
class extstoryModel extends storyModel 
{
public function getExecutionStoryPairs($executionID = 0, $productID = 0, $branch = 'all', $moduleIdList = 0, $type = 'full', $status = 'all')
{
    if($this->config->vision == 'lite')
    {
        $execution = $this->loadModel('execution')->getById($executionID);
        if($execution->project) $executionID = $execution->project;
    }
    return parent::getExecutionStoryPairs($executionID, $productID, $branch, $moduleIdList, $type, $status);
}
//**//
}