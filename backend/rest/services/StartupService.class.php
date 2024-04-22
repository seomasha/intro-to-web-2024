<?php

require_once __DIR__ . "/../dao/StartupDao.class.php";

class StartupService {
    private $startupDao;

    public function __construct() {
        $this->startupDao = new StartupDao();
    }

    public function addStartup($startup) {
        $this->startupDao->addStartup($startup);
    }

    public function getStartups()
    {
        $data = $this->startupDao->getStartups();
        return ['data' => $data];
    }

    public function getStartupByID($id)
    {
        return $this->startupDao->getStartupByID($id);
    }

    public function deleteStartup($id) {
        $this->startupDao->deleteStartup($id);
    }

    public function editStartup($startup) {
        $id = $startup['id'];
        unset($startup['id']);

        $this->startupDao->editStartup($id, $startup);
    }
}
?>