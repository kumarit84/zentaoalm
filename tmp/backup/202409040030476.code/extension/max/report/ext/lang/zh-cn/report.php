<?php
$lang->report->testcase            = '用例统计表';
$lang->report->casesrun            = '用例执行统计表';
$lang->report->build               = '版本统计表';
$lang->report->workSummary         = '任务完成汇总表';
$lang->report->bugSummary          = 'Bug解决汇总表';
$lang->report->roadmap             = $lang->productCommon . '路线图表';
$lang->report->storyLinkedBug      = $lang->SRCommon . '关联Bug汇总表';
$lang->report->workAssignSummary   = '任务指派汇总表';
$lang->report->bugAssignSummary    = 'Bug指派汇总表';
$lang->report->productInvest       = $lang->productCommon . '投入表';

$lang->report->taskFinishedDate  = '任务完成时间';
$lang->report->taskConsumed      = '任务总消耗';
$lang->report->projectConsumed   = $lang->projectCommon . '总消耗';
$lang->report->executionConsumed = '执行总消耗';
$lang->report->userConsumed      = '用户总消耗';
$lang->report->bugResolvedDate   = 'Bug解决日期';
$lang->report->bugAssignedDate   = 'Bug指派日期';
$lang->report->taskAssignedDate  = '任务指派时间';
$lang->report->projects          = $lang->projectCommon . '数';
$lang->report->storyConsumed     = $lang->SRCommon . '消耗工时';
$lang->report->taskConsumed      = '任务消耗工时';
$lang->report->bugConsumed       = 'Bug消耗工时';
$lang->report->caseConsumed      = '用例消耗工时';
$lang->report->totalConsumed     = '总消耗工时';

if(helper::hasFeature('product_roadmap')) $lang->reportList->product->lists[20] = $lang->productCommon . '路线图表|report|roadmap';
$lang->reportList->product->lists[25] = $lang->productCommon . '投入表|report|productInvest';
$lang->reportList->test->lists[20]    = '用例统计表|report|testcase';
$lang->reportList->test->lists[25]    = '用例执行统计表|report|casesrun';
$lang->reportList->test->lists[30]    = '版本统计表|report|build';
$lang->reportList->test->lists[35]    = $lang->SRCommon . '关联Bug汇总表|report|storylinkedbug';
$lang->reportList->staff->lists[20]   = '任务完成汇总表|report|worksummary';
$lang->reportList->staff->lists[25]   = '任务指派汇总表|report|workAssignSummary';
$lang->reportList->staff->lists[30]   = 'Bug解决汇总表|report|bugsummary';
$lang->reportList->staff->lists[35]   = 'Bug指派汇总表|report|bugAssignSummary';

$lang->report->product    = $lang->productCommon . '名称';
$lang->report->module     = '模块名称';
$lang->report->buildTitle = '测试版本';
$lang->report->severity   = '严重程度';
$lang->report->bugType    = 'Bug类型';
$lang->report->bugStatus  = 'Bug状态';
$lang->report->delay      = '延期';
$lang->report->day        = '天';
$lang->report->plan       = '计划';
$lang->report->future     = '待定';

$lang->report->case           = new stdclass();
$lang->report->case->total    = '总用例数';
$lang->report->case->run      = '总执行数';
$lang->report->case->passRate = '用例通过率';
$lang->report->case->name     = '名称';

$lang->report->bugTypeList['codeerror']   = '代码';
$lang->report->bugTypeList['interface']   = '界面';
$lang->report->bugTypeList['config']      = '配置';
$lang->report->bugTypeList['install']     = '安装';
$lang->report->bugTypeList['security']    = '安全';
$lang->report->bugTypeList['performance'] = '性能';
$lang->report->bugTypeList['standard']    = '标准';
$lang->report->bugTypeList['automation']  = '脚本';
$lang->report->bugTypeList['others']      = '其他';

$lang->report->bug           = new stdclass();
$lang->report->bug->total    = '总计';
$lang->report->bug->title    = 'Bug标题';
$lang->report->bug->story    = $lang->SRCommon;
$lang->report->bug->status   = '状态';

$lang->report->caseRunDesc = '分别按照用例的执行次数和结果进行统计';
