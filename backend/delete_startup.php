<?php

require_once __DIR__ . "/rest/services/StartupService.class.php";

$startup_id = $_REQUEST['id'];

if($startup_id == NULL || $startup_id == '') {
    header('HTTP/1.1 500 Bad Request');
    die(json_encode(['error' => "Provide a valid position ID!"]));
}

$startupService = new StartupService();

$startupService->deleteStartup($startup_id);

echo json_encode(["message" => "You succesfully deleted a startup!"]);

?>