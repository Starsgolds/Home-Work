var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var bird = new Image();
var bg = new Image(); //задний фон
var fg = new Image(); //передний фон
var pipeUp = new Image(); 
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

var gap = 85;
var constant=pipeUp.height+gap;
var bX=10;
var bY=150;
var gravity=1,5;

//нажатие на кнопку
document.addEventListener("keydown", moveUp);

function moveUp() {
 bY -= 25;
}

// создание блоков
var pipe = [];

pipe[0] = {
 x : cvs.width;
 y : 0
}


function draw() {
 ctx.drawImage(bg, 0, 0);

 for(var i = 0; i < pipe.length; i++) {
 ctx.drawImage(pipeUp,pipe[i].x,pipe[i].y);
 ctx.drawImage(pipeBottom,pipe[i].x,pipe[i].y+constant);
pipe[i].x--;
if (pipe[i].x==125) {
pipe.push({
x:cvs.width,
y:Math.floor(Math.random()*pipeUp.height)-pipeUp.height
});
}
if(bX+bird.width>=pipe[i].x&&bX<=pipe[i].x+pipeUp.width&&(bY<=pipe[i].y+pipeUp.height||bY+bird.height>=pipe[i].y+constant)||bY+bird.height>=cvs.height-fg.height) {
location.reload();
}
if (pipe[i].x==5) {
score++;
}
ctx.drawImage(fg,0,cvs.height-fg.height);
ctx.drawImage(bird,bX,bY);
bY+=gravity;
ctx.fillStyle = "#000";
ctx.font = "24px Verdana";
ctx.fillText("Игровой счет: " + score, 10, cvs.height-20);
requestAnimationFrame(draw);
}
draw();
