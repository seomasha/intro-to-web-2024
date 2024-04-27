<?php

require_once __DIR__ . "/rest/services/PositionService.class.php";

$position_id = $_REQUEST['id'];

$positionService = new PositionService();
$position = $positionService->getPositionByID($position_id);

header('Content-Type: application/json');
echo json_encode($position);

?>