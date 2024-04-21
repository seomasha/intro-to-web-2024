<?php

require_once __DIR__ . "/../dao/PositionDao.class.php";

class PositionService
{

    private $positionDao;

    public function __construct()
    {
        $this->positionDao = new PositionDao();
    }

    public function addPosition($position)
    {
        return $this->positionDao->addPosition($position);
    }

    public function getPositions()
    {
        $data = $this->positionDao->getPositions();
        return ['data' => $data];
    }

    public function deletePosition($id) {
        $this->positionDao->deletePosition($id);
    }
}
