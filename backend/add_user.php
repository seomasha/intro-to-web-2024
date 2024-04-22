<?php

require_once __DIR__ . "/rest/services/UserService.class.php";

$payload = $_REQUEST;

$userService = new UserService();

//$position = $userService->addUser($payload);

echo json_encode(["data" => $payload]);
?>