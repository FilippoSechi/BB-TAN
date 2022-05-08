function CollisionTop(ball)
{
    return ball.center.y <= radius
}

function CollisionSide (ball)
{
    return ball.center.x <= radius || ball.center.x >= Game.rightSide - radius
}