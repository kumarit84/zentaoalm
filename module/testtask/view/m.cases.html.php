<?php
/**
 * The cases mobile view file of testtask module of ZenTaoPMS.
 *
 * @copyright   Copyright 2009-2015 禅道软件（青岛）有限公司(ZenTao Software (Qingdao) Co., Ltd. www.cnezsoft.com)
 * @license     ZPL(http://zpl.pub/page/zplv12.html) or AGPL(https://www.gnu.org/licenses/agpl-3.0.en.html)
 * @author      Yidong Wang <yidong@cnezsoft.com>
 * @package     testtask
 * @version     $Id$
 * @link        http://www.zentao.net
 */
?>
<?php include './m.caseheader.html.php';?>
<div class='heading'>
  <div class='title'>
    <a id='sortTrigger' class='text-right sort-trigger' data-display data-target='#sortPanel' data-backdrop='true'><i class='icon icon-sort'></i>&nbsp;<span class='sort-name'><?php echo $lang->sort ?></span></a>
  </div>
</div>

<section id='page' class='section list-with-pager'>
  <?php $refreshUrl = $this->createLink('testtask', 'cases', http_build_query($this->app->getParams()));?>
  <div class='box' data-page='<?php echo $pager->pageID ?>' data-refresh-url='<?php echo $refreshUrl ?>'>
    <table class='table bordered no-margin'>
      <thead>
        <tr>
          <th><?php echo $lang->testcase->title;?></th>
          <th class='w-80px text-center'><?php echo $lang->testcase->status;?></th>
        </tr>
      </thead>
      <?php foreach($runs as $case):?>
      <tr class='text-center' data-url='<?php echo $this->createLink('testcase', 'view', "caseID={$case->id}")?>' data-id='<?php echo$case->id;?>'>
        <td class='text-left'>
        <?php if($case->branch) echo "<span class='label label-branch label-badge'>{$branches[$case->branch]}</span> "?>
        <?php echo "<span style='color:$case->color'>" . $case->title . '</span>';?>
        </td>
        <?php $caseStatus = $case->version < $case->caseVersion ? 'changed' : $case->status;?>
        <td class='testcase-<?php echo $caseStatus;?>'><?php echo ($case->version < $case->caseVersion) ? $lang->testcase->changed : $lang->testcase->statusList[$case->status];?></td>
      </tr>
      <?php endforeach;?>
    </table>
  </div>
  <nav class='nav justified pager'>
    <?php $pager->show($align = 'justify');?>
  </nav>
</section>

<div class='list sort-panel hidden affix enter-from-bottom layer' id='sortPanel'>
  <?php
  $vars = "taskID=$task->id&browseType=$browseType&param=$param&orderBy=%s&recToal={$pager->recTotal}&recPerPage={$pager->recPerPage}";
  $sortOrders = array('id', 'pri', 'title', 'status', 'openedBy', 'openedDate', 'type', 'lastRunner', 'lastRunDate', 'lastRunResult');
  foreach ($sortOrders as $order)
  {
      commonModel::printOrderLink($order, $orderBy, $vars, '<i class="icon icon-sort-indicator"></i>' . ($lang->testcase->{$order}));
  }
  ?>
</div>
<script>
$(function()
{
    $('#<?php echo $browseType;?>Tab').addClass('active');
})
</script>
<?php include '../../common/view/m.footer.html.php';?>
