<?php

require_once __DIR__ . "/../services/PositionService.class.php";


Flight::set("positionService", new PositionService());

Flight::group("/positions", function () {
    Flight::route("GET /", function () {
        $data = Flight::get("positionService")->getPositions();

        Flight::json([$data]);
    });

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

    Flight::route("DELETE /delete/@position_id", function ($position_id) {
        if ($position_id == NULL || $position_id == '') {
            Flight::halt(500, "You have to provide a valid position ID!");
        }

        Flight::get("positionService")->deletePosition($position_id);

        Flight::json(['message' => "You have succesfully deleted the position!"]);
    });

    Flight::route("GET /@position_id", function ($position_id) {
        $position = Flight::get("positionService")->getPositionByID($position_id);

        Flight::json([$position]);
    });
});
