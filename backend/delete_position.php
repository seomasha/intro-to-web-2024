<?php

require_once __DIR__ . "/rest/services/PositionService.class.php";

$position_id = $_REQUEST['id'];
if($position_id == NULL || $position_id == '') {
    header('HTTP/1.1 500 Bad Request');
    die(json_encode(['error' => "Provide a valid position ID!"]));
}

$positionService = new PositionService();

$positionService->deletePosition($position_id);

echo json_encode(['message' => "You have succesfully deleted the position!"]);
?>