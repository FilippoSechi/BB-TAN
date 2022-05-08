var regExp = /[ ]/g;

//controllo che il nome utente non contenga spazi
function checkUsername ()
{
    var username = document.getElementById("username");
    if(regExp.test(username.value))
    {
        username.setCustomValidity("Non può contenere spazi");
        username.class = "errorField";
    }
    else
    username.setCustomValidity("");
    username.class = "";

}

//controllo che le password corrispondano
function checkPassword()
{
    var password = document.getElementById("password");
    var conf_pass = document.getElementById("confirm");
    if(password.value != conf_pass.value)
    {
        conf_pass.setCustomValidity("La password non corrisponde");
        conf_pass = "errorField";
    }

    else
    {
        conf_pass.setCustomValidity("");
        conf_pass = "";
    }
}