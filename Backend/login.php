<?php

// تضمين ملف قاعدة البيانات
include_once 'database.php';

// قراءة بيانات المستخدم المرسلة من الطلب
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$password = $request->password;

// إنشاء اتصال جديد بقاعدة البيانات
$db = new Database();
$conn = $db->connect();

// التحقق مما إذا كان البريد الإلكتروني وكلمة المرور موجودين في جدول المستخدمين
$query = "SELECT * FROM users WHERE email = ? AND password = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('ss', $email, $password);
$stmt->execute();
$user_result = $stmt->get_result();
$user = $user_result->fetch_assoc();

// التحقق مما إذا كان البريد الإلكتروني وكلمة المرور موجودين في جدول المحامين
$query = "SELECT * FROM lawyers WHERE email = ? AND password = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('ss', $email, $password);
$stmt->execute();
$lawyer_result = $stmt->get_result();
$lawyer = $lawyer_result->fetch_assoc();

// إذا كان المستخدم موجودًا في جدول المستخدمين
if ($user) {
    echo json_encode(array(
        'success' => true,
        'isLawyer' => false,
        'message' => 'تم تسجيل الدخول بنجاح كمستخدم',
        'id' => $user['id'],
        'firstName' => $user['firstName'],
        'lastName' => $user['lastName'],
        'phoneNumber' => $user['phoneNumber'],
        'email' => $user['email'],
        'image' => $user['image'],
    ));
// إذا كان المستخدم موجودًا في جدول المحامين
} elseif ($lawyer) {
    echo json_encode(array(
        'success' => true,
        'isLawyer' => true,
        'message' => 'تم تسجيل الدخول بنجاح كمحامي',
        'id' => $lawyer['id'],
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
// إذا لم يتم العثور على المستخدم في أي من الجداول
} else {
    echo json_encode(array('success' => false, 'message' => 'البريد الإلكتروني أو كلمة المرور غير صحيحة'));
}

// إغلاق الاتصال بقاعدة البيانات
$conn->close();
?>