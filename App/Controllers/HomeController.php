<?php

namespace App\Controller;

use App\Model\{
    Direction,
    Path,
    Point,
};
use Core\View;

/**
 * Class HomeController
 * @package App\Controller
 */
class HomeController
{
    public function index()
    {
        $points = Point::getAll();

        View::html('home', compact('points'));
    }

    public function getPoints()
    {
        View::json(Point::getAll());
    }

    public function getDirections()
    {
        View::json(Direction::getAll());
    }

    public function getFile()
    {
        $file = json_decode(file_get_contents($_ENV['FILE_NAME']));
        View::json($file);
    }

    public function savePath()
    {
        $response = ['success' => false, 'error' => 0];

        if (isset($_POST['path']) && !empty($_POST['path'])) {
            $path = Point::getPointsIds($_POST['path']);

            if (!Path::exist($path)) {
                Path::save($path, $_POST['distance']);
                $response['success'] = true;
            } else {
                $response['error'] = 1;
            }
        } else {
            $response['error'] = 404;
        }
        echo json_encode($response);
    }
}