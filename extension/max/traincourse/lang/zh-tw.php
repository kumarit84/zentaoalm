<?php
/**
 * The traincourse module zh-cn file of ZenTaoPMS.
 *
 * @copyright   Copyright 2009-2022 禪道軟件（青島）有限公司(ZenTao Software (Qingdao) Co., Ltd. www.cnezsoft.com)
 * @license     ZPL(http://zpl.pub/page/zplv12.html) or AGPL(https://www.gnu.org/licenses/agpl-3.0.en.html)
 * @author      Mengyi Liu <liumengyi@cnezsoft.com>
 * @package     company
 * @version     $Id: zh-cn.php 4129 2022-02-09 08:18:14Z wwccss $
 * @link        http://www.zentao.net
 */

/* Actions. */
$lang->traincourse->createCourse     = '創建課程';
$lang->traincourse->createChapter    = '添加章節';
$lang->traincourse->createCategory   = '新建分類';
$lang->traincourse->viewCourse       = '查看課程';
$lang->traincourse->viewChapter      = '查看章節';
$lang->traincourse->browse           = '課程';
$lang->traincourse->upCourse         = '上線課程';
$lang->traincourse->offCourse        = '下線課程';
$lang->traincourse->manageCourse     = '維護課程';
$lang->traincourse->manageChapter    = '維護章節';
$lang->traincourse->manageCategory   = '維護分類';
$lang->traincourse->editCourse       = '編輯課程';
$lang->traincourse->editChapter      = '編輯章節';
$lang->traincourse->editCategory     = '編輯分類';
$lang->traincourse->browseCategory   = '瀏覽分類';
$lang->traincourse->categoryChildren = '添加子分類';
$lang->traincourse->changeStatus     = '課程上線/下線';
$lang->traincourse->deleteCourse     = '刪除課程';
$lang->traincourse->deleteChapter    = '刪除章節';
$lang->traincourse->deleteCategory   = '刪除分類';
$lang->traincourse->uploadCourse     = '導入課程';
$lang->traincourse->upload           = '導入';

/* Fields. */
$lang->traincourse->course   = '課程';
$lang->traincourse->admin    = '後台';
$lang->traincourse->category = '分類';
$lang->traincourse->byQuery  = '搜索';

$lang->traincourse->all            = '所有課程';
$lang->traincourse->createdByMe    = '由我創建';
$lang->traincourse->youCould       = '您可以';

$lang->traincourse->courseName  = '課程名稱';
$lang->traincourse->courseDesc  = '課程簡介';
$lang->traincourse->teacher     = '授課老師';
$lang->traincourse->courseCover = '課程封面';
$lang->traincourse->uploadCover = '添加封面';

$lang->traincourse->id          = '編號';
$lang->traincourse->category    = '所屬分類';
$lang->traincourse->name        = '課程名稱';
$lang->traincourse->status      = '狀態';
$lang->traincourse->desc        = '簡介';
$lang->traincourse->createdBy   = '由誰創建';
$lang->traincourse->createdDate = '創建日期';
$lang->traincourse->editedBy    = '由誰編輯';
$lang->traincourse->editedDate  = '編輯日期';

$lang->traincourse->type          = '類型';
$lang->traincourse->chapterName   = '標題';
$lang->traincourse->chapterDesc   = '簡介';
$lang->traincourse->parentChapter = '所屬章節';
$lang->traincourse->file          = '上傳檔案';

$lang->traincourse->parentCategory = '上級分類';
$lang->traincourse->categoryName   = '分類名稱';

