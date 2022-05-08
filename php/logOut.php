<?php
include 'logUtil.php';
if(!loggedIn())
{
    header('location: ../index.php');
    exit;
}
unset($_SESSION['Username']);
header('Refresh: 5; url= ../index.php');
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
        <link rel="stylesheet" type="text/css" href="../css/logout.css">
        <title>BB-TAN logout</title>
    </head>
    <body>
        <div id = "wrapper">Ti sei disconnesso dall'account, se non vieni reindirizzato entro 5 secondi 
            <a href="../index.php">clicca qui</a></div>
    </body>
</html>