<?php

include "database.php";

$db = new Database();
$conn = $db->connect();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phoneNumber = $_POST['phoneNumber'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $license = isset($_POST['license']) ? $_POST['license'] : '';

    if($license == ''){
        $sql = "INSERT INTO users (firstName, lastName, phoneNumber, email, password) VALUES ('$firstName', '$lastName', '$phoneNumber', '$email', '$password')";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            $id = mysqli_insert_id($conn);
            echo json_encode(["status" => "success", "message" => "تمت إضافة المستخدم بنجاح", "id" => $id]);
        } else {
            echo json_encode(["status" => "error", "message" => "حدث خطأ أثناء إضافة المستخدم"]);
        }
    }
    else{
        $sql = "INSERT INTO lawyers (firstName, lastName, phoneNumber, email, password, license) VALUES ('$firstName', '$lastName', '$phoneNumber', '$email', '$password', '$license')";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            $id = mysqli_insert_id($conn);
            echo json_encode(["status" => "success", "message" => "تمت إضافة المحامي بنجاح", "id" => $id]);
        } else {
            echo json_encode(["status" => "error", "message" => "حدث خطأ أثناء إضافة المحامي"]);
        }
    }    
}

?>