$lang->traincourse->more               = '更多';
$lang->traincourse->noDesc             = '暫無簡介。';
$lang->traincourse->noCourses          = '暫時還沒有課程。';
$lang->traincourse->noRecommendCourses = '暫無相關的課程推薦。';
$lang->traincourse->noCollectedCourses = '暫時還沒有收藏的課程。';
$lang->traincourse->noFinishedCourses  = '暫時還沒有完成的課程。';
$lang->traincourse->drag               = '請拖拽檔案到此處。';
$lang->traincourse->confirmDelete      = '您確定要刪除嗎?';
$lang->traincourse->browseTip          = '點擊左側樹目錄查看課程章節和內容詳情，您也可以繼續';
$lang->traincourse->addCatalogTip      = '您的課程還沒有章節和內容，您可以添加';
$lang->traincourse->noModule           = '<div>您現在還沒有分類信息</div>';

$lang->traincourse->statusList = array();
$lang->traincourse->statusList['offline'] = '待上線';
$lang->traincourse->statusList['online']  = '已上線';

$lang->traincourse->progressList = array();
$lang->traincourse->progressList['']      = '';
$lang->traincourse->progressList['wait']  = '未開始';
$lang->traincourse->progressList['doing'] = '正在學習';
$lang->traincourse->progressList['done']  = '已完成';

$lang->traincourse->featureBar = array();
$lang->traincourse->featureBar['admin']['all']     = $lang->traincourse->all;
$lang->traincourse->featureBar['admin']['offline'] = $lang->traincourse->statusList['offline'];
$lang->traincourse->featureBar['admin']['online']  = $lang->traincourse->statusList['online'];

$lang->traincourse->featureBar['browse']['all']   = '全部課程';
$lang->traincourse->featureBar['browse']['wait']  = $lang->traincourse->progressList['wait'];
$lang->traincourse->featureBar['browse']['doing'] = $lang->traincourse->progressList['doing'];
$lang->traincourse->featureBar['browse']['done']  = $lang->traincourse->progressList['done'];

$lang->traincourse->typeList = array();
$lang->traincourse->typeList['chapter'] = '章節';
$lang->traincourse->typeList['video']   = '內容';

$lang->traincourse->allCourses          = '所有課程';
$lang->traincourse->notStart            = '未開始';
$lang->traincourse->inProgress          = '正在學習';
$lang->traincourse->finished            = '已完成';
$lang->traincourse->noNotStartCourses   = '沒有未開始的課程';
$lang->traincourse->noInProgressCourses = '沒有正在進行的課程';
$lang->traincourse->noFinishedCourses   = '沒有已完成的課程';
$lang->traincourse->learnProgress       = '學習進度';
$lang->traincourse->fileNotEmpty        = '檔案不能為空。';
$lang->traincourse->onlySupportZIP      = '只支持ZIP格式上傳，請轉換ZIP格式再上傳。';
$lang->traincourse->noYamlFile          = '沒有找到YAML檔案，請聯繫禪道客服獲取正確的ZIP壓縮檔案。';
$lang->traincourse->yamlFileError       = '解析YAML檔案錯誤，請聯繫禪道客服獲取正確的ZIP壓縮檔案。';
$lang->traincourse->playFailed          = '當前視頻有誤，無法播放，請聯繫管理員';
$lang->traincourse->confirmClose        = '還有課程未上傳完成，點擊關閉後將終止上傳流程，是否關閉？';

$lang->traincourse->view          = '課程詳情';
$lang->traincourse->fullscreen    = '全屏';
$lang->traincourse->retrack       = '收起';
$lang->traincourse->chapter       = '章節';
$lang->traincourse->finish        = '本節學習完成';
$lang->traincourse->next          = '下一章節';
$lang->traincourse->relatedInfo   = '相關信息';
$lang->traincourse->allCourse     = '所有課程';
$lang->traincourse->continueStudy = '繼續學習';
$lang->traincourse->beginStudy    = '開始學習';
$lang->traincourse->manage        = '管理課程';
$lang->traincourse->chapterInfo   = '進度：%s/%s';
$lang->traincourse->allVideo      = '共 %s 節';

$lang->traincourse->addFile     = '添加檔案';
$lang->traincourse->beginUpload = '開始上傳';
