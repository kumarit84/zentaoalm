<?php
$config->dev->group['intervention'] = 'program';

$config->dev->group['relation'] = 'product';

$config->dev->group['baseline']           = 'project';
$config->dev->group['activity']           = 'project';
$config->dev->group['auditcl']            = 'project';
$config->dev->group['auditplan']          = 'project';
$config->dev->group['auditresult']        = 'project';
$config->dev->group['budget']             = 'project';
$config->dev->group['durationestimation'] = 'project';
$config->dev->group['gapanalysis']        = 'project';
$config->dev->group['issue']              = 'project';
$config->dev->group['measrecord']         = 'project';
$config->dev->group['meeting']            = 'project';
$config->dev->group['milestone']          = 'project';
$config->dev->group['nc']                 = 'project';
$config->dev->group['opportunity']        = 'project';
$config->dev->group['pssp']               = 'project';
$config->dev->group['researchplan']       = 'project';
$config->dev->group['researchreport']     = 'project';
$config->dev->group['reviewissue']        = 'project';
$config->dev->group['risk']               = 'project';
$config->dev->group['review']             = 'project';
$config->dev->group['workestimation']     = 'project';
$config->dev->group['measqueue']          = 'project';
$config->dev->group['measrecords']        = 'project';
$config->dev->group['meastemplate']       = 'project';
$config->dev->group['programactivity']    = 'project';
$config->dev->group['programoutput']      = 'project';
$config->dev->group['programprocess']     = 'project';
$config->dev->group['programreport']      = 'project';
$config->dev->group['reviewlist']         = 'project';
$config->dev->group['reviewresult']       = 'project';
$config->dev->group['solutions']          = 'project';

$config->dev->group['trainplan']     = 'traincourse';
$config->dev->group['trainrecords']  = 'traincourse';
$config->dev->group['traincategory'] = 'traincourse';
$config->dev->group['traincontents'] = 'traincourse';

$config->dev->group['classify']      = 'admin';
$config->dev->group['cm']            = 'admin';
$config->dev->group['cmcl']          = 'admin';
$config->dev->group['object']        = 'admin';
$config->dev->group['measurement']   = 'admin';
$config->dev->group['basicmeas']     = 'admin';
$config->dev->group['meetingroom']   = 'admin';
$config->dev->group['process']       = 'admin';
$config->dev->group['reviewcl']      = 'admin';
$config->dev->group['reviewsetting'] = 'admin';
$config->dev->group['sqlbuilder']    = 'admin';
$config->dev->group['sqlview']       = 'admin';
$config->dev->group['subject']       = 'admin';
$config->dev->group['zoutput']       = 'admin';

$config->dev->tableMap['trainrecords']    = 'traincourse';
$config->dev->tableMap['traincategory']   = 'traincourse';
$config->dev->tableMap['traincontents']   = 'traincourse';
$config->dev->tableMap['measqueue']       = 'measurement';
$config->dev->tableMap['meastemplate']    = 'measurement';
$config->dev->tableMap['programactivity'] = 'pssp';
$config->dev->tableMap['programoutput']   = 'pssp';
$config->dev->tableMap['programprocess']  = 'pssp';
$config->dev->tableMap['programreport']   = 'report';
$config->dev->tableMap['reviewlist']      = 'review';
$config->dev->tableMap['reviewresult']    = 'review';
$config->dev->tableMap['solutions']       = 'milestone';
$config->dev->tableMap['relation']        = 'story';
$config->dev->tableMap['object']          = 'cm';
$config->dev->tableMap['intervention']    = 'stakeholder';
$config->dev->tableMap['auditresult']     = 'auditplan';
$config->dev->tableMap['basicmeas']       = 'measurement';
