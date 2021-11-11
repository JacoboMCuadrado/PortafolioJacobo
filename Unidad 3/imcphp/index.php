<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora IMC</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    
    <h1>Calculo del IMC</h1>
    <form action="#" method = "GET">

        <label>Peso: </label>
        <input type="text" class="center-block" name="peso" id="peso">
        <br><br>
        <label>Altura: </label>
        <input type="text" class="center-block" name="altura" id="altura">
        <br><br>
        <input type="submit" class="button" name="calculate" value="Calcular">

    </form>

    <?php

        if(isset($_GET["calculate"])){
            $v_peso = $_GET["peso"];
            $v_altura = $_GET["altura"];
            $v_imc = $v_peso / pow($v_altura, 2);

            echo "<h2> Su IMC es: " . $v_imc . "\nSe encuentra en el grupo: </h2>";

            if ($v_imc < 18.5){
                echo "<h2>Peso insuficiente </h2>";
            }else if ($v_imc < 24.9){
                echo "<h2>Peso normal </h2>";
            }else if ($v_imc < 26.9){
                echo "<h2>Sobrepeso I</h2>";
            }else if ($v_imc < 29.9){
                echo "<h2>Sobrepeso II<h2>";
            }else if ($v_imc < 34.9){
                echo "<h2>Obesidad I <h2>";
            }else if ($v_imc < 39.9){
                echo "<h2>Obesidad II <h2>";
            }else if ($v_imc < 49.9){
                echo "<h2>Obesidad III <h2>";
            }else{
                echo "<h2>Obesidad IV <h2>";
            }
        }
    ?>
</body>
</html>