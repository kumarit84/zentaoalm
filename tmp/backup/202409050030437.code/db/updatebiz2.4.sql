ALTER TABLE `zt_leave`       ADD `level` tinyint(3) NOT NULL;
ALTER TABLE `zt_leave`       ADD `assignedTo` varchar(30) NOT NULL;
ALTER TABLE `zt_leave`       ADD `reviewers` text NOT NULL;  
ALTER TABLE `zt_leave`       ADD `backReviewers` text NOT NULL;
ALTER TABLE `zt_lieu`        ADD `level` tinyint(3) NOT NULL;
ALTER TABLE `zt_lieu`        ADD `assignedTo` varchar(30) NOT NULL;
ALTER TABLE `zt_lieu`        ADD `reviewers` text NOT NULL;  
ALTER TABLE `zt_overtime`    ADD `level` tinyint(3) NOT NULL;
ALTER TABLE `zt_overtime`    ADD `assignedTo` varchar(30) NOT NULL;
ALTER TABLE `zt_overtime`    ADD `reviewers` text NOT NULL;  
