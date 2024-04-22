<?php

require_once __DIR__ . "/../dao/UserDao.class.php";

class UserService {
    private $userDao;

    public function __construct() {
        $this->userDao = new UserDao();
    }

    public function addUser($position)
    {
        return $this->userDao->addUser($position);
    }
}

?>