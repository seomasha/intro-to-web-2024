<?php

require_once __DIR__ . "/../services/PositionService.class.php";


Flight::set("positionService", new PositionService());

Flight::group("/positions", function () {
    /**
     * @OA\Get(
     *      path="/positions",
     *      tags={"positions"},
     *      summary="Get all positions",
     *      @OA\Response(
     *           response=200,
     *           description="Returns all positions from the database"
     *      )
     * )
     */
    Flight::route("GET /", function () {
        $data = Flight::get("positionService")->getPositions();

        Flight::json($data);
    });

    /**
     * @OA\Get(
     *      path="/positions/{position_id}",
     *      tags={"positions"},
     *      summary="Get a position by ID parameter",
     *      @OA\Response(
     *           response=200,
     *           description="Returns a position from the database with the specified ID or false."
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="position_id", example="21", description="Position ID")
     * )
     */
    Flight::route("GET /@position_id", function ($position_id) {
        $position = Flight::get("positionService")->getPositionByID($position_id);

        Flight::json($position);
    });

    /**
     * @OA\Post(
     *      path="/positions/add",
     *      tags={"positions"},
     *      summary="Add position data to the database",
     *      @OA\Response(
     *           response=200,
     *           description="Position data added to database, if ID exists it will update the entry or exception if position is not added properly"
     *      ),
     *      @OA\RequestBody(
     *          description="Position data payload",
     *          @OA\JsonContent(
     *              required={"positionName","positionDescription"},
     *              @OA\Property(property="id", type="string", example="1", description="Position ID"),
     *              @OA\Property(property="positionName", type="string", example="Some position name", description="Position name"),
     *              @OA\Property(property="positionDescription", type="string", example="Some description", description="Position description"),
     *              @OA\Property(property="like_count", type="int", example="20", description=""),
     *              @OA\Property(property="comment_count", type="int", example="20", description=""),
     *              @OA\Property(property="apply_count", type="int", example="20", description=""),
     *              @OA\Property(property="user_id", type="int", example="20", description=""),
     *          )
     *      )
     * )
     */
    Flight::route("POST /add", function () {
        $payload = Flight::request()->data->getData();

        if (array_key_exists('id', $payload) && $payload['id'] != NULL && $payload['id'] != '') {
            $position = Flight::get("positionService")->editPosition($payload);
        } else {
            unset($payload['id']);
            $position = Flight::get("positionService")->addPosition($payload);
        }

        Flight::json(['message' => "You have succesfully added a position, ", 'data' => $position]);
    });

    /**
     * @OA\Delete(
     *      path="/positions/delete/{position_id}",
     *      tags={"positions"},
     *      summary="Delete position by id",
     *      @OA\Response(
     *           response=200,
     *           description="Deleted position data or 500 status code exception otherwise"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="path", name="position_id", example="1", description="Position ID")
     * )
     */
    Flight::route("DELETE /delete/@position_id", function ($position_id) {
        if ($position_id == NULL || $position_id == '') {
            Flight::halt(500, "You have to provide a valid position ID!");
        }

        Flight::get("positionService")->deletePosition($position_id);

        Flight::json(['message' => "You have succesfully deleted the position!"]);
    });
});
