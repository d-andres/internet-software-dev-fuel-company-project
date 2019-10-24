<?php
header('Access-Control-Allow-Origin: *');
$conn = mysqli_connect("localhost", "admin", "admin", "test");

$i1 = $_POST["clientId"];
$i2 = $_POST["gallonsRequested"];
$i3 = $_POST["deliveryDate"];
$i4 = $_POST["deliveryAddress"];
$i5 = $_POST["deliveryCity"];
$i6 = $_POST["deliveryState"];
$i7 = $_POST["deliveryZipCode"];
$i8 = $_POST["deliveryContactName"];
$i9 = $_POST["deliveryContactPhone"];
$i10 = $_POST["deliveryContactEmail"];
$i11 = $_POST["suggestedPrice"];
$i12 = $_POST["totalAmountDue"];

$query = mysqli_query($conn,"insert into fuelquote(quoteId, clientId, gallonsRequested, requestDate, deliveryDate, 
deliveryAddress, deliveryCity, deliveryState, deliveryZipCode, deliveryContactName, deliveryContactPhone, 
deliveryContactEmail, suggestedPrice, totalAmountDue)
values( NULL, '$i1', '$i2', CURRENT_DATE(), '$i3', '$i4', '$i5', '$i6', '$i7', '$i8', '$i9', '$i10', '$i11', '$i12')");

mysqli_close($conn);
if ($query) {
    ?>
        {
            "attempt": true,
            "message": "Submitted Request."
        }
    <?php
}
else {
    ?>
        {
            "attempt": false,
            "message": "Unable to Submit Request."
        }
    <?php
}
?>