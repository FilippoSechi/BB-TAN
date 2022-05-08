function moveBall ()
{
    arrived = 0;
    var balls = document.getElementsByClassName("ball");
    if(throw_now)
        cicles = (cicles >= balls.length) ? balls.length : cicles + 1;
    //aggiorno la posizione delle palline
    for(var x = 0; x < cicles; ++x)
    {
        balls[x].style.top = parseFloat(balls[x].style.top) + Game.balls[x].vel_y + "px";

        //controllo se tocca il soffitto del gioco o il fondo
        if(parseFloat(balls[x].style.top) > Game.floor - radius*2)
            balls[x].style.top = Game.floor - radius*2 + "px";
        if(parseFloat(balls[x].style.top) < 0)
            balls[x].style.top = "0px";

        Game.balls[x].circle.center.y = parseFloat(balls[x].style.top) + radius;

        balls[x].style.left = parseFloat(balls[x].style.left) + Game.balls[x].vel_x + "px";
        
        //controllo se tocca i lati del gioco
        if(parseFloat(balls[x].style.left) > Game.rightSide - radius*2)
            balls[x].style.left = Game.rightSide - radius*2 + "px";
        if(parseFloat(balls[x].style.left) < 0)
            balls[x].style.left = "0px";
        Game.balls[x].circle.center.x = parseFloat(balls[x].style.left) + radius;

        //controllo se tocca terra
        if(Game.balls[x].circle.center.y >= Game.floor - radius)
        {
            Game.balls[x].vel_x = Game.balls[x].vel_y = 0;
            //il personaggio insegue le palline atterrate
            character.style.left = parseInt(balls[x].style.left) + radius + "px";

            if (parseInt(character.style.left) > Game.rightSide - 64) //controllo se il personaggio sfora il gioco di lato
                character.style.left = Game.rightSide - 64 + "px";

            translateBall(balls, parseInt(character.style.left) - radius);
            arrived++;
            continue;
        }

        if (CollisionTop(Game.balls[x].circle))
        {
            Game.balls[x].vel_y *= -1;
            continue;
        }
        
        else if (CollisionSide(Game.balls[x].circle))
        {
            Game.balls[x].vel_x *= -1;
            continue;
        }
        else 
        {
            for(var i = 0; i < Game.obstacles.length; i++)
            {
                var res = Game.obstacles[i].checkCollision(Game.balls[x].circle);
                if (res)
                { 
                    if(Game.obstacles[i].constructor.name == "Box")
                    {   
                        if ( res == "side")
                        {//controllo quale lato ha colliso 
                            if (Game.balls[x].circle.center.x - radius/2 < Game.obstacles[i].x || 
                                Game.balls[x].circle.center.x + radius/2 > (Game.obstacles[i].x + Game.obstacles[i].w))
                                    Game.balls[x].vel_x *= -1;

                            else if (Game.balls[x].circle.center.y - radius/2 < Game.obstacles[i].y || 
                                    Game.balls[x].circle.center.y + radius/2 > (Game.obstacles[i].y + Game.obstacles[i].w))
                                        Game.balls[x].vel_y *= -1;
                        }
                        else //caso in cui abbia colliso con il lato
                        {
                            Game.balls[x].vel_y *= -1;
                            Game.balls[x].vel_x *= -1;
                        }
                    }

                    else //caso in cui l'ostacolo fosse speciale
                    {
                        switch (Game.obstacles[i].type)
                        {
                            case "new_ball":
                                Game.addBall();
                                break;
                            case "left_right":
                                LeftRight(Game.obstacles[i]);
                                break;
                            case "up_down":
                                UpDown(Game.obstacles[i]);
                                break;
                            default :
                                Split(Game.obstacles[i]);
                                break;
                        }
                    }
                    i = Game.obstacles[i].updateContent(i);
                }
            }
        }
    }

    throw_now = !throw_now;
    if(arrived == Game.balls.length) //tutte le palline sono tornate indietro
    {
        var left = parseInt(character.style.left);
        var top = parseInt(character.style.top);
        character.setAttribute("style","top:"+top+"px; left:"+left+"px; background-image:url('img/personaggio.png');");
        cicles = 0;
        throw_now = true;
        clearInterval(timer);
        Game.playing = false;
        newRound();
    }
}

//sposta tutte le palline atterrate nella posizione del personaggio
function translateBall (balls, left)
{
    for(var x = 0; x <balls.length; x++)
    {
        if(parseInt(balls[x].style.top) >= Game.floor - radius*2)
            balls[x].style.left = left + "px";
    }
}