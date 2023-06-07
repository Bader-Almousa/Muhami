<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once 'database.php';

$db = new Database();
$conn = $db->connect();

$lawyerId = $_GET['lawyerID'];

$sql = "SELECT advisoryinfo.advisoryID, advisoryinfo.userID, advisoryinfo.lawyerID, advisoryinfo.advisoryType, advisoryinfo.advisoryContent, advisoryinfo.advisoryStatus, users.firstName as userName FROM advisoryinfo INNER JOIN users ON advisoryinfo.userID = users.id WHERE advisoryinfo.lawyerID = $lawyerId";

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