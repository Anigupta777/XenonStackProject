<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$database_name = "register";

// Database Connection
$conn = mysqli_connect($servername, $username, $password, $database_name);
if (!$conn) {
    die('Connection Failed : ' . mysqli_connect_error());
}

if (isset($_POST['save'])) {
    $name = $_POST['name'];
    $emailid = isset($_POST['emailid']) ? $_POST['emailid'] : '';
    $password = $_POST['password'];
    $confirm_password = $_POST['confirmpassword'];
    $telephone = $_POST['number'];
    $gender = $_POST['gender'];

    $sql_query = "INSERT INTO xenonform (name, emailid, password, confirmpassword, number, gender)
                VALUES ('$name', '$emailid', '$password', '$confirm_password', '$telephone', '$gender')";

    if (mysqli_query($conn, $sql_query)) {
        echo "Registration Successfully...";
    } else {
        echo "Error: " . $sql_query . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>