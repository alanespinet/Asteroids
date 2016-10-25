  export function keyDown(playerKeyPress, keys)
  {
    var keyPressed = playerKeyPress.which;
    if (keyPressed == 38)
      keys.upPressed = 1;
    if (keyPressed == 40)
      keys.downPressed = 1;
    if (keyPressed == 37)
      keys.leftPressed = 1;
    if (keyPressed == 39)
      keys.rightPressed = 1;
  }

  export function keyUp(playerKeyPress, keys)
  {
    var keyPressed = playerKeyPress.which;
    if (keyPressed == 38)
      keys.upPressed = 0;
    if (keyPressed == 40)
      keys.downPressed = 0;
    if (keyPressed == 37)
      keys.leftPressed = 0;
    if (keyPressed == 39)
      keys.rightPressed = 0;
  }
