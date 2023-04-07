<?php

session_start();

     
$conn = mysqli_connect('', 
'', 
'', 
'');
        
if($conn->connect_errno){
    echo $conn->connect_errno;
    die ("Připojení selhalo!".$conn->connect_errno);
} else{
    echo ("Připojeno!");
}

$localname = $_POST['jmeno'];
$localsurname = $_POST['prijmeni'];
$localemail = $_POST['email'];
$localphone = $_POST['telefon'];

$submit = $_POST['odeslat'];

if(isset($submit))
        {
            echo "formulář odeslán!";
            $sqlPridejJedna = "INSERT INTO `autos` (`jmeno`, `prijmeni`, `email`, `telefon`) VALUES ('$localname','$localsurname','$localemail','$localphone')";
    
            if(mysqli_query($conn, $sqlPridejJedna))
            {
                echo "Přidán nový uživatel!";
            }
            else{
                echo "Error: ".$sqlPridejJedna." ".$conn->error;
            }
            header('Location: http://patas.xf.cz/autosalon/php/vimeOVas.php');
        }
?>
 
