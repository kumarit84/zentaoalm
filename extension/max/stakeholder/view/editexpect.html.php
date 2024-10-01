<?php
/**
 * The view view of stakeholder module of ZenTaoPMS.
 *
 * @copyright   Copyright 2009-2015 禅道软件（青岛）有限公司(ZenTao Software (Qingdao) Co., Ltd. www.cnezsoft.com)
 * @license     ZPL(http://zpl.pub/page/zplv12.html) or AGPL(https://www.gnu.org/licenses/agpl-3.0.en.html)
 * @author      Chunsheng Wang <chunsheng@cnezsoft.com>
 * @package     product
 * @version     $Id: browse.html.php 5096 2013-07-11 07:02:43Z chencongzhi520@gmail.com $
 * @link        http://www.zentao.net
 */
?>
<?php include $app->getModuleRoot() . 'common/view/header.html.php';?>
<?php include $app->getModuleRoot() . 'common/view/kindeditor.html.php';?>
<div id="mainContent" class="main-content fade">
  <div class="center-block">
    <div class="main-header">
      <h2><?php echo $lang->stakeholder->editExpect;?></h2>
    </div>
    <form class="load-indicator main-form form-ajax" method='post' enctype='multipart/form-data' id='expectForm'>
      <table class="table table-form">
        <tbody>
          <tr>
            <th><?php echo $lang->stakeholder->common;?></th>
            <td><?php echo html::select('userID', $users, $expect->userID, "class='form-control chosen'");?></td>
            <td></td>
          </tr>
          <tr>
            <th><?php echo $lang->stakeholder->expect;?></th>
            <td colspan="2"><?php echo html::textarea('expect', $expect->expect, "rows='6'");?></td>
          </tr>
          <tr>
            <th><?php echo $lang->stakeholder->progress;?></th>
            <td colspan="2"><?php echo html::textarea('progress', $expect->progress, "rows='6'");?></td>
          </tr>
          <tr>
            <?php echo html::hidden('id', $expect->id);?>
            <td colspan='3' class='text-center form-actions'><?php echo html::submitButton() . html::backButton();?></td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</div>
<?php include $app->getModuleRoot() . 'common/view/footer.html.php';?>
