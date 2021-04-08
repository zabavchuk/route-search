<?php

namespace Core;

/**
 * Class View
 * @package Core
 */
class View
{
    private static $baseview = __DIR__ . "/../App/Views/";

    public static function html(string $path, $data = [])
    {
        self::htmlentities($data);
        extract($data);
        include self::$baseview . $path . ".php";
    }

    public static function json($data)
    {
        self::htmlentities($data);
        echo json_encode($data);
    }

    private static function htmlentities(&$data)
    {
        array_walk_recursive($data, function (&$item) {
            if (is_string($item)) {
                $item = htmlentities($item, ENT_QUOTES, "UTF-8");
            }
        });
    }
}