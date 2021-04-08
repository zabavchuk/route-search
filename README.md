# Route Search

Route search is based on Dijkstra's algorithm.
<br>
Users can select the start and end waypoints, and the algorithm 
will show the shortest and longest paths.

Backend logic in `App/Controllers/HomeController.php`.
<br>
Front-end part in `/public/js`
<br>
Algorithm logic in `/public/js/algorithm.js`
<br>
Intermediate paths `intermediate_paths.txt`

Requirement:
- PHP v7.2+

## Setup
Copy `.env.example` to `.env`.
<br>
Configure your DB settings

Import `route_search.sql` into your database

Use command `composer install` to install all dependencies in the 
local vendor folder.