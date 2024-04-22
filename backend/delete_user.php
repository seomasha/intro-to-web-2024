<?php

require_once __DIR__ . "/rest/services/UserService.class.php";

$user_id = $_REQUEST['id'];
if($user_id == NULL || $user_id == '') {
    header('HTTP/1.1 500 Bad Request');
    die(json_encode(['error' => "Provide a valid position ID!"]));
}

$userService = new UserService();
$userService->deleteUser($user_id);

echo json_encode(['message' => "You have succesfully deleted the position!"]);
?>