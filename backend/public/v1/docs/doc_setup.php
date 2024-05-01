<?php

/**
 * @OA\Info(
 *   title="API",
 *   description="IBU Startup API",
 *   version="1.0",
 *   @OA\Contact(
 *     email="sead.masetic@stu.ibu.edu.ba",
 *     name="Sead Masetic"
 *   )
 * ),
 * @OA\OpenApi(
 *   @OA\Server(
 *       url=BASE_URL
 *   )
 * )
 * @OA\SecurityScheme(
 *     securityScheme="ApiKeyAuth",
 *     type="apiKey",
 *     in="header",
 *     name="Authentication"
 * )
 */