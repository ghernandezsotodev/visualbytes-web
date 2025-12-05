<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

// Conectar con la base de datos
$servername = "localhost";
$username = "root";  
$password = "";      
$database = "contact_form"; 

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

// Leer datos del formulario enviado por React
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["name"], $data["email"], $data["message"])) {
    $name = $conn->real_escape_string($data["name"]);
    $email = $conn->real_escape_string($data["email"]);
    $message = $conn->real_escape_string($data["message"]);

    $sql = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => "Mensaje enviado con éxito"]);
    } else {
        echo json_encode(["error" => "Error al enviar el mensaje: " . $conn->error]);
    }
} else {
    echo json_encode(["error" => "Datos incompletos"]);
}

$conn->close();
?>
