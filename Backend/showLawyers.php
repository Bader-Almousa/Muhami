<?php


include_once 'database.php';

$db = new Database();
$conn = $db->connect();

$query = "SELECT id, firstName, lastName, specialized, path, advisoryPrice, image FROM lawyers";
$stmt = $conn->prepare($query);
$stmt->execute();
$result = $stmt->get_result();

$lawyers = array();

while ($row = $result->fetch_assoc()) {
    if (!empty($row['image'])) {
        $imageData = base64_encode($row['image']);
        $row['image'] = $imageData;
    }
    array_push($lawyers, $row);
}
echo json_encode($lawyers);

$conn->close();
?>