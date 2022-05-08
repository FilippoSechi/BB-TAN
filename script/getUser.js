//salva il nome dell'utente nella variabile sessionStorage
function getUser()
{
    var http = new XMLHttpRequest();
    var url = 'php/getUser.php';
    http.open('GET',url,true);
    http.onreadystatechange = function()
    {
        if(http.readyState == 4 && http.status == 200)
        {
            if(http.responseText != '')
                sessionStorage.setItem('username',http.responseText);
            else
                sessionStorage.removeItem('username');
        }
    }
    http.send();
}