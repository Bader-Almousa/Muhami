<?php

// تضمين ملف قاعدة البيانات
include_once 'database.php';

// جلب قيم المتغيرات من نموذج POST
$isLawyer = $_POST['isLawyer'];
$id = $_POST['id'];

// إنشاء اتصال جديد بقاعدة البيانات
$db = new Database();
$conn = $db->connect();

// التحقق مما إذا كان البريد الإلكتروني وكلمة المرور موجودين في جدول المحامين أو المستخدمين
if ($isLawyer == true) {
    $query = "SELECT * FROM lawyers WHERE id = $id";
    $result = $conn->query($query);
    if ($result->num_rows > 0) {
        $lawyer = $result->fetch_assoc();
        echo json_encode(array(
            'success' => true,
            'message' => 'تم تحديث بيانات المحامي بنجاح',
            'firstName' => $lawyer['firstName'],
            'lastName' => $lawyer['lastName'],
            'phoneNumber' => $lawyer['phoneNumber'],
            'email' => $lawyer['email'],
            'license' => $lawyer['license'],
            'specialized' => $lawyer['specialized'],
            'path' => $lawyer['path'],
            'advisoryPrice' => $lawyer['advisoryPrice'],
            'image' => $lawyer['image'],
        ));
    } else {
        echo json_encode(array(
            'success' => false,
            'message' => 'حدث خطأ اثناء تحديث بيانات المحامي ',
        ));
    }
} else {
    $query = "SELECT * FROM users WHERE id = $id";
    $result = $conn->query($query);
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        echo json_encode(array(
            'success' => true,
            'message' => 'تم تحديث بيانات المحامي المستخدم',
            'firstName' => $user['firstName'],
            'lastName' => $user['lastName'],
            'phoneNumber' => $user['phoneNumber'],
            'email' => $user['email'],
            'image' => $user['image'],
        ));
    } else {
        echo json_encode(array(
            'success' => false,
            'message' => 'حدث خطأ اثناء تحديث بيانات المستخدم ',
        ));
    }
}

// إغلاق الاتصال بقاعدة البيانات
$conn->close();
?>