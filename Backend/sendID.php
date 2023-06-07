<?php

include_once 'database.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$userID = $request->userID;
$lawyerID = $request->lawyerID;

$db = new Database();
$conn = $db->connect();

// Check if email and password exist in users table.
$query = "SELECT advisoryID FROM users WHERE userID = ? AND lawyerID = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('ss', $userID, $lawyerID);
$stmt->execute();
$user_result = $stmt->get_result();
$user = $user_result->fetch_assoc();

if ($user) {
    echo json_encode(array(
        'success' => true,
        'message' => 'تم جلب رقم تعريف الإستشارة',
        'advisoryID' => $user['advisoryID'],
    ));
} 
else {
    echo json_encode(array('success' => false, 'message' => 'حدثت هناك مشكلة ما'));
}

$conn->close();
?>