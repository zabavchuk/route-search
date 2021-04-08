<?php

namespace Core;

use PDO;
use PDOException;

/**
 * Class Database
 * @package App
 */
class Database
{
    protected static $instance = null;
    public $pdo = null;

    private function __construct()
    {
        try {
            $dsn = $_ENV['DB_TYPE'].':host='.$_ENV['DB_HOST'].';dbname='. $_ENV['DB_NAME'].';charset='.$_ENV['DB_CHARSET'];
            $this->pdo = new PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASSWORD']);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo->query("SET NAMES ". $_ENV['DB_CHARSET']);
            $this->pdo->query("SET CHARACTER SET ". $_ENV['DB_CHARSET']);
        }
        catch (PDOException $e) {
            echo "Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    public static function getInstance()
    {

        if (self::$instance === null) {
            self::$instance = new static();
        }
        return self::$instance;
    }

    private function __clone()
    {
    }

    private function __wakeup()
    {
    }
}