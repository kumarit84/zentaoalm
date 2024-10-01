<?php
/**
 * The create of trainplan module of ZenTaoPMS.
 *
 * @copyright   Copyright 2009-2020 禅道软件（青岛）有限公司(ZenTao Software (Qingdao) Co., Ltd. www.cnezsoft.com)
 * @license     ZPL(http://zpl.pub/page/zplv12.html) or AGPL(https://www.gnu.org/licenses/agpl-3.0.en.html)
 * @author      Fangzhou Hu <hufangzhou@easycorp.ltd>
 * @package     trainplan
 * @version     $Id: create.html.php 4903 2020-09-04 09:32:59Z lyc $
 * @link        http://www.zentao.net
 */
?>
<?php include $app->getModuleRoot() . 'common/view/header.html.php';?>
<?php include $app->getModuleRoot() . 'common/view/kindeditor.html.php';?>
<div id="mainContent" class="main-content fade">
  <div class="center-block">
    <div class="main-header">
      <h2><?php echo $lang->trainplan->create;?></h2>
    </div>
    <form class="load-indicator main-form form-ajax" method='post' enctype='multipart/form-data' id='dataform'>
      <table class="table table-form">
        <tbody>
          <tr>
            <th><?php echo $lang->trainplan->name;?></th>
            <td><?php echo html::input('name', '', "class='form-control'");?></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th><?php echo $lang->trainplan->datePlan;?></th>
            <td>
              <div class='input-group'>
                <?php echo html::input("begin", '', "class='form-control form-date' placeholder='{$lang->trainplan->begin}'");?>
                <span class='input-group-addon fix-border'>~</span>
                <?php echo html::input("end", '', "class='form-control form-date' placeholder='{$lang->trainplan->end}'");?>
              </div>
            </td>
          </tr>
          <tr>
            <th><?php echo $lang->trainplan->place;?></th>
            <td><?php echo html::input('place', '', "class='form-control'");?></td>
          </tr>
          <tr>
            <th><?php echo $lang->trainplan->trainee;?></th>
            <td><?php echo html::select('trainee[]', $members, '', "class='form-control chosen' multiple");?></td>
          </tr>
          <tr>
            <th><?php echo $lang->trainplan->lecturer;?></th>
            <td><?php echo html::input('lecturer', '', "class='form-control'");?></td>
          </tr>
          <tr>
            <th><?php echo $lang->trainplan->type;?></th>
            <td><?php echo html::radio('type', $lang->trainplan->typeList, 'inside');?></td>
          </tr>
          <tr>
            <td colspan='2' class='form-actions text-center'>
              <?php echo html::submitButton() . html::backButton();?>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</div>
<?php include $app->getModuleRoot() . 'common/view/footer.html.php';?>
