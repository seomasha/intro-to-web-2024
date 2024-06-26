<?php

use Firebase\JWT\Key;
use Firebase\JWT\JWT;

//header("Content-Type", "application/json");

Flight::route("/*", function () {
    if (
        strpos(Flight::request()->url, "/auth/signin") === 0 ||
        strpos(Flight::request()->url, "/auth/signup") === 0 ||
        strpos(Flight::request()->url, "/users/add") === 0
    ) {
        return TRUE;
    } else {
        try {

            $token = Flight::request()->getHeader("Authentication");

            if (!$token) {
                Flight::halt(401, "Missing authentication header.");
            }

            $decoded_token = JWT::decode($token, new Key(Config::JWT_SECRET(), 'HS256'));

            if (!$decoded_token) {
                Flight::halt(401, "Invalid token.");
            }

            Flight::set('user', $decoded_token->user);
            Flight::set('jwt_token', $token);
            return TRUE;
        } catch (\Exception $e) {
            Flight::halt(401, $e->getMessage());
        }
    }
});

Flight::map('error', function ($e) {
    file_put_contents('logs.txt', $e->getMessage() . PHP_EOL, FILE_APPEND | LOCK_EX);

    Flight::halt($e->getCode(), $e->getMessage());
    Flight::stop($e->getCode());
});
