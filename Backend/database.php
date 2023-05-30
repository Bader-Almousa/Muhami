<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');
header('Content-Type: text/plain');

class Database {
  private $host = 'localhost';
  private $db_name = 'muhami';
  private $username = 'root';
  private $password = '';
  private $conn;

  public function connect() {
    $this->conn = null;

    try {
      $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
    } catch (Exception $e) {
      echo 'Connection Error: ' . $e->getMessage();
    }

    return $this->conn;
  }
}
?>