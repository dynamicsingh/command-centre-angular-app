<?php
/*************  Local server settings  *********/
$db_username = 'root'; $db_password = ''; $db_name = 'personal_paul_locker';

/*************   Live server settings ************/
//$db_username = 'locker'; $db_password = ')f(.Ep{vXCsZ'; $db_name = 'personal_paul_locker';



$db_host = 'localhost';

$link = mysqli_connect($db_host, $db_username, $db_password,$db_name)or die('could not connect to database');
	putenv("TZ=Europe/London");
    date_default_timezone_set("Europe/London");

?>