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
$image = $_POST['image'];

// تحديث بيانات المستخدم في جدول MySQL
$sql= "UPDATE users SET firstName='$firstName', lastName='$lastName', phoneNumber='$phoneNumber', email='$email', image='$image' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  echo "تم تحديث بيانات المستخدم بنجاح";
} else {
  echo "خطأ في تحديث بيانات المستخدم: " . $conn->error;
}
?>