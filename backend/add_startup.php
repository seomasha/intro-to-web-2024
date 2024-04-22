<?php

require_once __DIR__ . "/rest/services/StartupService.class.php";

$payload = $_REQUEST;

$startupService = new StartupService();

$startupService->addStartup($payload);

echo json_encode($payload);

?>