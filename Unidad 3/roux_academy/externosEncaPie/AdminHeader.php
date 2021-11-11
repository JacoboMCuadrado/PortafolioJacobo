<?php

  session_start();
  if(!isset($_SESSION['user'])){
        header("Location: index.php");
    }
    
    echo 
    "<script>
      function cerrar(){
        if(confirm('Do you want to sign off?')){
          document.location='closeSesion.php';
        }
    }
    </script>";
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Roux Conference: Artists</title>
<link rel="stylesheet" href="/Unidad 3/roux_academy/css/style.css">
<link rel="stylesheet" href="/Unidad 3/roux_academy/css/tableStyles.css">
</head>
<body id="page_artists">
<div class="wrapper">
  <header>
    <div class="branding"> <img src="/Unidad 3/roux_academy/images/ralogo_monogram.png" alt="Logo">
      <p>Roux Academy<br>
        Art • Media • Design</p>
    </div>
    <div class="description">
      <h1>Roux Academy 2016 Art Conference</h1>
      <p>Join over 500 hundred of the most creative and brilliant minds of art colleges all around the world for five days of 
        lectures by world-renowned art scholars and artists, and seven days and nights of gallery exhibits featuring the best in contemporary art, 
        including painting, sculpture, and more, in the beautiful halls of Hotel Contempo in the heart of Seattle.</p>
        
    </div>
    <nav>
      <ol>
        <li><a href="/Unidad 3/roux_academy/indexAdminView.php" class = "navstyles">HOME</a></li>
        <li><a href="/Unidad 3/roux_academy/artistsAdminView.php" class = "navstyles">ARTISTS</a></li>
        <li><a href="/Unidad 3/roux_academy/schedule/indexAdminView.php" class = "navstyles">SCHEDULE</a></li>
        <li><a href="/Unidad 3/roux_academy/venueAdminView.php" class = "navstyles">VENUE/TRAVEL</a></li>
        <li><a href="/Unidad 3/roux_academy/showRecords.php" class = "navstyles">RECORD</a></li>
        <li><a onclick="cerrar()"; class = "signOff" >SIGN OFF</a></li>
        <h2 class="username" ><?php echo "USER:  " .  $_SESSION['user'];?></h2>
      </ol>
    </nav>
  </header>
  <div id="rotator"> <img src="/Unidad 3/roux_academy/images/art01.jpg" alt="Artwork from show"> </div>