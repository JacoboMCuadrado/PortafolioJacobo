<?php
    $bd = 'rouxacademy';    
    $server = 'localhost';
    $user='root';
    $pass='';
    
    
    $connection=mysqli_connect($server,$user,$pass,$bd);

    if(!$connection){
        die('Database ' . $bd . ' Failed: ' . mysqli_connect_error());
    }

    function user_validation($user, $pass, $connection){
        $query = "SELECT 1 AS validUser FROM adminrecords WHERE admin_name='$user' AND password=MD5('$pass')";
        
        $response = mysqli_query($connection, $query) or die('FAIL');
        if(mysqli_num_rows($response) == 0){
            return false;
        } else{
            return true;
        }
    }    
?>