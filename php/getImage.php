<?php
require_once 'database/DBmanager.php';
echo getImage();

//ritorna il path dell'immagine profilo
function getImage()
{
    global $DBmanager;

    session_start();
    $username = $_SESSION['Username'];
    $username = $DBmanager->sqlInjectionFilter($username);

    $query = "SELECT immagine FROM profili where username='$username';";
    $result = $DBmanager->performQuery($query);
    $DBmanager->closeConnection();

    $result = $result->fetch_assoc();
    return $result['immagine'];
}
?>