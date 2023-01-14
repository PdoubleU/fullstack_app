<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $e = explode( '/', $uri);

    $xml = file_get_contents('php://input');
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $obj;
    $dbconn;

    $obj = json_decode($xml);

    if ($obj and $e) {    
        // try to establish connection as administrator
        $dbconn = pg_connect("host=localhost port=5432 dbname=car_rentals user=".$obj->credentials->login." password=".$obj->credentials->pwd."");
        echo json_encode((object) [
            'isAdmin' => true
        ]);
    } else {
        // establish connection as standard user
        $dbconn = pg_connect("host=localhost port=5432 dbname=car_rentals user=stduser password=user12345!");
        echo json_encode((object) [
            'isAdmin' => false
        ]);
    }
    
    if (!$dbconn) {
        die("ERRRORR: " . $dbconn);
    }

    $qr = 'SELECT * FROM cars';

    $result = pg_query($dbconn, $qr);


    // $data = [];
    // while ($row = pg_fetch_object($result)) {
    //      $data[] = $row;
    // }
    // $response = [];
    // $response['data'] = $data;

    // echo json_encode($response, JSON_PRETTY_PRINT);
?>