<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$FirstName = $data['FirstName'];
$LastName = $data['LastName'];
$Email = $data['Email'];
$Password = $data['Password'];
$Id = $_GET['Id'];

$q = mysqli_query($con, "UPDATE `user` SET  (`FirstName`,`LastName`,`Email`,`Password`) VALUES ('$FirstName','$LastName','$Email','$Password') WHERE `Id` = '{$Id}' LIMIT 1");

if($q){
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);