<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once 'database.php';

$db = new Database();
$conn = $db->connect();

$data = json_decode(file_get_contents("php://input"));

$advisoryID = $data->advisoryID;
$advisoryStatus = $data->advisoryStatus;
$advisoryAnswer = isset($data->advisoryAnswer) ? $data->advisoryAnswer : '';

if ($advisoryStatus === 'finished' && $advisoryAnswer !== '') {
  $sql = "UPDATE advisoryinfo SET advisoryStatus = '$advisoryStatus', advisoryAnswer = '$advisoryAnswer' WHERE advisoryID = $advisoryID";
} else {
  $sql = "UPDATE advisoryinfo SET advisoryStatus = '$advisoryStatus' WHERE advisoryID = $advisoryID";
}

if ($conn->query($sql) === TRUE) {
  echo json_encode(array("message" => "تم تحديث حالة الاستشارة بنجاح."));
} else {
  echo json_encode(array("message" => "حدث خطأ أثناء تحديث حالة الاستشارة."));
}

$conn->close();
?>