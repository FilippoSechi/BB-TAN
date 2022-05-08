//salva la partita conclusa
function saveGame (username,points)
{
    var http = new XMLHttpRequest();
    var url = 'php/saveGame.php';

    var param = 'Username='+username+'&Punteggio='+points+'&Difficolta='+sel_diff;
    http.open('POST',url,true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function()
    {
        if(http.readyState == 4 && http.status == 200)
        {
            //creo il messaggio per l'esito del salvataggio della partita
            var msg = document.createElement("div");
            msg.textContent = http.responseText;
            msg.id= 'msg';
            document.getElementById('container').appendChild(msg);
            var destroy = setTimeout(destroyMsg,5000);
        }
    }
    http.send(param);
}

//elimina il messaggio di salvataggio
function destroyMsg()
{
    document.getElementById('container').removeChild(document.getElementById('msg'));
}