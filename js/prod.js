(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.keyDown=keyDown;exports.keyUp=keyUp;function keyDown(playerKeyPress,keys){var keyPressed=playerKeyPress.which;if(keyPressed==38)keys.upPressed=1;if(keyPressed==40)keys.downPressed=1;if(keyPressed==37)keys.leftPressed=1;if(keyPressed==39)keys.rightPressed=1}function keyUp(playerKeyPress,keys){var keyPressed=playerKeyPress.which;if(keyPressed==38)keys.upPressed=0;if(keyPressed==40)keys.downPressed=0;if(keyPressed==37)keys.leftPressed=0;if(keyPressed==39)keys.rightPressed=0}},{}],2:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=createAsteroids;function createAsteroids(){for(var i=0;i<100;i++){var asteroid=new Image;asteroid.id="asteroid"+i.toString();asteroid.src="img/asteroid.png";asteroid.style.height=(Math.random()*6+0)*30;asteroid.style.position="absolute";asteroid.style.top=(Math.random()*6+0)*100;asteroid.style.right=-200;var asteroidPosition=asteroid.style.right;var asteroidID=asteroid.id;document.body.appendChild(asteroid);console.log("created")}}},{}],3:[function(require,module,exports){"use strict";var _createAsteroids=require("./createAsteroids.js");var _createAsteroids2=_interopRequireDefault(_createAsteroids);var _controls=require("./controls.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}(0,_createAsteroids2.default)();var xPosition=100;var yPosition=100;var xSpeed=1;var ySpeed=0;var maxSpeed=5;var keys={upPressed:0,downPressed:0,leftPressed:0,rightPressed:0};document.addEventListener("keydown",function(e){return(0,_controls.keyDown)(e,keys)});document.addEventListener("keyup",function(e){return(0,_controls.keyUp)(e,keys)});function slowDownX(){if(xSpeed>0)xSpeed=xSpeed-1;if(xSpeed<0)xSpeed=xSpeed+1}function slowDownY(){if(ySpeed>0)ySpeed=ySpeed-1;if(ySpeed<0)ySpeed=ySpeed+1}var shipHealth=1e3;var loopCounter=0;var asteroidCounter=0;function gameLoop(){xPosition=xPosition+xSpeed;yPosition=yPosition+ySpeed;document.getElementById("ship").style.left=xPosition;document.getElementById("ship").style.top=yPosition;if(keys.upPressed==1)ySpeed=Math.max(ySpeed-1,-1*maxSpeed);if(keys.downPressed==1)ySpeed=Math.min(ySpeed+1,1*maxSpeed);if(keys.rightPressed==1)xSpeed=Math.min(xSpeed+1,1*maxSpeed);if(keys.leftPressed==1)xSpeed=Math.max(xSpeed-1,-1*maxSpeed);if(keys.upPressed==0&&keys.downPressed==0)slowDownY();if(keys.leftPressed==0&&keys.rightPressed==0)slowDownX();var shipBox=document.getElementById("ship").getBoundingClientRect();loopCounter++;if(loopCounter>=32&&asteroidCounter<=99){document.getElementById("asteroid"+asteroidCounter.toString()).className="moving";asteroidCounter++;loopCounter=0}var arrayOfMovingAsteroids=document.getElementsByClassName("moving");for(var i=0;i<arrayOfMovingAsteroids.length;i++){if(parseInt(arrayOfMovingAsteroids[i].style.right)<3e3){arrayOfMovingAsteroids[i].style.right=parseInt(arrayOfMovingAsteroids[i].style.right)+5+"px"}else{arrayOfMovingAsteroids[i].className=""}var asteroidBox=arrayOfMovingAsteroids[i].getBoundingClientRect();var collision=!(asteroidBox.right<shipBox.left||asteroidBox.left>shipBox.right||asteroidBox.bottom<shipBox.top+30||asteroidBox.top>shipBox.bottom-30);if(collision){shipHealth=shipHealth-parseInt(arrayOfMovingAsteroids[i].style.height);if(shipHealth>=0){document.getElementById("healthCounter").innerHTML="SHIELDS: "+shipHealth}else{document.getElementById("healthCounter").innerHTML="GAME OVER";document.getElementById("ship").remove()}var audio=new Audio("explosion.wav");audio.play();arrayOfMovingAsteroids[i].remove()}}setTimeout(gameLoop,10)}gameLoop()},{"./controls.js":1,"./createAsteroids.js":2}]},{},[3]);