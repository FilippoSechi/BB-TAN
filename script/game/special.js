function LeftRight (ob)
{
    for (var x = 0; x < Game.obstacles.length; x++)
    {   //cerco gli ostacoli colpiti dall' effetto speciale
        if(Game.obstacles[x].constructor.name == "Box" && Game.obstacles[x].y == ob.circle.center.y - 32)
           x = Game.obstacles[x].updateContent(x);
    }
    //aggiungo il div che farà l'animazione
    var div = document.createElement("div");
    game.appendChild(div);
    div.id = "left_right_anim";
    div.style.top = ob.circle.center.y - 32 + "px";
    anim_LR = setTimeout(deleteLR, 200);
}

function deleteLR ()
{
    var div = document.getElementById("left_right_anim");
    game.removeChild(div);
}

function UpDown (ob)
{
    for (var x = 0; x < Game.obstacles.length; x++)
    {
        if(Game.obstacles[x].constructor.name == "Box" && Game.obstacles[x].x == ob.circle.center.x - 32)
            x = Game.obstacles[x].updateContent(x);
    }
    var div = document.createElement("div");
    game.appendChild(div);
    div.id = "up_down_anim";
    div.style.left = ob.circle.center.x - 32 + "px";
    anim_UD = setTimeout(deleteUP, 200);
}

function deleteUP ()
{
    var div = document.getElementById("up_down_anim");
    game.removeChild(div);
}

//crea tre palline sfalzate di 45°
function Split (ob)
{
    for (var x = 0; x < 3; x++)
    {
        var div = document.createElement("div");
        game.appendChild(div);
        div.className = "ball";
        div.style.top = ob.circle.center.y - ob.circle.radius + "px";
        div.style.left = ob.circle.center.x - ob.circle.radius + "px";
        var vel_x = 6*Math.cos(-45*(x+1)*Math.PI/180);
        var vel_y = 6*Math.sin(-45*(x+1)*Math.PI/180);
        div = new Ball(ob.circle.center.x, ob.circle.center.y, 7, vel_x, vel_y);
        Game.balls.push(div);
        score.textContent++;
    }
}
