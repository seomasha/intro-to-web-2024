<?php

require_once __DIR__ . '/../services/AuthService.class.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

Flight::set("auth_service", new AuthService());

Flight::group("/auth", function () {

    /**
     * @OA\Post(
     *      path="/auth/signin",
     *      tags={"auth"},
     *      summary="Sign in to system using email and password",
     *      @OA\Response(
     *           response=200,
     *           description="User data and JWT"
     *      ),
     *      @OA\RequestBody(
     *          description="User credentials",
     *          @OA\JsonContent(
     *              required={"email","password"},
     *              @OA\Property(property="email", type="string", example="some@email.com", description="Some email"),
     *              @OA\Property(property="password", type="string", example="12345678", description="Some password"),
     *          )
     *      )
     * )
     */
    Flight::route("POST /signin", function () {
        $payload = Flight::request()->data->getData();

        $user = Flight::get('auth_service')->getUserByEmail($payload['email']);

        if (!$user || !password_verify($payload['password'], $user['password'])) {
            Flight::halt(500, "Invalid username or password!");
        }

        unset($user['password']);

        $jwt_payload = [
            'user' => $user,
            'iat' => time(),
            'exp' => time() + (60 * 60 * 24) //valid for one day
        ];

        $token = JWT::encode(
            $jwt_payload,
            Config::JWT_SECRET(),
            'HS256'
        );

        Flight::json(
            array_merge($user, ['token' => $token])
        );

        die();
    });

    /**
     * @OA\Post(
     *      path="/auth/signout",
     *      tags={"auth"},
     *      summary="Sign out from the system",
     *      security={
     *          {"ApiKey": {}}
     *      },
     *      @OA\Response(
     *           response=200,
     *           description="Success response or exception if unable to verify JWT Token"
     *      ),
     * )
     */
    Flight::route("POST /signout", function () {
        try {
            $token = Flight::request()->getHeader("Authentication");

            if (!$token) {
                Flight::halt(401, "Missing authentication header.");
            }

            $decoded_token = JWT::decode($token, new Key(Config::JWT_SECRET(), 'HS256'));

            Flight::json([
                'jwt_decoded' => $decoded_token,
                'user' => $decoded_token->user
            ]);
        } catch (\Exception $e) {
            Flight::halt(401, $e->getMessage());
        }
    });
});
