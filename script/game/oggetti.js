function Point(x, y)
{
    this.x = x;
    this.y = y;
}

function Circle (x, y, r)
{
    this.center = new Point(x,y);
    this.radius = r;
}

function Ball(x, y, r, vel_x, vel_y)
{
    this.circle = new Circle (x,y,r);
    this.vel_x = vel_x;
    this.vel_y = vel_y;
}

function Box(x, y)
{
    this.x = x;
    this.y = y;
    this.w = 62;
    this.updatePosition = function ()
                            {
                                this.y += 64;
                            }
    this.checkCollision = function (circle)
    {
        var distX = Math.abs(circle.center.x - this.x-this.w/2);
        var distY = Math.abs(circle.center.y - this.y-this.w/2);

        if (distX > (this.w/2 + circle.radius) || distY > (this.w/2 + circle.radius) )
            return "";

        if (distX <= (this.w/2) || distY <= (this.w/2) ) 
            return "side";

        //controllo gli angoli
        var dx = distX - this.w/2;
        var dy = distY - this.w/2;
        if (dx * dx + dy * dy <= (circle.radius * circle.radius))
            return "angle";
        return "";
    }
    this.updateContent = function (i)
    {
        var ob = document.getElementsByClassName("obstacle")[i];
        ob.textContent--;
        updateColor(ob);

        if(ob.textContent == "0")
        {
            game.removeChild(ob);
            Game.obstacles.splice(i,1);
            i--;    //per non saltare un indice a causa della splice
        }
        return i;
    }             
}

function Special(x, y, type)
{
    this.circle = new Circle(x, y ,15);
    this.type = type;
    this.updatePosition = function ()
                            {
                                this.circle.center.y += 64;
                            }
    this.checkCollision = function (circle)
    {
        var a;
        var x;
        var y;
      
        a = circle.radius + this.circle.radius;
        x = circle.center.x - this.circle.center.x;
        y = circle.center.y - this.circle.center.y;
      
        if (a > Math.sqrt((x * x) + (y * y)))
            return true;
        else
            return false;
    }
    this.updateContent = function (i)
    {
        Game.obstacles.splice(i,1);
        game.removeChild(document.getElementsByClassName("obstacle")[i]);
        return --i; //per non saltare un indice a causa della splice
    }
}

var Game = {
    floor: 640,
    rightSide: 448,
    balls: [],
    obstacles: [],
    throwing: false, //fase di tiro, usato per creare la freccia...
    pause: false,   //pause e game over
    playing: false, //fase in cui le palline si muovono, non devo iniziare un nuovo tiro
    addBall: function()
        {
            var ball = new Ball(parseInt(character.style.left), Game.floor - radius, radius , 0,0);
            Game.balls.push(ball);

            var div = document.createElement("div");
            div.className = "ball";
            game.appendChild(div);

            div.style.left = ball.circle.center.x - radius + "px";
            div.style.top = ball.circle.center.y - radius + "px";
            score.textContent++;
        },
    addObstacle: function(top, left, type)
        {
            if (type == "box")
            {
                var rect = new Box(left, top);
                Game.obstacles.push(rect);
            }
            else
            {
                top += 64/2;
                left += 64/2;
                var spec = new Special(left, top, type);
                Game.obstacles.push(spec);
            }
        },
}