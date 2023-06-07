<?php

include "database.php";

$db = new Database();
$conn = $db->connect();

$userID = $_POST['userID'];
$lawyerID = $_POST['lawyerID'];
$advisoryTitle = $_POST['advisoryTitle'];
$advisoryType = $_POST['advisoryType'];
$advisoryContent = $_POST['advisoryContent'];
$advisoryStatus = $_POST['advisoryStatus'];

$sql = "UPDATE advisoryinfo SET 
  advisoryTitle = '$advisoryTitle',
  advisoryType = '$advisoryType',
  advisoryContent = '$advisoryContent',
  advisoryStatus = '$advisoryStatus'
  WHERE userID = '$userID' AND lawyerID = '$lawyerID'";

$result = mysqli_query($conn, $sql);
if ($result){
  echo json_encode(['status' => 'success', 'message' => 'تم تحديث معلومات الاستشارة بنجاح.']);
} else {
  echo json_encode(['status' => 'error', 'message' => 'حدث خطأ أثناء تحديث معلومات الاستشارة.']);
}

$conn->close();
?>