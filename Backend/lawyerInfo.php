<?php

include "config.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $specialization = $_POST['specialization'];
    $image = addslashes(file_get_contents($_FILES['image']['tmp_name']));

    $sql = "INSERT INTO lawyerInfo (name, specialization, image) VALUES ('$name', '$specialization', '$image')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "تمت إضافة المحامي بنجاح"]);
    } else {
        echo json_encode(["status" => "error", "message" => "حدث خطأ أثناء إضافة المحامي"]);
    }
}

?>