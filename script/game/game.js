function pauseGame()
{
    Game.pause = !Game.pause;
    if(Game.pause)
    {
        if(timer)
        clearInterval(timer);

        game.style.opacity = "0.9";

//creo un nuovo bottone RIPRENDI
        var span = document.createElement("span");
        span.className = "option";

        var button = document.createElement("button");
        button.id = "riprendi";
        button.textContent = "RIPRENDI";
        button.addEventListener("click",pauseGame,false);

        span.appendChild(button);
        game.appendChild(span);

        pause_button.disabled = true;

    }
    else
    {
        pause_button.disabled = false;
        game.style.opacity = "1";
        game.removeChild( document.getElementsByClassName("option")[0]);
        timer = setInterval(moveBall,13);
    }
}

function newGame ()
{
    clearTimeout(timer);
    game = document.getElementById("game");
//ripulisco il gioco
    while(game.firstChild)
        game.removeChild(game.lastChild);

//ripulisco da eventuali partite precedenti
    while(Game.obstacles.length)
        Game.obstacles.pop();

    while(Game.balls.length)
        Game.balls.pop();

//aggiungo punteggio e pausa
    score = document.createElement("div");
    score.id = "score";
    score.textContent = "0";

    pause_button = document.createElement("button");
    pause_button.id = "pause_button";
    pause_button.addEventListener("click",pauseGame,false);

    var decoration = document.getElementById("decorationTop");
    decoration.style.opacity = "0.7";
    decoration.appendChild(score);
    decoration.appendChild(pause_button);

//riposiziono il personaggio
    character = document.createElement("div");
    character.id = "character";

    game.appendChild(character);
    character.style.top = Game.floor-90 + "px";
    character.style.left = Game.rightSide/2 + "px";

    Game.addBall();

    game.addEventListener("mousedown",startThrow,false);
    game.addEventListener("mousemove",mouseMove,false);
    game.addEventListener("mouseleave",stopThrow,false);
    game.addEventListener("mouseup",Throw,false);

    newRound();
    newRound();
}

function GameOver ()
{
    Game.pause = true;
    clearInterval(timer);

    //salvo la partita se ho effettutato l'accesso con un account
    if(sessionStorage.getItem('username'))
        saveGame(sessionStorage.getItem('username'),score.textContent);

    game.style.opacity = "0.9";
    //creo il pulsante riprova e la scritta game over
    var span = document.createElement("span");
        span.className = "option";

    var button = document.createElement("button");
    button.id = "riprendi";
    button.textContent = "RIPROVA";
    button.addEventListener("click", Restart,false);
    span.appendChild(button);
    
    var div = document.createElement("div");
    div.className = "logo";
    div.textContent = "GAME OVER";
    div.style.top = 96 + "px";
    div.style.left = 135 + "px";
    game.appendChild(span);
    game.appendChild(div);
    
    pause_button.disabled = true;
}

//rimuove i div creati dalla GameOver 
function Restart ()
{
    game.removeChild(document.getElementsByClassName("logo")[0]);
    game.removeChild(document.getElementsByClassName("option")[0]);
    game.style.opacity = "1";
    Game.pause = !Game.pause;
    var decoration = document.getElementById("decorationTop");
    decoration.removeChild(document.getElementById("score"));
    decoration.removeChild(document.getElementById("pause_button"));
    pause_button.disabled = false;
    newGame();
}
