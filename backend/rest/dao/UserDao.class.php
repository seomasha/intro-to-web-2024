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

    public function deleteUser($id) {
        $query = "DELETE FROM users WHERE id = :id";
        $this->execute($query, [
            'id' => $id
        ]);
    }

    public function editUser($id, $user) {
        $query = "UPDATE users SET first_name = :first_name, last_name = :last_name, username = :username, email = :email, password = :password WHERE id = :id";

        $this->execute($query, [
            'id' => $id,
            'first_name' => $user['user_first_name'],
            'last_name' => $user['user_last_name'],
            'username' => $user['user_name'],
            'email' => $user['user_email'],
            'password' => $user['user_password']
        ]);
    }
}

?>