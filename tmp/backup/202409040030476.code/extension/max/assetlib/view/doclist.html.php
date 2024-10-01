<?php
/**
 * The doclilst of assetlib module of ZenTaoPMS.
 *
 * @copyright   Copyright 2009-2021 禅道软件（青岛）有限公司(ZenTao Software (Qingdao) Co., Ltd. www.cnezsoft.com)
 * @license     ZPL(http://zpl.pub/page/zplv12.html) or AGPL(https://www.gnu.org/licenses/agpl-3.0.en.html)
 * @author      Shujie Tian <tianshujie@easycorp.ltd>
 * @package     assetlib
 * @version     $Id: doclist.html.php 4903 2021-07-02 09:00:59Z tsj $
 * @link        https://www.zentao.net
 */
?>
<?php include $app->getModuleRoot() . "common/view/header.html.php"?>
<div id="mainMenu" class="clearfix">
  <div class="btn-toobar pull-left">
    <div class='btn-group'>
      <a href='javascript:;' class='btn btn-link btn-limit' data-toggle='dropdown'><span class='text' title='<?php echo zget($libs, $libID);?>'><?php echo zget($libs, $libID);?></span> <span class='caret'></span></a>
      <ul class='dropdown-menu'>
        <?php foreach($libs as $key => $lib) echo "<li class='" . ($libID == $key ? 'active' : '') . "' title='{$lib}'>" . html::a($this->createLink('assetlib', $objectType, "libID=$key"), $lib) . "</li>";?>
      </ul>
    </div>
    <?php
    $menus = $lang->assetlib->featureBar[$app->rawMethod];
    foreach($menus as $key => $menuItem)
    {
        $active       = $key == $browseType ? ' btn-active-text' : '';
        $browseMethod = $objectType == 'practice' ? 'practice' : 'component';
        echo html::a($this->createLink('assetlib', $browseMethod, "libID=$libID&browseType=$key"), "<span class='text'>{$menuItem}</span>", '', "class='btn btn-link $active'");
    }
    ?>
    <a class="btn btn-link querybox-toggle" id='bysearchTab'><i class="icon icon-search muted"></i> <?php echo $lang->searchAB;?></a>
  </div>
  <div class="btn-toolbar pull-right">
    <?php
    $libViewMethod = $objectType == 'practice' ? 'practiceLibView' : 'componentLibView';
    if(common::hasPriv('assetlib', $libViewMethod))
    {
        $link = helper::createLink('assetlib', $libViewMethod, "libID=$libID");
        echo html::a($link, "<i class='icon icon-list-alt muted'> </i>" . $this->lang->assetlib->libView, '', "class='btn btn-link'");
    }
    ?>
    <div class='btn-group'>
      <button type='button' class='btn btn-link dropdown-toggle' data-toggle='dropdown' id='importAction'><i class='icon icon-import muted'></i> <?php echo $lang->import ?><span class='caret'></span></button>
      <ul class='dropdown-menu pull-right' id='importActionMenu'>
      <?php
      $importMethod = $objectType == 'practice' ? 'importPractice' : 'importComponent';
      $class = common::hasPriv('assetlib', $importMethod) ? '' : "class=disabled";
      $link  = common::hasPriv('assetlib', $importMethod) ?  $this->createLink('assetlib', $importMethod, "libID=$libID") : '#';
      echo "<li $class>" . html::a($link, $lang->assetlib->{$importMethod}) . "</li>";
      ?>
      </ul>
    </div>
  </div>
