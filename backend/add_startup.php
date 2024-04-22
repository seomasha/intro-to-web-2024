<?php

require_once __DIR__ . "/rest/services/StartupService.class.php";

$payload = $_REQUEST;

$startupService = new StartupService();

if($payload['id'] != NULL && $payload['id'] != '') {
    $startup = $startupService->editStartup($payload);
}

else {
    unset($payload['id']);
    $startup = $startupService->addStartup($payload);
}

echo json_encode($startup);

?>