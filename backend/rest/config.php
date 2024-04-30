<?php

// Set reporting
ini_set("display_errors", 1);
ini_set("startup-errors", 1);
error_reporting(E_ALL ^ (E_NOTICE | E_DEPRECATED));

// DB Configuration
define("DB_NAME", "ibu_startup");
define("DB_PORT", 3306);
define("DB_HOST", "127.0.0.1");
define("DB_USER", "root");
define("DB_PASSWORD", "sonyxperiaM5");

?>