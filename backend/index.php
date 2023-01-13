<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
    $dbconn = pg_connect("host=localhost port=5432 dbname=car_rentals user=admin password=WsB12345!");
    if (!$dbconn) {
        die("ERRRORR: " . $dbconn);
    }

    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $xml = file_get_contents('php://input');
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $e = explode( '/', $uri );
    echo $xml;
?>