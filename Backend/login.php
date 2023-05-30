<?php
include_once 'database.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$password = $request->password;

$db = new Database();
$conn = $db->connect();

$query = "SELECT * FROM users WHERE email = ? AND password = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('ss', $email, $password);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user) {
    echo json_encode(array(
        'success' => true,
        'message' => 'تم تسجيل الدخول بنجاح',
        'firstName' => $user['firstName'],
        'lastName' => $user['lastName'],
        'phoneNumber' => $user['phoneNumber'],
        'email' => $user['email']
    ));
} else {
    echo json_encode(array('success' => false, 'message' => 'البريد الإلكتروني أو كلمة المرور غير صحيحة'));
}

$conn->close();
?>