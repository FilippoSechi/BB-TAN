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
        <title>Global Ranking</title>
    </head>
    <body onload="requestGames(false)">
    <header>BB-TAN</header>
        <nav>
            <div class = "navigazione">
            <?php 
            include "logUtil.php";
            if(!loggedIn())
                echo '<a href = "login.php">ACCEDI</a>';
            else
                echo '<a href = "accountPageGames.php">ACCOUNT</a>';
            ?>
            </div>   
            <div class = "navigazione"><a href="../index.php">GIOCA</a></div>
            <div class = "navigazione"><a href="../html/tutorial.html">Tutorial</a></div>
            <div class ="navigazione"><a href="">classifica</a></div>
        </nav>
        <div id="container">
            <div id="buttons" style="left:200px">
            <button onclick="requestGames(false,0)">Facile</button>
            <button onclick="requestGames(false,1)">Normale</button>
            <button onclick="requestGames(false,2)">Difficile</button>
            <span>Ordina per:</span>
            <button onclick="requestGames(false,3,'data')">Data</button>
            <button onclick="requestGames(false,3,'punteggio')">Punteggio</button>
            </div>  
            <div id="request" style="left:120px">
            </div>
        </div>
        <footer>Sviluppato da Filippo Sechi come progetto per Progettazione Web<br>
                Ispirato all'app mobile BB-TAN di <a href="http://www.111percent.net/" target="_blank">111%</a></footer>   
    </body>