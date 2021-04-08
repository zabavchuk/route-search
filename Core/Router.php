<?php

namespace Core;

/**
 * Class Router
 * @package Core
 */
class Router
{
    public static function resolve()
    {
        $path = rtrim(parse_url($_SERVER['REQUEST_URI'])['path'], '/');
        $segments = explode('/', $path);

        if ($_SERVER['REQUEST_URI'] === '/') {
            try {
                $controller = "\App\Controller\\" . "HomeController";
                $controller = new $controller();
                $controller->index();
            } catch (\Error $e) {
                echo 'Error: ', $e->getMessage(), "\n";
            }
        } elseif (count($segments) === 3 && $segments[1] !== '' && $segments[2] !== '') {
            try {
                $class = $segments[1];
                $method = $segments[2];

                $controller = "\App\Controller\\" . $class . "Controller";
                $controller = new $controller();
                $controller->$method();
            } catch (\Error $e) {
                $massage = $e->getMessage();
                if (strpos($massage, 'Class') !== false && strpos($massage, 'not found') !== false ||
                    strpos($massage, 'Call to undefined method') !== false
                ) {
                    var_dump($massage);
                    self::notFound();
                } else {
                    echo 'Error: ', $e->getMessage(), "\n";
                }
            }
        } else {
            self::notFound();
        }
    }

    public static function notFound()
    {
        header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found", true, 404);
        echo '404 Not Found';
        exit();
    }
}