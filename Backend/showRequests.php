<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once 'database.php';

$db = new Database();
$conn = $db->connect();

$userId = $_GET['userID'];

$sql = "SELECT advisoryinfo.advisoryID, advisoryinfo.userID, advisoryinfo.lawyerID, advisoryinfo.advisoryType, advisoryinfo.advisoryContent, advisoryinfo.advisoryStatus, lawyers.firstName as lawyerName FROM advisoryinfo INNER JOIN lawyers ON advisoryinfo.lawyerID = lawyers.id WHERE advisoryinfo.userID = $userId";

$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    array_push($data, $row);
  }
} else {
  echo "0 results";
}

echo json_encode($data);

$conn->close();
?>