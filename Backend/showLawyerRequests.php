<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once 'database.php';

$db = new Database();
$conn = $db->connect();

$lawyerId = $_GET['lawyerID'];

$sql = "SELECT image FROM lawyers";

    // تنفيذ الاستعلام
    $result = $conn->query($sql);

    // جلب النتائج وتخزينها في مصفوفة
    $images = $result->fetchAll(PDO::FETCH_ASSOC);

    // إرسال النتائج كرد JSON
    echo json_encode($images);

$conn->close();
?>