<!-- Den här filen är includeras först i register_success.php och sedan i inside.php -->

<?php
require 'core.inc.php'; // Vi require filen core.inc.php här därför att vi har session_start() finns i. 
						// Så innan vi ska loggout måst vi först ha startat session.

session_destroy(); // Den här funktionen kommer att stoppa alla session_start().

header("Location: index.php"); // Här refererar vi användare tillbaka till sidan var i från vi kom. Därför har vi funktionen ob_start()
									// i början av core.inc.php filen
?>