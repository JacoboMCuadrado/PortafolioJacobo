<?php
  require("../database_conection.php");
  //if($connection){
    //echo("todo bien");
  //}
  if (isset($_POST["mandar"])){
      $name = $_POST["myname"];
      $email = $_POST["myemail"];
      $company = $_POST["companyname"];
      $request = $_POST["requesttype"];
      $com = $_POST["mycomments"];
      $sub = $_POST["subscribe"];
      $sus = $_POST["reference"];
      $view = "INSERT INTO event_attendee(id, name, company, email) VALUES (null ,'$name','$company','$email')";
      $resultado = mysqli_query($connection , $view);
  }
?>


