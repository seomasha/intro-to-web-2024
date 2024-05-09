<?php

require_once __DIR__ . "/../services/UserService.class.php";

Flight::set("userService", new UserService());

Flight::group("/users", function () {
    /**
     * @OA\Get(
     *      path="/users",
     *      tags={"users"},
     *      summary="Get all users",
     *      @OA\Response(
     *           response=200,
     *           description="Returns all users from the database"
     *      )
     * )
     */
    Flight::route("GET /", function () {
        if(authMiddleware()) {
            $data = Flight::get("userService")->getUsers();

            Flight::json($data);
        }
    });

    /**
     * @OA\Get(
     *      path="/users/{user_id}",
     *      tags={"users"},
     *      summary="Get a user by ID parameter",
     *      @OA\Response(
     *           response=200,
     *           description="Returns a user from the database with the specified ID or false."
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="user_id", example="20", description="User ID")
     * )
     */
    Flight::route("GET /@user_id", function ($user_id) {
        if(authMiddleware()) {
            $data = Flight::get("userService")->getUserByID($user_id);

            Flight::json($data);
        }
    });

    /**
     * @OA\Post(
     *      path="/users/add",
     *      tags={"users"},
     *      summary="Add user data to the database",
     *      @OA\Response(
     *           response=200,
     *           description="User data added to database, if ID exists it will update the entry or exception if position is not added properly"
     *      ),
     *      @OA\RequestBody(
     *          description="Position data payload",
     *          @OA\JsonContent(
     *              required={"first_name","last_name","username","email","password"},
     *              @OA\Property(property="id", type="string", example="1", description="Position ID"),
     *              @OA\Property(property="first_name", type="string", example="Some first name", description="User first name"),
     *              @OA\Property(property="last_name", type="string", example="Some last name", description="User last name"),
     *              @OA\Property(property="username", type="string", example="username", description="Username"),
     *              @OA\Property(property="email", type="string", example="some@email.com", description="Some email"),
     *              @OA\Property(property="password", type="string", example="12345678", description="Some password"),
     *          )
     *      )
     * )
     */
    Flight::route("POST /add", function () {
        if (authMiddleware()) {
            $payload = Flight::request()->data->getData();

            unset($payload['confirmpassword']);
    
            if (array_key_exists('id', $payload) && $payload['id'] != NULL && $payload['id'] != '') {
                $user = Flight::get("userService")->editUser($payload);
            } else {
                unset($payload['id']);
                $user = Flight::get("userService")->addUser($payload);
            }
    
            Flight::json($user);
        }
    });

    /**
     * @OA\Delete(
     *      path="/users/delete/{user_id}",
     *      tags={"users"},
     *      summary="Delete user by id",
     *      @OA\Response(
     *           response=200,
     *           description="Deleted user data or 500 status code exception otherwise"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="user_id", example="1", description="User ID")
     * )
     */
    Flight::route("DELETE /delete/@user_id", function ($user_id) {
        if (authMiddleware()) {
            if ($user_id == NULL || $user_id == '') {
                Flight::halt(500, "You have to provide a valid position ID!");
            }
    
            Flight::get("userService")->deleteUser($user_id);
    
            Flight::json(['message' => "You have succesfully deleted the position!"]);
        }
    });
});
