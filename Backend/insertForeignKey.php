<?php

include "database.php";

$db = new Database();
$conn = $db->connect();

    $userID = $_POST['userID'];
    $lawyerID = $_POST['lawyerID'];

        $sql = "INSERT INTO advisoryinfo (userID, lawyerID) VALUES ('$userID', '$lawyerID')";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            $id = mysqli_insert_id($conn);
            echo json_encode(["status" => "success", "message" => "تمت إضافة المعلومات بنجاح"]);
        }

?>