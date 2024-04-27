<?php

require_once __DIR__ . "/rest/services/UserService.class.php";

$user_id = $_REQUEST['id'];

$userService = new UserService();
$user = $userService->getUserByID($user_id);

header('Content-Type: application/json');
echo json_encode($user);

?>