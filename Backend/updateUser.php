<?php
include "config.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phoneNumber = $_POST['phoneNumber'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $isLawyer = $_POST['isLawyer'];

    if ($isLawyer == 'true') {
        $license = $_POST['license'];
        $sql = "UPDATE lawyers SET firstName = '$firstName', lastName = '$lastName', phoneNumber = '$phoneNumber', email = '$email', password = '$password', license = '$license' WHERE id = '$id'";
    } else {
        $sql = "UPDATE users SET firstName = '$firstName', lastName ='$lastName', phoneNumber = '$phoneNumber', email = '$email', password = '$password' WHERE id = '$id'";
    }

    $result = mysqli_query($conn, $sql);

    if ($result) {
        echo json_encode(["status" => "success", "message" => "تم تحديث المعلومات الشخصية بنجاح"]);
    } else {
        echo json_encode(["status" => "error", "message" => "حدث خطأ أثناء تحديث المعلومات الشخصية"]);
    }
}
?>