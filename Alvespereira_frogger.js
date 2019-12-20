var currentScene = 0;
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

var startButton = new Button({
    x: 125,
    y: 300,
    label: "Start Game",
    onClick: function() {
        currentScene = 1;
    }
});

var pauseButton = new Button({
    x: 315,
    y: 340,
    width: 75,
    height: 50,
    label: "Pause",
    onClick: function() {
        if (currentScene === 1) {
            currentScene = 2;
        }
        else {
            currentScene = 1;    
        }
    }
});

Button.prototype.draw = function() {
    strokeWeight(1);
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};



var score = 0;
var sCondition=0;
var player = function(x, y) {
    this.x = x;
    this.y = y;
    this.rockets = 0;
};
//drawinghead
    var Dhead = function(dBitmoji){
//headphones
fill(43, 44, 46);
ellipse (dBitmoji.x+(161*dBitmoji.h/100),dBitmoji.y+171*dBitmoji.h/100,27*dBitmoji.h/100,49*dBitmoji.h/100);
ellipse (dBitmoji.x+265*dBitmoji.h/100,dBitmoji.y+170*dBitmoji.h/100,27*dBitmoji.h/100,49*dBitmoji.h/100);
//head
fill(237, 233, 218);
ellipse (dBitmoji.x+213*dBitmoji.h/100,dBitmoji.y+180*dBitmoji.h/100,99*dBitmoji.h/100,125*dBitmoji.h/100);
//nose
triangle(dBitmoji.x+215*dBitmoji.h/100, dBitmoji.y+191*dBitmoji.h/100, dBitmoji.x+223*dBitmoji.h/100, dBitmoji.y+216*dBitmoji.h/100, dBitmoji.x+206*dBitmoji.h/100, dBitmoji.y+216*dBitmoji.h/100);
//eyes
fill(255, 255, 255);

ellipse (dBitmoji.x+235*dBitmoji.h/100,dBitmoji.y+184*dBitmoji.h/100,30*dBitmoji.h/100,30*dBitmoji.h/100);

ellipse (dBitmoji.x+194*dBitmoji.h/100,dBitmoji.y+184*dBitmoji.h/100,30*dBitmoji.h/100,30*dBitmoji.h/100);
//iris
fill(92, 57, 57);

ellipse (dBitmoji.x+236*dBitmoji.h/100,dBitmoji.y+184*dBitmoji.h/100,20*dBitmoji.h/100,21*dBitmoji.h/100);

ellipse (dBitmoji.x+194*dBitmoji.h/100,dBitmoji.y+184*dBitmoji.h/100,20*dBitmoji.h/100,21*dBitmoji.h/100);

//pupils
fill(0, 0, 0);
ellipse (dBitmoji.x+194*dBitmoji.h/100,dBitmoji.y+184*dBitmoji.h/100,9*dBitmoji.h/100,9*dBitmoji.h/100);
ellipse (dBitmoji.x+236*dBitmoji.h/100,dBitmoji.y+184*dBitmoji.h/100,9*dBitmoji.h/100,9*dBitmoji.h/100);
//hair
arc(dBitmoji.x+214*dBitmoji.h/100, dBitmoji.y+155*dBitmoji.h/100, 124*dBitmoji.h/100, 99*dBitmoji.h/100, 180, 360);
//eyebrows
rect(dBitmoji.x+179*dBitmoji.h/100,dBitmoji.y+159*dBitmoji.h/100, 27*dBitmoji.h/100, 9*dBitmoji.h/100, 16*dBitmoji.h/100);
rect(dBitmoji.x+223*dBitmoji.h/100,dBitmoji.y+159*dBitmoji.h/100, 27*dBitmoji.h/100, 9*dBitmoji.h/100, 16*dBitmoji.h/100);
//mouth
ellipse(dBitmoji.x+214*dBitmoji.h/100, dBitmoji.y+225*dBitmoji.h/100, 30*dBitmoji.h/100, 3*dBitmoji.h/100);};
//drawingbody
    var Dbody = function(dBitmoji){
//shirt
fill( dBitmoji.shirtColor);
quad(dBitmoji.x+172*dBitmoji.h/100, dBitmoji.y+242*dBitmoji.h/100, dBitmoji.x+249*dBitmoji.h/100, dBitmoji.y+242*dBitmoji.h/100, dBitmoji.x+274*dBitmoji.h/100, dBitmoji.y+283*dBitmoji.h/100, dBitmoji.x+145*dBitmoji.h/100, dBitmoji.y+281*dBitmoji.h/100);
//initials
        if(dBitmoji.initials===false){
    }
    else{fill(255, 255, 255);
 beginShape(QUAD_STRIP);
vertex(dBitmoji.x+195*dBitmoji.h/100, dBitmoji.y+252*dBitmoji.h/100); 
vertex(dBitmoji.x+194*dBitmoji.h/100, dBitmoji.y+265*dBitmoji.h/100); 
vertex(dBitmoji.x+178*dBitmoji.h/100, dBitmoji.y+251*dBitmoji.h/100);
vertex(dBitmoji.x+174*dBitmoji.h/100, dBitmoji.y+265*dBitmoji.h/100);

endShape();

beginShape(QUAD_STRIP);
vertex(dBitmoji.x+178*dBitmoji.h/100,dBitmoji.y+ 251*dBitmoji.h/100); 
vertex(dBitmoji.x+178*dBitmoji.h/100,dBitmoji.y+ 282*dBitmoji.h/100); 
vertex(dBitmoji.x+166*dBitmoji.h/100,dBitmoji.y+ 251*dBitmoji.h/100);
vertex(dBitmoji.x+164*dBitmoji.h/100,dBitmoji.y+ 281*dBitmoji.h/100);

endShape();
 beginShape(QUAD_STRIP);
vertex(dBitmoji.x+194*dBitmoji.h/100,dBitmoji.y+ 269*dBitmoji.h/100); 
vertex(dBitmoji.x+190*dBitmoji.h/100,dBitmoji.y+ 279*dBitmoji.h/100); 
vertex(dBitmoji.x+177*dBitmoji.h/100,dBitmoji.y+ 268*dBitmoji.h/100);
vertex(dBitmoji.x+174*dBitmoji.h/100,dBitmoji.y+ 278*dBitmoji.h/100);

endShape();

 beginShape(QUAD_STRIP);
vertex(dBitmoji.x+202*dBitmoji.h/100,dBitmoji.y+ 256*dBitmoji.h/100); 
vertex(dBitmoji.x+252*dBitmoji.h/100,dBitmoji.y+ 282*dBitmoji.h/100); 
vertex(dBitmoji.x+237*dBitmoji.h/100,dBitmoji.y+ 252*dBitmoji.h/100);
vertex(dBitmoji.x+202*dBitmoji.h/100,dBitmoji.y+ 278*dBitmoji.h/100);

endShape();}
};
    var dBitmoji = function (bitmojiObject) { 
Dbody(bitmojiObject) ;
Dhead(bitmojiObject) ;
};
var drawBitmoji = function (x,y,h){
dBitmoji (
     {x:x-65,
            y:y-60,
            h:h,
            shirtColor:color(255, 255, 0),
            initials:true}
            );
};

