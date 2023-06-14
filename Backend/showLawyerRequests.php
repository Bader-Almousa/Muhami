<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once 'database.php';

$db = new Database();
$conn = $db->connect();

$lawyerID = isset($_GET['lawyerID']) ? $_GET['lawyerID'] : die();

$query = "SELECT advisoryinfo.advisoryID, advisoryinfo.userID, advisoryinfo.lawyerID, advisoryinfo.advisoryType, advisoryinfo.advisoryContent, advisoryinfo.advisoryStatus, users.firstName as userName FROM advisoryinfo INNER JOIN users ON advisoryinfo.userID = users.id WHERE advisoryinfo.lawyerID = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $lawyerID);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $requests = array();
    while ($row = $result->fetch_assoc()) {
        $request_item = array(
            "advisoryID" => $row["advisoryID"],
            "userName" => $row["userName"],
            "advisoryType" => $row["advisoryType"],
            "advisoryContent" => $row["advisoryContent"],
            "advisoryStatus" => $row["advisoryStatus"]
        );
        array_push($requests, $request_item);
    }
    echo json_encode($requests);
} else {
    echo json_encode(
        array("message" => "لا يوجد طلبات.")
    );
}
?>