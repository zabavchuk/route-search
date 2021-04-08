<?php

namespace App\Model;

use PDO;
use Core\Database;

/**
 * Class Point
 * @package App\Model
 */
class Point
{

    /**
     * @return array
     */
    public static function getAll(): array
    {
        $query = "SELECT * FROM points ORDER BY name ASC";
        $result = Database::getInstance()->pdo->prepare($query);
        $result->execute(array(':points' => 'query'));

        return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * @param $points
     * @return array
     */
    public static function getPointsIds($points)
    {
        $query = "SELECT id FROM points WHERE name IN ('" . implode("','", $points) . "') ORDER BY find_in_set(name,'" . implode(",", $points) . "')";
        $result = Database::getInstance()->pdo->prepare($query);
        $result->execute(array(':points' => 'query'));

        return $result->fetchAll(PDO::FETCH_COLUMN);
    }
}