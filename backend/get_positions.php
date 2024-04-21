<?php

require_once __DIR__ . '/rest/services/PositionService.class.php';

$payload = $_REQUEST;

$positionService = new PositionService();

$data = $positionService->getPositions();

echo json_encode($data);

?>