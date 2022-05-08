function chooseDifficulty (n)
{
    var difficulty = document.getElementsByClassName("option");
    for(var x in difficulty)
    {
        if (x != n)
            difficulty[x].className = "option";
        else
            difficulty[x].className = "selected option";
    }
    sel_diff = n;
}

function start()
{
    getUser(); //salvo il nome dell'utente in sessionStorage
    loadAnimation();
    return;
}

//animazione della pagina iniziale
function loadAnimation () 
{
    var ball = document.getElementsByClassName("ball")[0];
    character = document.getElementById("character");

    var x = 189 + 40*Math.cos(animation_cr);
    character.style.left = x + 'px';

    x = 370 + 20*Math.sin(animation_bl);
    ball.style.top = x + 'px';

    animation_cr += 0.3;
    animation_bl += 0.8;
    timer = setTimeout(loadAnimation,100);
}
