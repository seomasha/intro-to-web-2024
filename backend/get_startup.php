<?php

require_once __DIR__ . "/rest/services/StartupService.class.php";

$startup_id = $_REQUEST['id'];

$startupService = new StartupService();
$startup = $startupService->getStartupByID($startup_id);

header('Content-Type: application/json');
echo json_encode($startup);

?>