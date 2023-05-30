<?php
include "config.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $isLawyer = $_POST['isLawyer'];

    if ($isLawyer == 'true') {
        $sql = "SELECT * FROM lawyers WHERE id = $id";
    } else {
        $sql = "SELECT * FROM users WHERE id = $id";
    }

    $result = mysqli_query($conn, $sql);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        echo json_encode(["status" => "success", "data" => $row]);
    } else {
        echo json_encode(["status" => "error", "message" => "حدث خطأ أثناء البحث عن المستخدم"]);
    }
}
?>