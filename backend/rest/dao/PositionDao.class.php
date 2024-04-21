<?php

require_once __DIR__ .  "/BaseDao.class.php";

class PositionDao extends BaseDao
{

    public function __construct()
    {
        parent::__construct("positions");
    }

    public function addPosition($position)
    {
        return $this->insert('positions', $position);
    }

    /*
    public function countPositions() {
        $query = "SELECT COUNT(*) AS count 
        FROM positions 
        WHERE LOWER(positionName) LIKE ('%', :search, '%')";

        return $this->query_unique($query, []);
    }
    */

    public function getPosition() {
        $query = "SELECT * 
        FROM positions";

        return $this->query_unique($query, []);
    }

    public function getPositions() {
        $query = "SELECT * 
        FROM positions";

        return $this->query($query, []);
    }
}