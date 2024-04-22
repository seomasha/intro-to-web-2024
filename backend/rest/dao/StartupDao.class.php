<?php

require_once __DIR__ . "/BaseDao.class.php";

class StartupDao extends BaseDao {
    public function __construct() {
        parent::__construct("startups");
    }

    public function addStartup($startup) {
        $this->insert("startups", $startup);
    }

    public function getStartupByID($id) {
        $query = "SELECT * 
        FROM startups
        WHERE id = :id";

        return $this->query($query, [
            'id' => $id
        ]);
    }

    public function getStartups() {
        $query = "SELECT s.name, s.category, s.description, s.members, u.first_name, u.last_name 
        FROM startups s 
        JOIN users u ON s.founder_id = u.id";

        return $this->query($query, []);
    }
}

?>