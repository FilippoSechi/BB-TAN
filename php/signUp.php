<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="utf-8">
        <meta name="author" content="Filippo Sechi">
        <meta name="description" content="BB_TAN">
        <link rel="stylesheet" type="text/css" href="../css/font.css">
        <link rel="stylesheet" type ="text/css" href="../css/login.css">
        <script src="../script/checkForm.js"></script>
        <title>BB-TAN Registration page</title>
    </head>
    <body>
        <div id="wrapper">
            <form action ="checkRegistration.php" method="POST" name="RegForm" enctype="multipart/form-data">
                <fieldset>
                <legend>REGISTRATI</legend>
                <label>Username</label>
                <input id="username" type="text" name="Username" placeholder="Username" required autofocus onchange="checkUsername()">
                <br>
                <label>Password</label>
                <input id="password" type="password" name="Password" placeholder="Password" required onkeyup="checkPassword()">
                <br>
                <label>Conferma<br>
                    password</label>
                <input id="confirm" type="password" name="Confirm" required onkeyup="checkPassword()">
                <br>
                <label>Immagine profilo</label>
                <input type="file" name="file">
                <br>
                <input id="enter" type="submit" value="REGISTRATI">
                <?php
                    if(isset($_GET['errore']))
                    {
                        $errore = explode('_', $_GET['errore']);
                        echo '<strong>';
                        foreach($errore as $value)
                            echo $value.' ';
                        echo '</strong>';
                    }
                    ?>
            </fieldset>
            </form>
        </div>
    </body>
</html>