<?php

require_once __DIR__ . "/BaseDao.class.php";

class UserDao extends BaseDao {
    public function __construct() {
        parent::__construct("users");
    }

    public function addUser($user) {
        $this->insert("users", $user);
    }
}

?>