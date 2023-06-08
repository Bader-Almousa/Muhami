<?php
include "database.php";

$db = new Database();
$conn = $db->connect();

// استلام البيانات المرسلة من الطلب
$id = $_POST['id'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$phoneNumber = $_POST['phoneNumber'];
$email = $_POST['email'];
$license = $_POST['license'];
$specialized = $_POST['specialized'];
$path = $_POST['path'];
$advisoryPrice = $_POST['advisoryPrice'];

// تحديث بيانات المستخدم في جدول MySQL
$sql= "UPDATE lawyers SET firstName='$firstName', lastName='$lastName', phoneNumber='$phoneNumber', email='$email', license='$license', specialized='$specialized', path='$path', advisoryPrice='$advisoryPrice' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  echo "تم تحديث بيانات المستخدم بنجاح";
} else {
  echo "خطأ في تحديث بيانات المستخدم: " . $conn->error;
}
?>