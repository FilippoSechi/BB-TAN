<?php
    require 'database/DBManager.php';
    include 'checkFile.php';
    $username = $_POST['Username'];
    $password = $_POST['Password'];
    $file = checkFile();
    if(!$file)
    {
        header('location: signUp.php?errore=File_non_supportato');
        exit;
    }

    if(!SignUp($username , $password,$file))
    {
        header('location: signUp.php?errore=UserName_non_disponibile');
        exit;
    }

    session_start();
    $_SESSION['Username'] = $username;
    header('location: ../index.php');


    function SignUp ($username,$password,$file)
    {
        global $DBmanager;
        $username = $DBmanager->sqlInjectionFilter($username);
        $password = password_hash($password, PASSWORD_DEFAULT);

        $query = "INSERT INTO Profili(Username,Password,Immagine) VALUES ('".$username."','".$password."','".$file."');";
        
        if(!$DBmanager->performQuery($query)) //Username già in uso
            return false;

        move_uploaded_file($_FILES['file']['tmp_name'],$file);
        $DBmanager->closeConnection();
        return true;
    }
?>