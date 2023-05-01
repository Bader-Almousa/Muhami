<?php

include "config.php";

$data = array();
$email = $_GET['email'];
$q = mysqli_query($conn, "SELECT * FROM `users` WHERE `email` = $email");

while($row = mysqli_fetch_object($q)){
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($conn);

?>