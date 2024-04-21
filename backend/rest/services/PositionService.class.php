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
        //$count = $this->positionDao->countPositions();
        $data = $this->positionDao->getPositions();

        //return ['count' => $count, 'data' => $data];
        return ['data' => $data];
    }
}
