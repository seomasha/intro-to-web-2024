<?php

require_once __DIR__ . "/rest/services/UserService.class.php";

$payload = $_REQUEST;

$userService = new UserService();

unset($payload['confirmpassword']);

$userService->addUser($payload);

echo json_encode(["message" => $payload]);

?>