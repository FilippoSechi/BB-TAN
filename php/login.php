<?php
    include 'logUtil.php';
    if(loggedIn())
    {
        header('location: accountPageGames.php');
        exit;
    }
?>
<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="utf-8">
        <meta name="author" content="Filippo Sechi">
        <meta name="description" content="BB-TAN">
        <link rel="stylesheet" type="text/css" href="../css/page.css">
        <link rel="stylesheet" type="text/css" href="../css/login.css">
        <link rel="stylesheet" type="text/css" href="../css/font.css">
        <title>BB-TAN login page</title>
    </head>
    <body>
        <div id = "wrapper">
            <form method="POST" action="checkAccess.php" name ="login">
                <fieldset>
                <legend>ACCEDI</legend>
                    <label>Username</label>
                    <input type="text" name="Username" required placeholder="Username" autofocus
                    <?php
                    if(isset($_GET['errore']))
                        echo 'class="errorField"';
                    ?>><br>
                    <label>Password</label>
                    <input type="password" name="Password" required placeholder="Password"
                    <?php
                    if(isset($_GET['errore']))
                        echo 'class="errorField"';
                    ?>><br>
                    <input id="enter" type="submit" value ="Entra">
                </fieldset>
            </form>
            <?php
                    if(isset($_GET['errore']))
                        echo '<strong>Username o password non corretti</strong>';
            ?>
            <p>Non possiedi ancora un account? <a href="signUp.php">Registrati qui</a></p>
        </div>
    </body>
</html>