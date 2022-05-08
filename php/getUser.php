<?php
echo getUser();

function getUser()
{
    session_start();
    if(isset($_SESSION['Username']))
        return $_SESSION['Username'];
    else
        return '';
}
?>