</div>
<div class="cell<?php if($browseType == 'bysearch') echo ' show';?>" id="queryBox" data-module='<?php echo $objectType . 'Lib'?>'></div>
<div id="mainContent" class="main-table">
  <?php if(empty($objects)):?>
  <div class="table-empty-tip">
    <p><span class="text-muted"><?php echo $lang->noData;?></span></p>
  </div>
  <?php else:?>
  <form  class='main-table' id='objectForm' method='post' data-ride="table">
    <table class="table has-sort-head" id='objectList'>
      <?php
      $vars = "libID=$libID&browseType=$browseType&param=$param&orderBy=%s&recTotal={$pager->recTotal}&recPerPage={$pager->recPerPage}";
      $batchAssignToMethod = $objectType == 'practice' ? 'batchAssignToPractice' : 'batchAssignToComponent';
      $batchApproveMethod  = $objectType == 'practice' ? 'batchApprovePractice' : 'batchApproveComponent';
      $batchRemoveMethod   = $objectType == 'practice' ? 'batchRemovePractice' : 'batchRemoveComponent';
      $canBatchAssignTo    = common::hasPriv('assetlib', $batchAssignToMethod);
      $canBatchApprove     = common::hasPriv('assetlib', $batchApproveMethod);
      $canBatchRemove      = common::hasPriv('assetlib', $batchRemoveMethod);
      $canBatchAction      = ($browseType == 'all' or $browseType == 'bysearch') ? ($canBatchApprove or $canBatchRemove) : ($canBatchAssignTo or $canBatchApprove or $canBatchRemove);
      ?>
      <thead>
        <tr>
          <th class='text-left c-id'>
            <?php
            if($canBatchAction) echo "<div class='checkbox-primary check-all' title='{$this->lang->selectAll}'><label></label></div>";
            common::printOrderLink('id', $orderBy, $vars, $lang->assetlib->id);
            ?>
          </th>
          <th class='text-left c-title'><?php common::printOrderLink('title', $orderBy, $vars, $lang->assetlib->name);?></th>
          <th class='c-status'><?php common::printOrderLink('status', $orderBy, $vars, $lang->assetlib->status);?></th>
          <?php if($browseType == 'draft'):?>
          <th class='c-assignedTo text-center'><?php common::printOrderLink('assignedTo', $orderBy, $vars, $lang->assetlib->assignedTo);?></th>
          <?php endif;?>
          <th class='c-addedBy'><?php common::printOrderLink('addedBy', $orderBy, $vars, $lang->assetlib->createdBy);?></th>
          <th class='c-addedDate'><?php common::printOrderLink('addedDate', $orderBy, $vars, $lang->assetlib->createdDate);?></th>
          <?php if($browseType == 'all' or $browseType == 'bysearch'):?>
          <th class='c-assignedTo'><?php common::printOrderLink('assignedTo', $orderBy, $vars, $lang->assetlib->approved);?></th>
          <th class='c-approvedDate'><?php common::printOrderLink('approvedDate', $orderBy, $vars, $lang->assetlib->approvedDate);?></th>
          <?php endif;?>
          <th class='c-actions-3'><?php echo $lang->actions;?></th>
        </tr>
      </thead>
      <tbody>
        <?php
        $viewMethod     = $objectType == 'practice' ? 'practiceView' : 'componentView';
        $approveMethod  = $objectType == 'practice' ? 'approvePractice' : 'approveComponent';
        $editMethod     = $objectType == 'practice' ? 'editPractice' : 'editComponent';
        $removeMethod   = $objectType == 'practice' ? 'removePractice' : 'removeComponent';
        ?>
        <?php foreach($objects as $object):?>
        <tr>
          <td>
            <?php echo $canBatchAction ? html::checkbox('objectIDList', array($object->id => '')) . sprintf('%03d',$object->id) : sprintf('%03d',$object->id);?>
          <td class='c-name' title="<?php echo $object->title?>"><?php echo html::a($this->createLink('assetlib', $viewMethod, "objectID=$object->id"), $object->title);?></td>
          </td>
          <td><?php echo "<span class='status-{$object->status}'>" . zget($lang->assetlib->statusList, $object->status) . '</span>';?></td>
          <?php if($browseType == 'draft'):?>
          <td><?php echo $this->assetlib->printAssignedHtml($object, $approvers, $objectType);?></td>
          <?php endif;?>
          <td class='c-openedBy' title='<?php echo zget($users, $object->addedBy);?>'><?php echo zget($users, $object->addedBy);?></td>
          <td><?php echo helper::isZeroDate($object->addedDate) ? '' : $object->addedDate;?></td>
          <?php if($browseType == 'all' or $browseType == 'bysearch'):?>
          <?php $assignedTo = $object->status == 'active' ? zget($users, $object->assignedTo) : '';?>
          <td class='c-assignedTo' title='<?php echo $assignedTo;?>'><?php echo $assignedTo?></td>
          <td><?php echo helper::isZeroDate($object->approvedDate) ? '' : $object->approvedDate;?></td>
          <?php endif;?>
          <td class='c-actions'>
            <?php
            $vars = "praticeID={$object->id}";
            common::printIcon('assetlib', $editMethod, $vars, $object, 'list', 'edit', '', '', '', '', $lang->assetlib->edit);
            common::printIcon('assetlib', $approveMethod, $vars, $object, 'list', 'glasses', '', 'iframe', true, '', $lang->assetlib->approve);
            common::printIcon('assetlib', $removeMethod, $vars, $object, 'list', 'unlink', 'hiddenwin', '', '', '', $lang->assetlib->remove);
            ?>
          </td>
        </tr>
        <?php endforeach;?>
      </tbody>
    </table>
    <div class='table-footer'>
      <?php if($canBatchAction):?>
      <div class="checkbox-primary check-all"><label><?php echo $lang->selectAll?></label></div>
      <?php endif;?>
      <div class="table-actions btn-toolbar">
        <?php if($canBatchApprove):?>
        <div class="btn-group dropup">
          <button data-toggle="dropdown" type="button" class="btn"><?php echo $lang->assetlib->approve;?> <span class="caret"></span></button>
          <ul class="dropdown-menu" role='menu'>
            <li>
              <?php
              foreach($lang->assetlib->resultList as $key => $value)
              {
                  if(empty($key)) continue;
                  $actionLink = $this->createLink('assetlib', $batchApproveMethod, "libID=$libID&result=$key");
                  echo html::a("javascript:$(\".table-actions #object\").val(\"$key\");setFormAction(\"$actionLink\", \"hiddenwin\", \"#objectList\")", $value);
              }
              ?>
            </li>
          </ul>
        </div>
        <?php endif;?>

        <?php if($canBatchAssignTo and $browseType == 'draft'):?>
        <div class="btn-group dropup">
          <button data-toggle="dropdown" type="button" class="btn"><?php echo $lang->assetlib->assignedTo;?> <span class="caret"></span></button>
          <?php
          $withSearch = count($approvers) > 10;
          $actionLink = $this->createLink('assetlib', $batchAssignToMethod, "libID=$libID");
          echo html::select('assignedTo', $approvers, '', 'class="hidden"');
          if($withSearch):
          ?>
          <div class="dropdown-menu search-list search-box-sink" data-ride="searchList">
            <div class="input-control search-box has-icon-left has-icon-right search-example">
              <input id="userSearchBox" type="search" autocomplete="off" class="form-control search-input">
              <label for="userSearchBox" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
              <a class="input-control-icon-right search-clear-btn"><i class="icon icon-close icon-sm"></i></a>
            </div>
          <?php $membersPinYin = common::convert2Pinyin($approvers);?>
          <?php else:?>
          <div class="dropdown-menu search-list">
          <?php endif;?>
            <div class="list-group">
              <?php
              foreach($approvers as $key => $value)
              {
                  if(empty($key)) continue;
                  $searchKey = $withSearch ? ('data-key="' . zget($membersPinYin, $value, '') . " @$key\"") : "data-key='@$key'";
                  echo html::a("javascript:$(\".table-actions #assignedTo\").val(\"$key\");setFormAction(\"$actionLink\", \"hiddenwin\", \"#objectList\")", $value, '', $searchKey);
              }
              ?>
            </div>
          </div>
        </div>
        <?php endif;?>
        <?php if($canBatchRemove):?>
        <?php
        $removeLink = inlink($batchRemoveMethod);
        echo html::commonButton($lang->assetlib->remove, "onclick=\"setFormAction('$removeLink', 'hiddenwin', this)\"");
        ?>
        <?php endif;?>
      </div>
      <?php $pager->show('right', 'pagerjs');?>
    </div>
  </form>
  <?php endif;?>
</div>
<?php include $app->getModuleRoot() . "common/view/footer.html.php"?>
