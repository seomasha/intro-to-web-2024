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

    public function deletePosition($id) {
        $query = "DELETE FROM positions WHERE id = :id";
        $this->execute($query, [
            'id' => $id
        ]);
    }
}