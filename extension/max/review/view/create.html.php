<?php include $app->getModuleRoot() . 'common/view/header.html.php';?>
<?php include $app->getModuleRoot() . 'common/view/kindeditor.html.php';?>
<div id="mainContent" class="main-content fade">
  <div class="center-block">
    <div class="main-header">
      <h2><?php echo $lang->review->create;?></h2>
    </div>
    <form class="load-indicator main-form form-ajax" method='post' enctype='multipart/form-data' id='dataform'>
      <table class="table table-form">
        <tbody>
          <?php if($this->session->hasProduct):?>
          <tr>
            <th><?php echo $lang->review->product;?></th>
            <td class="required"><?php echo html::select('product', $products, $productID, "class='form-control chosen'");?></td>
          </tr>
          <?php else:?>
          <?php echo html::hidden('product', $productID);?>
          <?php endif;?>
          <tr>
            <th class='w-120px'><?php echo $lang->review->object;?></th>
            <td><?php echo html::select('object', $lang->baseline->objectList, $object, "class='form-control chosen'");?></td>
            <td></td>
          </tr>
          <tr>
            <th><?php echo $lang->review->content;?></th>
            <td><?php echo html::radio('content', $lang->review->contentList, 'template');?></td>
          </tr>
          <tr>
            <th><?php echo $lang->review->template;?></th>
            <td><?php echo html::select('template', '', '', "class='form-control chosen'");?></td>
          </tr>
          <tr class='hide'>
            <th><?php echo $lang->review->doclib;?></th>
            <td><?php echo html::select('doclib', $libs, '', "class='form-control chosen'");?></td>
          </tr>
          <tr>
            <th><?php echo $lang->review->doc;?></th>
            <td><?php echo html::select('doc', '', '', "class='form-control chosen'");?></td>
          </tr>
          <tr>
            <th><?php echo $lang->review->title;?></th>
            <td><?php echo html::input('title', '', "class='form-control'");?></td>
          </tr>
          <tr>
            <th><?php echo $lang->review->deadline;?></th>
            <td><?php echo html::input('deadline', '', "class='form-date form-control'");?></td>
          </tr>
          <tr>
            <th><?php echo $lang->review->file;?></th>
            <td colspan='2'><?php echo $this->fetch('file', 'buildform', 'fileCount=1&percent=0.85');?></td>
          </tr>
          <tr>
            <th><?php echo $lang->review->reviewedBy;?></th>
            <td colspan='2' id='reviewerBox'></td>
          </tr>
          <tr>
            <th><?php echo $lang->review->comment;?></th>
            <td colspan='2'><?php echo html::textarea('comment', '', "class='form-control'");?></td>
          </tr>
          <tr>
            <td colspan='3' class='form-actions text-center'><?php echo html::submitButton() . html::a($backLink, $lang->goback, '', "class='btn btn-wide'");?></td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</div>
<?php js::set('projectID', $projectID)?>
<?php js::set('reviewText', $lang->review->common)?>
<?php include $app->getModuleRoot() . 'common/view/footer.html.php';?>
