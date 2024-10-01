<?php 
$config->ldap = new stdclass();
$config->ldap->turnon = '1';
$config->ldap->host = 'ldap.forumsys.com';
$config->ldap->port = '389';
$config->ldap->ssl = '0';
$config->ldap->fullHost = 'ldap://ldap.forumsys.com:389';
$config->ldap->version = '3';
$config->ldap->bindDN = 'cn=read-only-admin,dc=example,dc=com';
$config->ldap->bindPWD = 'password';
$config->ldap->baseDN =  'dc=example,dc=com';
$config->ldap->uid = 'uid';
$config->ldap->mail = 'mail';
$config->ldap->name = 'cn';
$config->ldap->mobile = 'mobile';
$config->ldap->group = '1';
