<?php
ob_start(); // Den här function är för att när vi ska öpna index.php header file ska läsas på en gång.
session_start(); 

$current_file = $_SERVER['SCRIPT_NAME']; // Här skapar vi en variabel som vi ska sätta i action av formuläret som finns i loginform.inc.php filen. 

if(isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTT_REFERER'])) { // !emmpty är jätteviktigt anars får vi fel meddelande att HTTP_REFERER är undefine.
	
		
	$http_referer = $_SERVER['HTTP_REFERER']; // Den här variabel kommer att existera därför att vi har satt if vilkor. Den här variabel ska säga till om vilken sida är vi från.
}

function loggedin() { // Den här funktionen kunde vi inte skapa den om i stället hade skapat följande if statament i section.php filen
	if(isset($_SESSION['user_id']) && !empty($_SESSION['user_id'])){
		return true;
	}else{
		return false;
	}
}

function getuserfield($field) { // Den här funktion är för att veta vilken användare som är in loggad.
		
	$query = "SELECT `$field` FROM `users` WHERE `id`='".$_SESSION['user_id']."'";
	
	if($query_run = mysql_query($query)) { // Här har vi if statement för att säga att följande block{} ska exekuteras om $query är sant. 
		
		if($query_result = mysql_result($query_run, 0, $field) ) { // Den här if är för att säga att om $query_run har hitta någonting då ska 
																  
				return $query_result; // Fuktionen returnera resultatet. Och resultatet som ska returneras är $query_run,
													// 0 dvs noll om ingen är inloggad eller en field(kolumn) som är id av användare 
													//  och $field som är firstname t.ex. som är inloggad i den här fallet annars, 
		}
	}
}

?>

