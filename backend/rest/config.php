<?php

// Set reporting
ini_set("display_errors", 1);
ini_set("startup-errors", 1);
error_reporting(E_ALL ^ (E_NOTICE | E_DEPRECATED));

class Config
{
    public static function get_env($name, $default)
    {
        return isset($_ENV[$name]) && trim($_ENV[$name]) !== "" ? $_ENV[$name] : $default;
    }

    public static function DB_NAME()
    {
        return $_ENV['DB_NAME'] ?? "ibu_startup";
    }

    public static function DB_PORT()
    {
        return getenv("DB_PORT") ?? "3306";
    }

    public static function DB_HOST()
    {
        return getenv("DB_HOST") ?? "localhost";
    }

    public static function DB_USER()
    {
        return getenv("DB_USER") ?? "user";
    }

    public static function DB_PASSWORD()
    {
        return getenv("DB_PASSWORD") ?? "sonyxperiaM5";
    }

    public static function JWT_SECRET()
    {
        return getenv("JWT_SECRET") ?? "qvbDGW.Lb_F_Ne8U}Z;=P=9+Z:A8AP";
    }
}
