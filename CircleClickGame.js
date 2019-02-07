var circleArray = [];
var spawnRate;
var counter;
var score;
var gameState;
var titleFont;


function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  //textFont(titleFont);
  spawnRate = 100.0;
  counter = 0.0;
  score = 0;
  gameState = 'START';

}

function draw() {
  background(218, 234, 239);
  //Game Start
  if(gameState == 'START'){
    //textFont(titleFont);
    textSize(20);
    textAlign(CENTER,CENTER);
    text('Click the Circles before they trun red.',windowWidth/2,windowHeight/2-40);
    fill(229, 36, 65);
    rect(windowWidth/2-70, windowHeight/2, 140, 80, 20);
    fill(0);
    text('Press to Start', windowWidth/2, windowHeight/2+40);

  }
  //GAME InProgress
  if(gameState == "INPROGRESS"){
    if(counter >= spawnRate){
      circleArray.push(new Circle(50,random(50,windowWidth-50),random(50,windowHeight-50)));
      counter = 0;
    }
    else {
      counter++;
    }
    for(var c=0; c<circleArray.length; c++){
      circleArray[c].colorshift();
      circleArray[c].show();
      if(circleArray[c].isRed()){
        gameState = "GAMEOVER";
      }
    }


    textSize(40);
    textAlign(RIGHT);
    fill(0,0,0);
    text("Score:"+score,windowWidth-40, 40);




  }

  //Game Finished
  if(gameState == 'GAMEOVER'){
    textSize(40);
    textAlign(CENTER,CENTER);
    text('GAME OVER',windowWidth/2,windowHeight/2-80);
    textSize(30);
    text("Score: "+score, windowWidth/2, windowHeight/2 - 45);
    fill(229, 36, 65);
    rect(windowWidth/2-70, windowHeight/2, 140, 80, 20);
    fill(0);
    text('Replay', windowWidth/2, windowHeight/2+40);

    for(var c=0; c<=circleArray.length; c++){
      circleArray.pop();
    }
  }
  //logs
  console.log("GAME STATE: "+gameState);
  console.log("CIRCLE ARRAY SIZE: "+circleArray.length);

}

function mousePressed(){
  if(gameState == "START" || gameState == "GAMEOVER"){
    if(mouseX > (windowWidth/2 - 70) && mouseX < (windowWidth/2 + 70)){
      if(mouseY > (windowHeight/2) && mouseY < (windowHeight/2 + 80)){
        score = 0;
        gameState = "INPROGRESS";
      }
    }
  }
  if(gameState == "INPROGRESS"){
    var found = false;
    for(var c=circleArray.length-1; c>=0; c--){
      var distance = dist(mouseX,mouseY,circleArray[c].getPosX(),circleArray[c].getPosY());
      if(distance < circleArray[c].getRadius()){
        erase(c);
        score++;
        difficultyChange();
        found = true;
      }
      if(found == true){
        return;
      }
    }
  }
}


function erase(c){
  circleArray.splice(c,1);
}
function difficultyChange(){
  if(score < 10){
    spawnRate = map(score,0,9,100,60);
  }
  else if(score < 20){
    spawnRate = map(score,10,19,60,50);
  }
  else if(score < 50){
    spawnRate = map(score, 20, 49, 50, 30);
  }
  else if(score < 70){
    spawnRate = map(score, 50, 69, 30, 20);
  }
}
