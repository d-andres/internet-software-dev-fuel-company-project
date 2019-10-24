<?php
$toget = $_POST["id"];
$json = file_get_contents("clientInfo.json");
$json = json_decode($json,true);
echo $json['0'][$toget];
?>