<?php


require 'config.php';

$query = "SELECT * FROM user";

if($is_query_run = mysqli_query($con, $query)){
    $userData = [];
    while($query_executed = mysqli_fetch_assoc($is_query_run)){
        $userData[] = $query_executed;
    }

}else{
    echo "Error In Execution!";
}

echo json_encode($userData);


?>