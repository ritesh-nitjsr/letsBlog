
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "db1");

$result = $conn->query("SELECT * FROM postsdb");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"title":"'  . $rs["title"] . '",';
    $outp .= '"text":"'   . $rs["textdata"]        . '",';
    $outp .= '"created_at":"'. $rs["created_at"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
