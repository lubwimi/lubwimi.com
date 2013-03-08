<?php
require 'core.inc.php';
 require 'connect.inc.php';	// Här gör vi connection to database
	
	if(!loggedin()) {
		//Först ska vi kolla om användare finns redan i databasen eller inte med hjälp av följande if statement
		if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['password_again']) && isset($_POST['firstname']) && isset($_POST['surname'])){
			$username = $_POST['username'];
			$email = $_POST['email'];
			
			$password = $_POST['password'];
			$password_again = $_POST['password_again'];
			$password_hash = md5($password); // Här kommer password ändras till hash för att skida användarens lösenord. Och alla hash har 32 characters i database
			
			$firstname = $_POST['firstname'];
			$surname = $_POST['surname'];
			
			if(!empty($username) && !empty($password) && !empty($password_again) && !empty($firstname) && !empty($surname) && !empty($email)){ // Här validerar vi.
				
				if(strlen($username) > 30 || strlen($firstname) > 40 || strlen($surname) > 40 ) { // Här ger vi vilkor till användare att skriva max characters (se här nedan i formuläret(maxlength)) som finns i databasen. 
					
					echo "Please ahear to maxlength of fields";
				}else{
					
					if($password != $password_again){
						echo "Passwords do not match.";
					}else {
						// Start registretion process: först ska vi kolla om användare finns i databasen med hjälp av följande query
						$query = "SELECT `username` FROM `users` WHERE `username`='$username'";
						$query_run = mysql_query($query);
						
						if(mysql_num_rows($query_run) == 1){ // Här kollar vi om det finns en rad med det aktuella användare som vill loga in.
							echo 'The username '.$username.' already exists. Click here to see your result ';
							echo "<a href='primary.php'>Search</a>";
						}else {
							// Här nedan börjar vi registrering process.
							$query = "INSERT INTO `users` VALUES ('', '".mysql_real_escape_string($username)."', '".mysql_real_escape_string($password_hash)."', '".mysql_real_escape_string($firstname)."', '".mysql_real_escape_string($surname)."')";
							// mysql_real_escape_string är en funktion som skidar injection mot dåliga characters like username = 'OR"=' och password = 'OR"='
							
							if($query_run = mysql_query($query)) {
								echo "<span style='color:#00f'>You are loged in. Now you can click on the link below and search for your result </span><br>";
								echo "<a href='primary.php'>Search</a>";
							//	header('Location: index.php');// d.v.s. efter användare har registrerat sig ska han/hon komma tillbaka till index.php som i sin tur innehåller loggedin.php(logga in formulär)
							}else {
								echo "Sorry we could not register you at this time. Try again later.";
							}
						}
						
					}
				}
					
				}else {
				echo "Complete all forms";
			}
		}
?> <!-- Vi stänger php här för att kunna skapa  register formulär i html dvs här nedan -->

<table border="3px" align="center" width="30%" style="margin-top: 120px; border-radius:10px 10px 10px 10px;" >
	<tr>
		<th bgcolor="#6495ED" height="10px" style="background: none repeat scroll 0% 0% rgl(0,0,255); color: rgb(255, 255, 255); border-radius:5px 5px 5px 5px; ">
			Welcome and register
		</th>
	</tr>
	<tr>
		<td align="center" bgcolor="#999" style="border-radius: 10px 10px 10px 10px;">
			 <form action="register.php" method="POST">
			 	Username:<br> <input type="text" name="username" maxlength="30" style="border-radius: 5px 5px 5px 5px;" value="<?php if(isset($username)) echo $username; ?>" /><br><br> <!-- Det är if(isset()) som vi har skrivit som gör att php block som vi har inbedat (lakt) i html formulär kommer inte att syns även vi har skrivit value -->
			 	Password:<br> <input type="password" name="password" style="border-radius: 5px 5px 5px 5px;"/><br><br> <!-- Password behöver inte attribut maxlength därför att hash har alltid 32 characters.  -->
			 	Password again:<br> <input type="password" name="password_again" style="border-radius: 5px 5px 5px 5px;" /><br><br>
			 	Firstname:<br> <input type="text" name="firstname" maxlength="40" style="border-radius: 5px 5px 5px 5px;" value="<?php if(isset($firstname))  echo $firstname; ?>" /><br><br>  <!-- maxlength gör att totalt bokstäver som användare kommer att skriva i formuläret blir det samma som i database varcha.  -->
			 	Surname:<br> <input type="text" name="surname" maxlength="40" style="border-radius: 5px 5px 5px 5px;" value="<?php if(isset($surname))  echo $surname; ?>" /><br><br>
			 	Email:<br> <input type="text" name="email" /><br><br>
				<input type="submit" value="Register" />
			 </form>
		 </td>
	 </tr>
 </table>
 

	
<?php	
	}else if (loggedin()) {
		echo 'You\'re already registered and logged in.';
	}
?>