var Ax = 10, Ay = 0, Ascore = 0;
var Bx = 580, By = 300, Bdirx = 10, Bdiry = 10, Bscore = 0;;
var Ballx = 300, Bally = 200, Balldirx = -5, Balldiry = 5;
var Lr = 100;
isgameon = true

function setup() {
  createCanvas(600, 600);
}

function draw() {
  UpdateScore()
  background("white");
  fill('black');
  Ay = mouseY;
  rect(Ax, mouseY, 10, Lr);
  By = Bally - 50
  fill('black');
  rect(Bx, By, 10, Lr);

  BallMove()
}

function BallMove(){
  ellipse(Ballx,Bally,20,20);
  Bally += Balldiry
  Ballx += Balldirx
  Ay = mouseY;
  if(Ballx == Ax+10 && (Bally < Ay + 100 && Bally > Ay)) {
    Balldirx = -Balldirx
  }
  if(Ballx == Bx && (Bally < By + 100 && Bally > By - 100)) {
    Balldirx = -Balldirx
  }

  if(Ballx <= 0) {
    Lose("B")
  }
  if(Ballx >= 600) {
    Lose("A")
  }
  if(Bally <= 0 || Bally >= 600) {
    Balldiry = -Balldiry
  }
}

function Lose(winner) {
  Bdirx = 0;
  Bdiry = 0;
  Balldirx = 0;
  Balldiry = 0

  if(winner == "A" && isgameon) {
    Ascore += 1
  } else if(winner == "B" && isgameon) {
    Bscore += 1
  }
  isgameon = false
  var btn = document.getElementById('btn');
  btn.style = "display : block"
}

function again() {
  isgameon = true
  Bx = 580, By = 300, Bdirx = 20, Bdiry = 20;
  Ballx = 300, Bally = 200, Balldirx = -5, Balldiry = 5;
  var btn = document.getElementById('btn');
  btn.style = "display : none"
}

function UpdateScore() {
  var scoreA = document.getElementById('Ascore');
  scoreA.innerHTML = Ascore
  var scoreB = document.getElementById('Bscore');
  scoreB.innerHTML = Bscore
}

// mouseY
// redessiner tout à chaque fois
// ellipse(xpos,ypos,20,20);
// longeure raquette = 