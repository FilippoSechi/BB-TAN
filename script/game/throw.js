function startThrow (e)
{
    evt = (!e)? window.event : e; //compatibilità

    if(evt.button == 0 && !Game.pause && !Game.playing)
    {
        //creo la freccia
        Game.throwing = true;
        var arrow = document.createElement("div");
        arrow.id = "arrow";
        character.appendChild(arrow);
        arrow.style.top = "70px";
    //salvo le coordinate del mouse
        x_start = evt.clientX;
        y_start = evt.clientY;
    }
}

function mouseMove (e)
{
    if (!Game.throwing)
        return;
    
    evt = (!e)? window.event : e;

    angle = calculateAngle(x_start - evt.clientX, y_start - evt.clientY);
   
    with (Math)
    {
        var length = sqrt(pow(abs(evt.clientX - x_start), 2) + pow(abs(evt.clientY - y_start), 2));
    }

    arrow = document.getElementById("arrow");
    arrow.style.transform = "rotate(" + (270 + angle) + "deg)";
    length *= 1.4;
    //evito di superare il div di gioco quando miro verso il basso
    if(length > 50 && angle > 0)
    length = 50;

    arrow.style.height =  length + "px";
}

function stopThrow ()
{
    if(Game.throwing)
    {
        Game.throwing = false;
        removeArrow();
    }
    
}

function Throw ()
{
    if(!Game.throwing)
        return;
        
    Game.throwing = false;
    removeArrow();

    if(angle < 0) //evita di tirare verso il suolo
    {   
        for(var x in Game.balls)    
        {
            Game.balls[x].vel_x = 6*Math.cos(angle*Math.PI/180);
            Game.balls[x].vel_y = 6*Math.sin(angle*Math.PI/180);
        }
        var left = parseInt(character.style.left);
        var top = parseInt(character.style.top);
        character.setAttribute("style","top:"+top+"px; left:"+left+"px; background-image:url('img/personaggio_tiro.png');");
        Game.playing = true;
        timer = setInterval(moveBall,13);
    }
}

function removeArrow ()
{
    var arrow = document.getElementById("arrow");
    character.removeChild(arrow);
}

function calculateAngle(x, y)
{
        return Math.atan2(y, x)*180/Math.PI;
}