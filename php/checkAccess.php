<?php
    require 'database/DBManager.php';

    $username = $_POST['Username'];
    $password = $_POST['Password'];

    if(checkLogin($username,$password)) //controllo se le credenziali sono corrette
    {   session_start();
        $_SESSION['Username'] = $username;
        header('Location: ../index.php');
        exit;
    }
    else
    header('Location: login.php?errore=failed'); //credenziali sbagliate

    function checkLogin($username, $password)
    {
        global $DBmanager;
        $username = $DBmanager->sqlInjectionFilter($username);
        $query = "SELECT * FROM profili WHERE username='".$username."';";
        $result = $DBmanager->performQuery($query);

        if($result->num_rows != 1)   //utente non presente nel DB
            return false;

        $result = $result->fetch_array();
        $pass_res = $result['Password'];    
        if(!password_verify($password,$pass_res)) //controllo se le password corrispondono
            return false;
        $DBmanager->closeConnection();
        return true;
    }
?>