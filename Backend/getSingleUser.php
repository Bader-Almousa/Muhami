<?php

include "config.php";
include "registration.php";

$data = array();

$q = mysqli_query($conn, "SELECT * FROM users WHERE id = $id");

while($row = mysqli_fetch_object($q)){
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($conn);

?>