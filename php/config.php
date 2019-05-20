<?php
	$db_host = "";
	$db_user = "";
	$db_pass = "";
	$db_bdd  = "";

	try{
		$bdd = new PDO("mysql:host=$db_host;dbname=$db_bdd;charset=utf8", $db_user, $db_pass);
		$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch (Exception $e){
		die('Erreur : ' . $e->getMessage());
	}
?>