<?php
include_once 'logUtil.php';
    if(!loggedin())
    {
        header('location: login.php');
        exit;
    }
?>
<!DOCTYPE html>
<html lang='it'>
    <head>
        <meta name="author" content="Filippo Sechi">
        <meta charset="utf-8">
        <meta name="description" content="BB-TAN">
        <link rel="stylesheet" type="text/css" href="../css/page.css">
        <link rel="stylesheet" type="text/css" href="../css/font.css">
        <link rel="stylesheet" type="text/css" href="../css/account.css">
        <script src="../script/requestGames.js"></script>
        <title>Account Page</title>
    </head>
    <body onload="getImage()">
    <header>BB-TAN</header>
        <nav>
            <div class = "navigazione"><a href="accountPage.php">Account</a></div>   
            <div class = "navigazione"><a href="../index.php">GIOCA</a></div>
            <div class = "navigazione"><a href="../html/tutorial.html">Tutorial</a></div>
            <div class ="navigazione"><a href="globalRanking.php">classifica</a></div>
        </nav>
        <div id="container">
            <img alt="immagine profilo" src="uploads/placeholder.png" id="profImg">
            <div id="menu">
                <h1>MENU</h1>
                <ul>
                    <li><a href="">Cronologia partite</a></li>
                    <li><a href="accountPageModify.php">Modifica account</a></li>
                    <li><a href="logOut.php">Logout</a></li>
                </ul>
            </div>
            <div id="buttons">
            <button onclick="requestGames(true,0)">Facile</button>
            <button onclick="requestGames(true,1)">Normale</button>
            <button onclick="requestGames(true,2)">Difficile</button>
            <span>Ordina per:</span>
            <button onclick="requestGames(true,3,'data')">Data</button>
            <button onclick="requestGames(true,3,'punteggio')">Punteggio</button>
            </div>  
            <div id="request">
            </div>
        </div>
        <footer>Sviluppato da Filippo Sechi come progetto per Progettazione Web<br>
                Ispirato all'app mobile BB-TAN di <a href="http://www.111percent.net/" target="_blank">111%</a></footer>   
    </body>