//replace line image with your draw bitmoji function
player.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    drawBitmoji(this.x,this.y,30);
};
//the hop and fall
player.prototype.hop = function() {
    this.y -= 5;
     //score by crossing
    if (this.y===0)
    {
        sCondition = 1;
        
        
    }
      if (this.y===300)
    {
        sCondition ++;
        if(sCondition===2){
            score += 3;
        }
        sCondition = 0;
        
        
        
    }
};

player.prototype.fall = function() {
    this.y += 5;
};
//Hit detection
player.prototype.checkForrocketGrab = function(rocket) {
    if ((rocket.x >= this.x &&  rocket.x <= (this.x +40)) &&
        (rocket.y >= this.y && rocket.y <= (this.y + 10))) {
        rocket.y = -400;
        score+=-1;
    }
};

var rocket = function(x, y) {
    this.x = x-40;
    this.y = y+10;
    
};

rocket.prototype.draw = function() {
    fill(89, 71, 0);
    imageMode(CENTER);
    image(getImage("space/rocketship"), this.x, this.y - 5, 75, 75);
};

var player = new player(200, 300);

var rockets = [];
for (var i = 0; i < 100; i++) {  
    rockets.push(new rocket(i * 50 + -5000, random(63, 308)));
}


var gameScene= function() {
    //start screen
    
    // static
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    rect(0, height*-0.03, width, height*0.10);

    if (rockets[rockets.length - 1].x >= 5300) {
        currentScene = 3;
        textSize(40);
        text("GAME OVER", 90, 100);
    }
    for (var i = 0; i < rockets.length; i++) {
        rockets[i].draw();
        player.checkForrocketGrab(rockets[i]);
        rockets[i].x += 1;
    }
    textSize(18);
    text("Score: " + score, 4, 52);
    
    
    if (keyIsPressed && keyCode === 0) {
        player.hop();
    } else {
        player.fall();
    }
    player.draw();
    pauseButton.draw();
};
var splashScene = function() {
    textAlign(LEFT, TOP);
    background(0, 166, 255);
    fill(0, 0, 0);
    textSize(40);
    text("Fran's's Frogger Game", 5, 25);
    dBitmoji(200, 165, 150);
    startButton.draw();
};

mouseClicked = function() {
    if (currentScene === 0) {
        startButton.handleMouseClick();
    }
    else if (currentScene === 1 || currentScene === 2) {
        pauseButton.handleMouseClick();
    }
};

draw = function() {
    if (currentScene === 0) {
        splashScene();    
    }
    else if (currentScene === 1) {
        gameScene();    
    }
};
