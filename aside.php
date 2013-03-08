<aside class="aside">
	<?php
	$current_file = $_SERVER['SCRIPT_NAME']; // Current_file blir index.php därför att aside.php är inkluderad i index.php
	require 'connect.inc.php';
	
	if(isset($_POST['search_name'])){
		$search_name = $_POST['search_name'];
		if(!empty($search_name)){
				
			if(strlen($search_name)>=4)	{ // This condition use to demande the user to tape at least 4 characters in the form to found what exactly he or she searchs
				$query = "SELECT `firstname`, `surname` FROM `users` WHERE  `firstname` LIKE '%".mysql_real_escape_string($search_name)."%'"; // A query is the operation(function) who hälp us to work whith databas. % is a string
				
				$query_run = mysql_query($query); // This function will return the name that the user has taped in the form.
				
				$query_num_rows = mysql_num_rows($query_run); // This function count the number of rows and $query_run will return the result.
				
				if($query_num_rows>=1){ // This condition means if at least 1 row (result) is found, do something.
					echo $query_num_rows."  Results found: <br>";
					
					while ($query_row = mysql_fetch_assoc($query_run)) { // This function will run dta as associativ array and then will save the result in the variable $query_row
						echo '<strong><span style=\'color:#00f\'> '.$query_row['firstname'].' '.$query_row['surname'].' </span></strong><br>'; // ['name'] is name of field and is the key of this associativ array.
					}
				}
				else {
					echo "<strong><span style='color:#f00'>No results found.</strong></span>";
				}
			}
			else {
				echo "<strong><span style='color:#0f0'>Your key words must be 5 or more characters</strong></span>";
			}
		}
	}
?>

<form action="<?php echo $current_file; ?>" method="POST">
Name:	<input type="text" name="search_name" /> <input type="submit" value="Search" />
</form>


</aside>