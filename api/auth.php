<?php
header('Access-Control-Allow-Origin: *');

if((isset($_POST["username"]) && !empty($_POST["username"])) && (isset($_POST["password"]) && !empty($_POST["password"]))) {
    
    $username = $_POST["username"];
    $password = $_POST["password"];
    $conn = mysqli_connect("localhost", $username, $password, "test");    
    
    if (mysqli_ping($conn)) {
        
        $query1 = "SELECT * FROM clientinformation";
        $query2 = "SELECT * FROM fuelquote";
        $result1 = mysqli_query($conn, $query1);
        $result2 = mysqli_query($conn, $query2);

        $json1 = array();
        $json2 = array();
        $cId = '';

        while($row = mysqli_fetch_array($result1))
        {
            if ($row["email"] == $username) {
                $cId = $row["clientId"];
                $json1[] = $row;
            }
        }

        while($row = mysqli_fetch_array($result2))
        {
            if ($row["clientId"] == $cId) {
                $json2[] = $row;
            }
        }

        $fp1= fopen($_SERVER['DOCUMENT_ROOT'] . "/api/clientInfo.json", "w");
        fwrite($fp1, json_encode($json1, JSON_PRETTY_PRINT));
        fclose($fp1);

        $fp2= fopen($_SERVER['DOCUMENT_ROOT'] . "/api/quoteHistory.json", "w");
        fwrite($fp2, json_encode($json2, JSON_PRETTY_PRINT));
        fclose($fp2);
        mysqli_close($conn);

        ?>
        {
            "success": true,
            "message": "Successful Login."
        }
        <?php
    }
    else {
        ?>
        {
            "success": false,
            "message": "Invalid Combination."
        }
        <?php
    }
}
else { 
    ?>
    {
        "success": false,
        "message": "Please enter a username and password."
    }
    <?php
}
?>