<?php
// تضمين ملف الاتصال بقاعدة البيانات
include_once 'database.php';

// قراءة البيانات الواردة
$isLawyer = filter_var($_GET['isLawyer'], FILTER_VALIDATE_BOOLEAN);
$id = intval($_GET['id']);

// إنشاء كائن قاعدة البيانات والاتصال بها
$db = new Database();
$conn = $db->connect();

// التحقق مما إذا كان المستخدم محاميًا
if ($isLawyer == true) {
    // إعداد استعلام قاعدة البيانات للمحامين
    $query = "SELECT id, firstName, lastName, specialized, path, advisoryPrice, image FROM lawyers WHERE id = $id";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result();

    $lawyers = array();

    // جلب النتائج وتخزينها في مصفوفة
    while ($row = $result->fetch_assoc()) {
        if (!empty($row['image'])) {
            $imageData = base64_encode($row['image']);
            $row['image'] = $imageData;
        }
        array_push($lawyers, $row);
    }
    // إرسال النتائج ك JSON
    echo json_encode($lawyers);
} else if($isLawyer == false){
    // إعداد استعلام قاعدة البيانات للمستخدمين
    $query = "SELECT id, firstName, lastName, phoneNumber, email, image FROM users";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result();

    $users = array();

    // جلب النتائج وتخزينها في مصفوفة
    while ($row = $result->fetch_assoc()) {
        if (!empty($row['image'])) {
            $imageData = base64_encode($row['image']);
            $row['image'] = $imageData;
        }
        array_push($users, $row);
    }
    // إرسال النتائج ك JSON
    echo json_encode($users);
}

// إغلاق الاتصال بقاعدة البيانات
$conn->close();
?>