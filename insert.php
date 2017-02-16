<?php 

$data = json_decode(file_get_contents("php://input"));
$title = mysql_real_escape_string($data->title);
$text = mysql_real_escape_string($data->text);
$created_at = mysql_real_escape_string($data->created_at);
mysql_connect("localhost", "root", "") or die(mysql_error()); 
mysql_select_db("db1") or die(mysql_error()); 
mysql_query("INSERT INTO postsdb (title,textdata,created_at) VALUES ('$title', '$text','$created_at')"); 
//echo "Your information has been successfully added to the database."; 



 ?>