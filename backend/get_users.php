<?php

require_once __DIR__ . "/rest/services/UserService.class.php";

$payload = $_REQUEST;
$userService = new UserService();

$data = $userService->getUsers();

echo json_encode(["data" => $data]);

?>