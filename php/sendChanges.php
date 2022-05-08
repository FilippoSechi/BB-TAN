<?php
require 'database/DBmanager.php';
include 'checkFile.php';
if(isset($_POST['oldPass']))
    $oldPass = $_POST['oldPass'];
else
    $oldPass = false;

if(isset($_POST['oldPass']))
    $newPass = $_POST['newPass'];
else
    $newPass = false;

if($_FILES['file']['name'] != null) //controllo se è stato caricato un file
{
    $file = checkFile();
    if($file == '')                //controllo se il formato del file è consentito
    {
        header('location: accountPageModify.php?errore=File_non_supportato');
        exit;
    }
}
else
    $file = false;

checkChanges($oldPass,$newPass,$file);
header('location:accountPageModify.php?ok=1');

function checkChanges($oldPass,$newPass,$file)
{
    global $DBmanager;
    session_start();
    $username = $_SESSION['Username'];
    $username = $DBmanager->sqlInjectionFilter($username);
    if($oldPass && $newPass)    //se voglio cambiare password devo verificare che sia stata inserita quella giusta
    {
        $query = "SELECT Password from profili where username='$username';";
        $result = $DBmanager->performQuery($query);
        $result = $result->fetch_array();
        $pass_res = $result['Password'];    
        if(!password_verify($oldPass,$pass_res))
        {
            header ('location: accountPageModify.php?errore=Password_errata');
            exit;
        }
        $newPass = password_hash($newPass,PASSWORD_DEFAULT);
        $query = "UPDATE profili SET password ='$newPass' where username = '$username';";
        $DBmanager->performQuery($query);
    }

    if($file)
    {
        $query = "SELECT immagine from profili where username='$username';";
        $del_file = $DBmanager->performQuery($query);
        $del_file = $del_file->fetch_assoc();
        
        if($del_file['immagine'] != 'uploads/placeholder.png') //l'immagine di default non deve essere eliminata
            unlink($del_file['immagine']);
        $query = "UPDATE profili SET Immagine ='$file' where username = '$username';";
        $DBmanager->performQuery($query);
        move_uploaded_file($_FILES['file']['tmp_name'],$file);
    }

    $DBmanager->closeConnection();
}
?>