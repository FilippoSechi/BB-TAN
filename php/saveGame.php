<?php
require 'database/DBmanager.php';
$username = $_POST['Username'];
$data = date("Y-m-d H:i:s");
$punteggio = $_POST['Punteggio'];
$diff = $_POST['Difficolta'];

if(saveGame($username,$punteggio,$data,$diff))
    echo 'salvataggio completato';

else
    echo 'salvataggio fallito';
exit;

function saveGame($username,$punteggio,$data,$diff)
{
    global $DBmanager;
    $username = $DBmanager->sqlInjectionFilter($username);
    $data = $DBmanager->sqlInjectionFilter($data);
    $punteggio = $DBmanager->sqlInjectionFilter($punteggio);
    $diff = $DBmanager->sqlInjectionFilter($diff);

    $query = "INSERT INTO Partite(Username,Punteggio,Difficolta,Data) VALUES ('$username',$punteggio,$diff,'$data');";
    if(!$DBmanager->performQuery($query))
        return false;
    
        $DBmanager->closeConnection();
    return true;
}
?>