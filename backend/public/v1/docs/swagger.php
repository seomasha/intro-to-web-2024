<?php

require "../../../../vendor/autoload.php";

define('BASE_URL', 'http://localhost/ibu-startup/backend/');

error_reporting(0);

$openapi = \OpenApi\Generator::scan(['../../../rest/routes', './']);
header('Content-Type: application/x-yaml');
echo $openapi->toYaml();
?>