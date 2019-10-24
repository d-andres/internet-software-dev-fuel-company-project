<?php
header('Access-Control-Allow-Origin: *');
$conn = mysqli_connect("localhost", "admin", "admin", "test");

$email = $_POST["email"];
$value = $_POST["value"];
$title = $_POST["title"];

$result = $conn->query("SELECT * FROM clientinformation WHERE email='$email'");

if ($result) {
    if ($title = "fullName") {
        $conn->query("UPDATE clientinformation SET fullName = '$value' WHERE email = '$email'");
    }
    else if ($title = "address") {
        $conn->query("UPDATE clientinformation SET address = '$value' WHERE email = '$email'");
    }
    else if ($title = "city") {
        $conn->query("UPDATE clientinformation SET city = '$value' WHERE email = '$email'");
    }
    else if ($title = "state") {
        $conn->query("UPDATE clientinformation SET state = '$value' WHERE email = '$email'");
    }
    else if ($title = "zipCode") {
        $conn->query("UPDATE clientinformation SET zipCode = '$value' WHERE email = '$email'");
    }
    else if ($title = "phone") {
        $conn->query("UPDATE clientinformation SET phone = '$value' WHERE email = '$email'");
    }

    $query1 = "SELECT * FROM clientinformation";
    $result1 = mysqli_query($conn, $query1);
    $json1 = array();
    while($row = mysqli_fetch_array($result1))
    {
        if ($row["email"] == $email) {
            $json1[] = $row;
        }
    }
    $fp1= fopen($_SERVER['DOCUMENT_ROOT'] . "/api/clientInfo.json", "w");
    fwrite($fp1, json_encode($json1, JSON_PRETTY_PRINT));
    fclose($fp1);

    mysqli_close($conn);
    ?>
        {
            "attempt": true,
            "message": "Successfully Updated."
        }
    <?php
}
else {
    mysqli_close($conn);
    ?>
        {
            "attempt": false,
            "message": "Unable to Update."
        }
    <?php
}
?>