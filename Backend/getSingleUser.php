<?php

include "config.php";

$data = array();
$Id = $_GET['Id'];
$q = mysqli_query($con, "SELECT * FROM `user` WHERE `Id` = $Id LIMIT 1");

while($row = mysqli_fetch_object($q)){
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($con);