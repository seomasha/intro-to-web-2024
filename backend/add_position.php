<?php

require_once __DIR__ . "/rest/services/PositionService.class.php";

$payload = $_REQUEST;


$positionService = new PositionService();
$position = $positionService->addPosition($payload);

echo json_encode(['message' => "You have succesfully added a position, ", 'data' => $position]);

?>