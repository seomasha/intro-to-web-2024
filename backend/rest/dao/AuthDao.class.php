<?php

//header('Content-Type: application/json');

require_once __DIR__ . '/BaseDao.class.php';

class AuthDao extends BaseDao {
    public function __construct()
    {
        parent::__construct('users');
    }

    public function getUserByEmail($email) {
        $query = "SELECT * FROM users WHERE email = :email";

        return $this->query_unique($query, ['email' => $email]);
    }
}