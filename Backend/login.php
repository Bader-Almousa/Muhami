<?php
// تلقي بيانات الدخول من تطبيق Ionic
include "config.php";
$input = file_get_contents('php://input');
$_POST = json_decode($input, true);

$email = $_POST['email'];
$password = $_POST['password'];



// استعلام SQL للتحقق من صحة بيانات الدخول
$sql = "SELECT * FROM `users` WHERE `email` = '$email' AND `password` = '$password'";
$result = $conn->query($sql);

// إذا تم العثور على سجل مستخدم في قاعدة البيانات، فهذا يعني أن بيانات الدخول صحيحة
if ($result->num_rows > 0) {
    // إرجاع استجابة ناجحة إلى تطبيق Ionic
    http_response_code(201);
    $message['status'] = "Success";
} else {
    // إرجاع استجابة فاشلة إلى تطبيق Ionic
    http_response_code(422);
    $message['status'] = "Error";
}

?>