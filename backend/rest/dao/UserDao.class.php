<?php

require_once __DIR__ . "/BaseDao.class.php";

class UserDao extends BaseDao {
    public function __construct() {
        parent::__construct("users");
    }

    public function addUser($user) {
        $this->insert("users", $user);
    }

    public function getUsers() {
        $query = "SELECT * 
        FROM users";

        return $this->query($query, []);
    }

    public function getUserByID($id) {
        $query = "SELECT * 
        FROM users
        WHERE id = :id";

        return $this->query_unique($query, [
            "id" => $id
        ]);
    }
}

?>