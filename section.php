<!--<section class="login">
	<?php
		require 'core.inc.php';
		
		require 'connect.inc.php';
		
		if ( loggedin() ) { // Här ropar vi en funktion som finns i filen core.inc.php
		
			$firstname = getuserfield('firstname'); // Här anropar vi funktionen som finns i core.inc.php och har för uppgift att hämta kolumn
			$surname = getuserfield('surname');	// och kolumnen som ska hämtas är firstname och surname vars id är av användare som är inloggad med hjälp
											// av sin lösenord oc användarnamn. I stället för 'firstname' vi kan också skriva vad som helst vi vill plocka fram på skärmen.
											// t.ex. telefoneumer, adress etc.
			echo 'You\'re logged in, '.$firstname.' '.$surname.' .';
		}
		
	?>
	
</section> -->