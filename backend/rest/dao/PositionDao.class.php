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
}