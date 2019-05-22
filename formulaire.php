<!DOCTYPE html>

<html>

  <head>
      <meta charset="utf-8" />
      <title>Formulaire</title>
  </head>

<body>        
<?php

  if(isset($_POST['password']) AND ($_POST['password'] ==  "formulaire"))

   {

       include "index.html";

   }

   else

   {

       echo "<p>Mot de passe incorrect</p>";

   }  
?>

</body>
</html>