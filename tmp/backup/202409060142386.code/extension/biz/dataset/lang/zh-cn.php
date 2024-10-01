<?php
$lang->dataset->id             = '编号';
$lang->dataset->name           = '名称';
$lang->dataset->desc           = '描述';
$lang->dataset->data           = '数据';
$lang->dataset->schema         = '字段';
$lang->dataset->fieldName      = '字段名称';
$lang->dataset->fieldType      = '字段类型';
$lang->dataset->create         = '创建数据集';
$lang->dataset->browse         = '浏览数据集';
$lang->dataset->edit           = '编辑数据集';
$lang->dataset->view           = '查看数据集';
$lang->dataset->delete         = '删除数据集';
$lang->dataset->sql            = '查询语句';
$lang->dataset->sqlPlaceholder = '直接写入一句SQL查询语句，只能进行查询操作，禁止其他SQL操作';
$lang->dataset->query          = '查询';
$lang->dataset->onlyOne        = '只能输入一条SQL语句';
$lang->dataset->empty          = '请输入一条正确的SQL语句';
$lang->dataset->allowSelect    = '只允许SELECT查询';
$lang->dataset->noStar         = "考虑性能，不允许使用 'SELECT *' 查询";
$lang->dataset->fieldSettings  = "字段设置";
$lang->dataset->varSettings    = "变量设置";
$lang->dataset->result         = "查询结果";
$lang->dataset->save           = "保存";
$lang->dataset->field          = "字段";
$lang->dataset->varError       = "变量格式错误";
$lang->dataset->time           = "时间";
$lang->dataset->confirmDelete  = '您确认要删除吗?';

$lang->dataset->objects = array();
$lang->dataset->objects['program']     = $lang->program->common;
$lang->dataset->objects['line']        = $lang->productCommon . '线';
$lang->dataset->objects['product']     = $lang->product->common;
$lang->dataset->objects['module']      = '模块';
$lang->dataset->objects['story']       = $lang->story->common;
$lang->dataset->objects['build']       = $lang->build->common;
$lang->dataset->objects['productplan'] = $lang->productCommon . '计划';
$lang->dataset->objects['release']     = $lang->release->common;
$lang->dataset->objects['bug']         = $lang->bug->common;
$lang->dataset->objects['project']     = $lang->project->common;
$lang->dataset->objects['task']        = $lang->task->common;
$lang->dataset->objects['team']        = '团队';
$lang->dataset->objects['execution']   = '阶段';
$lang->dataset->objects['user']        = $lang->user->common;
$lang->dataset->objects['testtask']    = '测试单';
$lang->dataset->objects['testrun']     = '测试执行';
$lang->dataset->objects['testcase']    = '测试用例';
$lang->dataset->objects['testresult']  = '执行结果';
$lang->dataset->objects['caselib']     = '用例库';
$lang->dataset->objects['casemodule']  = '用例模块';

$lang->dataset->tables = array();
$lang->dataset->tables['build']       = array('name' => '版本数据', 'desc' => '包括版本名称、所属' . $lang->productCommon . '、所属' . $lang->projectCommon . '、所属执行、创建人等');
$lang->dataset->tables['product']     = array('name' => $lang->productCommon . '数据', 'desc' => '包括' . $lang->productCommon . '名称、所属' . $lang->productCommon . '线、所属' . $lang->projectCommon . '集、' . $lang->productCommon . '代号、创建人等');
$lang->dataset->tables['productplan'] = array('name' => $lang->productCommon . '计划数据', 'desc' => '包括计划名称、所属' . $lang->productCommon . '、父计划、开始时间、结束时间等');
$lang->dataset->tables['release']     = array('name' => $lang->productCommon . '发布数据', 'desc' => '包括发布名称、所属' . $lang->productCommon . '、所属' . $lang->projectCommon . '、相关版本、创建人等');
$lang->dataset->tables['project']     = array('name' => $lang->projectCommon . '数据', 'desc' => '包括' . $lang->projectCommon . '名称、项' . $lang->projectCommon . '目代号、' . $lang->projectCommon . '模型、开始时间、结束时间等');
$lang->dataset->tables['execution']   = array('name' => '执行数据', 'desc' => '包括执行名称、执行代号、所属' . $lang->projectCommon . '、开始时间、结束时间等');
$lang->dataset->tables['task']        = array('name' => '任务数据', 'desc' => '包括任务名称、优先级、指派人、所属执行、创建人等');
//$lang->dataset->tables['team']        = array('name' => '团队数据', 'desc' => '包括所属' . $lang->projectCommon . '、所属执行、团队成员等');
$lang->dataset->tables['bug']         = array('name' => 'Bug数据', 'desc' => '包括Bug严重程度、优先级、解决人、所属' . $lang->projectCommon . '、所属' . $lang->productCommon . '等');
$lang->dataset->tables['bugbuild']    = array('name' => '版本Bug数据', 'desc' => '版本的Bug严重程度、优先级、解决人、所属' . $lang->projectCommon . '、所属' . $lang->productCommon . '等');
$lang->dataset->tables['story']       = array('name' => '需求数据', 'desc' => '包括需求优先级、创建人、所属' . $lang->productCommon . '、状态、阶段等');
$lang->dataset->tables['testcase']    = array('name' => '用例数据', 'desc' => '包括用例优先级、创建人、所属' . $lang->productCommon . '、状态、看护人等');
$lang->dataset->tables['casestep']    = array('name' => '用例步骤数据', 'desc' => '包括所属用例、用例步骤、期望结果等');
$lang->dataset->tables['testtask']    = array('name' => '测试单列表', 'desc' => '包括用例优先级、创建人、所属' . $lang->productCommon . '、状态等');
$lang->dataset->tables['testrun']     = array('name' => '测试单用例执行情况', 'desc' => '包括所属测试单、所属用例、用例编号、用例版本、指派人、最后执行人等');
$lang->dataset->tables['testresult']  = array('name' => '测试单用例每次执行结果', 'desc' => '包括用例编号、用例版本、执行人、执行结果等');

$lang->dataset->featureBar['browse']['internal'] = '内置数据';
$lang->dataset->featureBar['browse']['custom']   = '自定义数据';

$lang->dataset->fieldTypeList = array();
$lang->dataset->fieldTypeList['number']   = '数值';
$lang->dataset->fieldTypeList['option']   = '选项';
$lang->dataset->fieldTypeList['string']   = '文本';
$lang->dataset->fieldTypeList['text']     = '长文本';
$lang->dataset->fieldTypeList['user']     = '用户';
$lang->dataset->fieldTypeList['object']   = '对象';
$lang->dataset->fieldTypeList['date']     = '日期';
$lang->dataset->fieldTypeList['datetime'] = '时间';
$lang->dataset->fieldTypeList['json']     = 'JSON';
