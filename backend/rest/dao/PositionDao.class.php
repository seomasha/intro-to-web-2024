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

    public function getPositionByID($id) {
        $query = "SELECT * 
        FROM positions
        WHERE id = :id";

        return $this->query_unique($query, [
            'id' => $id
        ]);
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

    public function editPosition($id, $position) {
        $query = "UPDATE positions SET positionName = :positionName, positionDescription = :positionDescription WHERE id = :id";

        $this->execute($query, [
            'id' => $id,
            'positionName' => $position['editPositionName'],
            'positionDescription' => $position['editPositionDescription']
        ]);
    }
}