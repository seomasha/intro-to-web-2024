<?php

require_once __DIR__ . "/rest/services/PositionService.class.php";

$patient_id = $_REQUEST['id'];
if($patient_id == NULL || $patient_id == '') {
    header('HTTP/1.1 500 Bad Request');
    die(json_encode(['error' => "Provide a valid position ID!"]));
}

$positionService = new PositionService();

$positionService->deletePosition($patient_id);

echo json_encode(['message' => "You have succesfully deleted the position!"]);
?>