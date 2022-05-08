/*carica la classifica 
    i parametri sono:   who (booleano---->true se chiedo la classifica personale, false se chiedo la classifica generale)
                        diff (int---->indica la difficoltà della classifica, 3 se voglio la difficoltà selezionata precedentemente)
                        order (string---->indica l'ordine di classifica (per data o per punteggio))*/
var requestedDiff = 0;
function requestGames(who = true,diff = 0,order = 'data')
{
    deleteRequest();
    requestedDiff = (diff == 3)?requestedDiff: diff;
    var username;
    if(who) //classifica personale
        username = sessionStorage.getItem("username");
    else    //classifica globale
        username = '';

    http = new XMLHttpRequest();
    var url = "../php/requestGames.php";
    var param = 'Username='+username+'&Ordine='+order+'&Difficolta='+requestedDiff;
    http.open('POST',url,true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function()
    {
        if(http.readyState == 4 && http.status == 200)
        {
            var table = document.createElement("table");
            table.insertAdjacentHTML('afterbegin',http.responseText); //inserisco i dati ricevuti nella nuova tabella
            document.getElementById("request").appendChild(table);
        }
    }
    http.send(param);
    
}

//rimuove le precedenti richieste
function deleteRequest()
{
    var div = document.getElementById("request");
    while(div.firstChild)
        div.removeChild(div.lastChild);
}       

//restituisce il path dell'immagine profilo
function getImage()
{
    var username = sessionStorage.getItem('username');
    var img = document.getElementById('profImg');
    var http = new XMLHttpRequest();
    var url = 'getImage.php';
    http.open('GET',url);
    http.onreadystatechange = function()
    {
        if(http.readyState == 4 && http.status == 200)
        {
            img.setAttribute('src',http.responseText);
        }
    }
    http.send();
}
