<?php
include "config.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$firstName = $data['firstName'];
$lastName = $data['lastName'];
$phoneNumber = $data['phoneNumber'];
$email = $data['email'];
$password = $data['password'];
$license = $data['license'];

$q = mysqli_query($conn, "INSERT INTO `lawyers` (`firstName`, `lastName`, `phoneNumber`, `email`, `password`, `license`) VALUES ('$firstName','$lastName','$phoneNumber','$email','$password','$license')");
if ($q) {
    http_response_code(201);
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($conn);

?>
