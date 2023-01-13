<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $dbconn = pg_connect("host=localhost port=5432 dbname=car_rentals user=postgres password=12345!");
    if (!$dbconn) {
        die("ERRRORR: " . $dbconn);
    }

    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $xml = file_get_contents('php://input');
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $e = explode( '/', $uri );
    echo $xml;

    $data = "{ name: name, lastName: lastname, reqMethod: ".$requestMethod."}";


    // if ($uri[0] == "getuser") {
    //     echo "HTTP/1.1 404 Not Found DUDE";
    //     exit();
    // }
    // header('Content-Type: application/json; charset=utf-8');
    // echo json_encode($data);
    // echo "CONNECTED";

        // $sql = "SELECT nazwisko FROM aktorzy WHERE imie='Tom'";
        // $result = pg_query($sql);

        // if (!$result) {
        //     //echo "No data";
        //     exit;
        // }
        // while ($row = pg_fetch_row($result)) {
        //     echo "Author: $row[0] E-mail: $row[0]";
        //     //echo "<br />\n";
        // }
?>