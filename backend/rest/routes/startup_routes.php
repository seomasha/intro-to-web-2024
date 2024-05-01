<?php

require_once __DIR__ . "/../services/StartupService.class.php";

Flight::set("startupService", new StartupService());

Flight::group("/startups", function () {
    Flight::route("GET /", function () {
        $data = Flight::get("startupService")->getStartups();

        Flight::json($data);
    });

    Flight::route("GET /@startup_id", function ($startup_id) {
        $startup = Flight::get("startupService")->getStartupByID($startup_id);

        Flight::json($startup);
    });

    Flight::route("POST /add", function () {
        $payload = Flight::request()->data->getData();

        if (array_key_exists('id', $payload) && $payload['id'] != NULL && $payload['id'] != '') {
            $startup = Flight::get("startupService")->editStartup($payload);
        } else {
            unset($payload['id']);
            $startup = Flight::get("startupService")->addStartup($payload);
        }

        Flight::json([$startup]);
    });

    Flight::route("DELETE /delete/@startup_id", function ($startup_id) {
        if ($startup_id == NULL || $startup_id == '') {
            header('HTTP/1.1 500 Bad Request');
            die(json_encode(['error' => "Provide a valid position ID!"]));
        }

        Flight::get("startupService")->deleteStartup($startup_id);

        Flight::json(["message" => "You succesfully deleted a startup!"]);
    });
});
