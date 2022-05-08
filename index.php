<!DOCTYPE html>
<html lang="it">
    <head>
        <title>BB-TAN</title>
        <meta charset="utf-8">
        <meta name="author" content="Filippo Sechi">
        <meta name="description" content="Web game BB-TAN">
        <link rel="stylesheet" type="text/css" href="css/game.css">
        <link rel="stylesheet" type ="text/css" href="css/page.css">
        <link rel="stylesheet" type="text/css" href="css/font.css">
        <script src="script/game/initial_page.js"></script>
        <script src="script/game/game.js"></script>
        <script src="script/game/collisions.js"></script>
        <script src="script/game/oggetti.js"></script>
        <script src="script/game/throw.js"></script>
        <script src="script/game/obstacles.js"></script>
        <script src="script/game/movement.js"></script>
        <script src="script/game/special.js"></script>
        <script src="script/game/variables.js"></script>
        <script src="script/getUser.js"></script>
        <script src="script/saveGame.js"></script>
    </head>
    <body onload="start()">
        <header>BB-TAN</header>
        <nav>
            <div class = "navigazione">
            <?php 
            include "php/logUtil.php";
            if(!loggedIn())
                echo '<a href = "php/login.php">ACCEDI</a>';
            else
                echo '<a href = "php/accountPageGames.php">ACCOUNT</a>';
            ?>
            </div>   
            <div class = "navigazione"><a href="#decorationTop">GIOCA</a></div>
            <div class = "navigazione"><a href="html/tutorial.html">Tutorial</a></div>
            <div class ="navigazione"><a href="php/globalRanking.php">classifica</a></div>
        </nav>
        <div id="container">
            <div id="decorationTop"></div>
            <div id="game">
                <div id="character"></div>
                <div class="logo">BB-TAN</div>
                <div class="ball"></div>
                <button class="play" onclick="newGame()"></button>
                <span class="option"><button onclick="chooseDifficulty(0)">FACILE</button></span>
                <span class="option"> <button onclick="chooseDifficulty(1)">NORMALE</button></span>
                <span class="option"> <button onclick="chooseDifficulty(2)">DIFFICILE</button></span>
            </div>
            <div id="decorationBottom"></div>
        </div>
        <footer>Sviluppato da Filippo Sechi come progetto per Progettazione Web<br>
                Ispirato all'app mobile BB-TAN di <a href="http://www.111percent.net/" target="_blank">111%</a></footer>
    </body>
</html>