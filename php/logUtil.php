<?php
function loggedIn()
{   session_start();
    if (isSet($_SESSION["Username"]))
        return true;
    else    
        return false;
}
?>