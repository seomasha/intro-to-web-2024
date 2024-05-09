<?php

require_once __DIR__ . "/../services/StartupService.class.php";

Flight::set("startupService", new StartupService());

Flight::group("/startups", function () {
    /**
     * @OA\Get(
     *      path="/startups",
     *      tags={"startups"},
     *      summary="Get all startups",
     *      @OA\Response(
     *           response=200,
     *           description="Returns all startups from the database"
     *      )
     * )
     */
    Flight::route("GET /", function () {
        if(authMiddleware()) {
            $data = Flight::get("startupService")->getStartups();

            Flight::json($data);
        }
    });

    /**
     * @OA\Get(
     *      path="/startups/{startup_id}",
     *      tags={"startups"},
     *      summary="Get a startup by ID parameter",
     *      @OA\Response(
     *           response=200,
     *           description="Returns a startup from the database with the specified ID or false."
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="startup_id", example="1", description="Startup ID")
     * )
     */
    Flight::route("GET /@startup_id", function ($startup_id) {
        if(authMiddleware()) {
            $startup = Flight::get("startupService")->getStartupByID($startup_id);

            Flight::json($startup);
        }
    });

    /**
     * @OA\Post(
     *      path="/startups/add",
     *      tags={"startups"},
     *      summary="Add startup data to the database",
     *      @OA\Response(
     *           response=200,
     *           description="Startup data added to database, if ID exists it will update the entry or exception if position is not added properly"
     *      ),
     *      @OA\RequestBody(
     *          description="Position data payload",
     *          @OA\JsonContent(
     *              required={"name","description","members","category"},
     *              @OA\Property(property="id", type="string", example="1", description="Startup ID"),
     *              @OA\Property(property="name", type="string", example="Some first name", description="Startup name"),
     *              @OA\Property(property="founder_id", type="int", example="20", description="Founder id"),
     *              @OA\Property(property="description", type="string", example="Some first name", description="Startup description"),
     *              @OA\Property(property="members", type="string", example="Some last name", description="Startup members"),
     *              @OA\Property(property="category", type="string", example="IT", description="Startup category"),
     *          )
     *      )
     * )
     */
    Flight::route("POST /add", function () {
        if(authMiddleware()) {
            $payload = Flight::request()->data->getData();

            if (array_key_exists('id', $payload) && $payload['id'] != NULL && $payload['id'] != '') {
                $startup = Flight::get("startupService")->editStartup($payload);
            } else {
                unset($payload['id']);
                $startup = Flight::get("startupService")->addStartup($payload);
            }
    
            Flight::json([$startup]);
        }
    });

    /**
     * @OA\Delete(
     *      path="/startups/delete/{startup_id}",
     *      tags={"startups"},
     *      summary="Delete startup by id",
     *      @OA\Response(
     *           response=200,
     *           description="Deleted startup data or 500 status code exception otherwise"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="startup_id", example="6", description="Startup ID")
     * )
     */
    Flight::route("DELETE /delete/@startup_id", function ($startup_id) {
        if(authMiddleware()) {
            if ($startup_id == NULL || $startup_id == '') {
                header('HTTP/1.1 500 Bad Request');
                die(json_encode(['error' => "Provide a valid position ID!"]));
            }
    
            Flight::get("startupService")->deleteStartup($startup_id);
    
            Flight::json(["message" => "You succesfully deleted a startup!"]);
        }
    });
});
