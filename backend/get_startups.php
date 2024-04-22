<?php

require_once __DIR__ . '/rest/services/StartupService.class.php';

$payload = $_REQUEST;

$startupService = new StartupService();

$data = $startupService->getStartups();

echo json_encode($data);

?>