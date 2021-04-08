<?php

namespace App\Model;

use PDO;
use Core\Database;

/**
 * Class Direction
 * @package App\Model
 */
class Direction
{
    /**
     * @return array
     */
    public static function getAll(): array
    {
        $query = 'SELECT * FROM directions';
        $result = Database::getInstance()->pdo->prepare($query);
        $result->execute(array(':directions' => 'query'));

        return $result->fetchAll(PDO::FETCH_ASSOC);
    }
}