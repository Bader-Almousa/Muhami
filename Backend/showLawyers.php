<?php
include_once 'database.php';

$db = new Database();
$conn = $db->connect();

$path = $_GET['path'];
$search = isset($_GET['search']) ? $_GET['search'] : '';

$searchQuery = '%' . $search . '%';

$query = "SELECT id, firstName, lastName, specialized, path, advisoryPrice, image
          FROM lawyers
          WHERE path=? AND (firstName LIKE ? OR lastName LIKE ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("sss", $path, $searchQuery, $searchQuery);
$stmt->execute();
$result = $stmt->get_result();

$lawyers = array();

while ($row = $result->fetch_assoc()) {
    array_push($lawyers, $row);
}
echo json_encode($lawyers);

$conn->close();
?>