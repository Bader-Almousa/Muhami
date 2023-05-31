<?php

include_once 'database.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$password = $request->password;

$db = new Database();
$conn = $db->connect();

// Check if email and password exist in users table.
$query = "SELECT * FROM users WHERE email = ? AND password = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('ss', $email, $password);
$stmt->execute();
$user_result = $stmt->get_result();
$user = $user_result->fetch_assoc();

// Check if email and password exist in lawyers table.
$query = "SELECT * FROM lawyers WHERE email = ? AND password = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('ss', $email, $password);
$stmt->execute();
$lawyer_result = $stmt->get_result();
$lawyer = $lawyer_result->fetch_assoc();

if ($user) {
    echo json_encode(array(
        'success' => true,
        'message' => 'تم تسجيل الدخول بنجاح كمستخدم',
        'id' => $user['id'],
        'firstName' => $user['firstName'],
        'lastName' => $user['lastName'],
        'phoneNumber' => $user['phoneNumber'],
        'email' => $user['email'],
        'isLawyer' => false
    ));
} elseif ($lawyer) {
    echo json_encode(array(
        'success' => true,
        'message' => 'تم تسجيل الدخول بنجاح كمحامي',
        'id' => $lawyer['id'],
        'firstName' => $lawyer['firstName'],
        'lastName' => $lawyer['lastName'],
        'phoneNumber' => $lawyer['phoneNumber'],
        'email' => $lawyer['email'],
        'license' => $lawyer['license'],
        'isLawyer' => true
   ));
} else {
    echo json_encode(array('success' => false, 'message' => 'البريد الإلكتروني أو كلمة المرور غير صحيحة'));
}

$conn->close();
?>