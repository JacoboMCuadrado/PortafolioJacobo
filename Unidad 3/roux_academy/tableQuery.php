<?php

    require 'dbconnection.php';

    $query="SELECT * FROM userrecords";
    $queryTable=mysqli_query($connection,$query);

?>