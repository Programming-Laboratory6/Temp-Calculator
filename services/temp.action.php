<?php
    require 'temp.class.php';

    $celsius = $_POST['celsius'];

    if(is_numeric($celsius)){
        $resulth = TempCalculator::calcule($celsius);
    }
    
    echo $resulth;
       
?>