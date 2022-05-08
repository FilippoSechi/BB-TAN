function newRound ()
{
    var obst = document.getElementsByClassName("obstacle");
    //sposto tutti gli ostacoli già presenti
        for(var x = 0; x < Game.obstacles.length; ++x)
        {
            obst[x].style.top = parseInt(obst[x].style.top) + 64 + "px";
            Game.obstacles[x].updatePosition();

          if (parseInt(obst[x].style.top) >= Game.floor - 64) //l' ostacolo ha toccato terra
           {   
           //non posso perdere per un ostacolo speciale
             if(Game.obstacles[x].constructor.name == "Special")
            {
                x = Game.obstacles[x].updateContent(x);
            }
               else
                {   
                 GameOver();
                 return;
                }
            }
        }
//la probabilità di creare ostacoli varia in base alla difficoltà
    for(var i = 0; i < 7; i++)
        if( Math.floor(Math.random() * 101) <= (obst_prob + 30*sel_diff) )
            createObstacle(i);
}

function createObstacle (i)
{
    var div = document.createElement("div");
    var type = chooseType(types, types.length);
        if(type == "special")
            type = chooseType(special, special.length);

    div.className = "obstacle " + type;
    div.style.left = 64 * i + "px";
    div.style.top = 0 + "px";
    game.appendChild(div);

//se è un tipo speciale non devo aggiungere altro
    if (type == "box")
    {
        //calcolo il valore dell'ostacolo in base alla difficoltà
        var max = Math.round(Game.balls.length * (1.5 + (sel_diff+1)/10));
        var min = Math.round(Game.balls.length * ( 0.75 + (sel_diff+1)/10));

        div.textContent = Math.floor(Math.random() * (max - min + 1) ) + min;
   
        updateColor(div);
    }

    Game.addObstacle(parseInt(div.style.top) ,parseInt(div.style.left), type);
}

function chooseType (array, x)
{
    return array[Math.floor(Math.random()*x)];
}

//aggiorna il colore dell'ostacolo
function updateColor(obj)
{
//aggiorno in base al testo
    if( obj.textContent < 10 )
        obj.style.borderColor = obj.style.color = "yellow";
    else if ( obj.textContent < 30 )
        obj.style.borderColor = obj.style.color = "orange";
    else if( obj.textContent < 50 )
        obj.style.borderColor = obj.style.color = "red";
    else if( obj.textContent < 100)
        obj.style.borderColor = obj.style.color = "purple";
    else
        obj.style.borderColor = obj.style.color = "li";
}
