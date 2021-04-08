<?php

namespace App\Model;

use PDO;
use Core\Database;

/**
 * Class Path
 * @package App\Model
 */
class Path
{

    /**
     * @param array $path
     * @param int $distance
     */
    public static function save(array $path, int $distance)
    {
        $path = implode(",", $path);

        $insert_data = array(
            'path' => $path,
            'distance' => $distance,
        );

        $query = "INSERT INTO paths (path, distance) VALUES (:path, :distance)";

        $result = Database::getInstance()->pdo->prepare($query);
        $result->execute($insert_data);
    }

    public static function exist($path)
    {
        $query = "SELECT id FROM paths WHERE path = '" . implode(",", $path) . "'";

        $result = Database::getInstance()->pdo->prepare($query);
        $result->execute(array(':points' => 'query'));

        return count($result->fetchAll(PDO::FETCH_COLUMN)) > 0;
    }
}