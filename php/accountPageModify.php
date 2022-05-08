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
            <div class = "navigazione"><a href="accountPageGames.php">Account</a></div>   
            <div class = "navigazione"><a href="../index.php">GIOCA</a></div>
            <div class = "navigazione"><a href="../html/tutorial.html">Tutorial</a></div>
            <div class ="navigazione"><a href="globalRanking.php">classifica</a></div>
        </nav>
        <div id="container">
            <img alt="immagine profilo" src="uploads/placeholder.png" id="profImg">
            <div id="menu">
                <h1>MENU</h1>
                <ul>
                    <li><a href="accountPageGames.php">Cronologia partite</a></li>
                    <li><a href="">Modifica account</a></li>
                    <li><a href="logOut.php">Logout</a></li>
                </ul>
            </div>
            <form action ="sendChanges.php" method="POST"  enctype="multipart/form-data">
                <fieldset>
                <legend>Modifica account</legend>
                    <label>Password attuale</label>
                    <input type="password" name="oldPass" placeholder="password"
                    <?php
                        if(isset($_GET['errore']))
                            if($_GET['errore'] == 'Password_errata')
                                echo 'class="error"';
                    ?>><br>
                    <label>Nuova password</label>
                    <input type="password" name="newPass" placeholder="password"><br>
                    <label>Immagine Profilo</label>
                    <input type="file" name="file"
                    <?php
                        if(isset($_GET['errore']))
                            if($_GET['errore'] == 'File_non_supportato')
                                echo 'class="error"';
                    ?>><br>
                    <input id="enter" type="submit" value="Salva">
                    <?php
                        if(isset($_GET['errore']))
                        {
                        echo'<img id="message" src="../img/error.png" alt="errore">';
                        }
                        if(isset($_GET['ok']))
                        echo'<img id="message" src="../img/check.png" alt="ok">';
                    ?>
                </fieldset>
            </form>
        </div>
        <footer>Sviluppato da Filippo Sechi come progetto per Progettazione Web<br>
                Ispirato all'app mobile BB-TAN di <a href="http://www.111percent.net/" target="_blank">111%</a></footer>   
    </body>