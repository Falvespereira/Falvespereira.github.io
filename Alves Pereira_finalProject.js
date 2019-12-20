/*----------------------------------Francisco Bitmoji-------------------------------------*/
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

/*--------------------------------------Josh Bitmoji--------------------------------------*/

var Bitmoji = function (bitmojiX,bitmojiY,bitmojiH,r,g,b,tOrF) {
    //This is my Bitmoji constructor

    //All of the lines below are properties and their value pairs
    this.bitmojiX = bitmojiX;
    this.bitmojiY = bitmojiY;
    this.bitmojiH = bitmojiH;
    //These three properties are used to control the color
    this.r = r;
    this.g = g;
    this.b = b;
    this.boo = tOrF;
};
var drawBitmoji = function(Bitmoji) {
    /*
    This is the function that draws the Bitmoji and uses the Bitmoji constructor as a parameter
    The properties used in my constructor are being used within my bitmoji function (bitmojiX, bitmojiY, bitmojiH)
    I used dot notation to call the properties from my Bitmoji constructor in my drawBitmoji function
    */

    var drawBody = function() {
        fill(Bitmoji.r, Bitmoji.g, Bitmoji.b);
        noStroke();
        rect(Bitmoji.bitmojiX+(24*Bitmoji.bitmojiH/100),Bitmoji.bitmojiY+238*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*148,Bitmoji.bitmojiH/100*57,Bitmoji.bitmojiH/100*19);
   };
    var drawNeck = function() {  
        fill(171, 141, 96);
        rect(Bitmoji.bitmojiX+76*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 198*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*45,Bitmoji.bitmojiH/100*40);
  };
    var drawHead = function() {
        fill(171, 141, 96);
        ellipse(Bitmoji.bitmojiX+100*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 158*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*96,Bitmoji.bitmojiH/100*133);
    };   
    var drawEyes = function() {
        fill(255, 255, 255);
        ellipse(Bitmoji.bitmojiX +77*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 158*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*13,Bitmoji.bitmojiH/100*13);
        ellipse(Bitmoji.bitmojiX + 118*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 158*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*13,Bitmoji.bitmojiH/100*13);
        fill(0, 0, 0);
        ellipse(Bitmoji.bitmojiX +77*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 158*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*7,Bitmoji.bitmojiH/100*9);
        ellipse(Bitmoji.bitmojiX + 118*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 158*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*7,Bitmoji.bitmojiH/100*9);
    };
    var drawHair = function() {
        fill(0, 0, 0);
        arc(Bitmoji.bitmojiX + 100*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 123*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*98,Bitmoji.bitmojiH/100*-73,-1,181);
        rect(Bitmoji.bitmojiX + 64*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 106*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*72,Bitmoji.bitmojiH/100*26,Bitmoji.bitmojiH/100*1);
        rect(Bitmoji.bitmojiX + 51*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 120*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*14,Bitmoji.bitmojiH/100*39,Bitmoji.bitmojiH/100*0);
        rect(Bitmoji.bitmojiX + 135*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 118*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*14,Bitmoji.bitmojiH/100*39,Bitmoji.bitmojiH/100*0);
    };
    var drawNose = function() {
        noFill();
        stroke(0, 0, 0);
        arc(Bitmoji.bitmojiX + 97*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 170*Bitmoji.bitmojiH/100, Bitmoji.bitmojiH/100*19, Bitmoji.bitmojiH/100*19, 12,159);
    };
    var drawMouth = function() {
        fill(168, 109, 109);
        noStroke();
        arc(Bitmoji.bitmojiX +97*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 195*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*31,Bitmoji.bitmojiH/100*10,2,180);
    };
    var drawBeard = function() {
        stroke(0, 0, 0);
        noFill();
        strokeWeight(3);
        arc(Bitmoji.bitmojiX +99*Bitmoji.bitmojiH/100,Bitmoji.bitmojiY + 177*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*86,Bitmoji.bitmojiH/100*90,33,145);
    };
    var theText = function() {
        fill(250, 250, 250);
        if (Bitmoji.boo === true) {
        text("JM", Bitmoji.bitmojiX + 41*Bitmoji.bitmojiH/100, Bitmoji.bitmojiY + 249*Bitmoji.bitmojiH/100,Bitmoji.bitmojiH/100*70,Bitmoji.bitmojiH/100*80);
        } 
    };
//I'm calling all of my body part functions below (Functionception)
var callMeFunctions = function() {
drawBody(Bitmoji.bitmojiX,Bitmoji.bitmojiY,Bitmoji.bitmojiH);
drawNeck(Bitmoji.bitmojiX,Bitmoji.bitmojiY, Bitmoji.bitmojiH);
drawHead(Bitmoji.bitmojiX,Bitmoji.bitmojiY, Bitmoji.bitmojiH);
drawEyes(Bitmoji.bitmojiX,Bitmoji.bitmojiY, Bitmoji.bitmojiH);
drawHair(Bitmoji.bitmojiX,Bitmoji.bitmojiY, Bitmoji.bitmojiH);
drawNose(Bitmoji.bitmojiX,Bitmoji.bitmojiY, Bitmoji.bitmojiH);
drawMouth(Bitmoji.bitmojiX,Bitmoji.bitmojiY, Bitmoji.bitmojiH);
drawBeard(Bitmoji.bitmojiX,Bitmoji.bitmojiY, Bitmoji.bitmojiH);
theText(Bitmoji.bitmojiX,Bitmoji.bitmojiY,Bitmoji.bitmojiH);
};

//This function calls all of the functions in my drawBitmoji function
callMeFunctions();
};
var greenBitmoji = new Bitmoji(258,99,69,119,340,0,true);

/*----------------------------------Global Variables--------------------------------------*/

//Global Variables
var currentScene = 0;
var tOrF = false;

//Used to check for the start of them game later on
var state = 'game';

//global variables for Ship
var px = 210;
var py = 200;
var psz = 35;
var rot = 0;
var rot2 = rot;

//This is where my asteroid objects are held
var asteroids = [];
var asteroidX = [];
var asteroidY = [];

//Variable for incrementing Asteroids
var AC = 1;
//Used for collision later on in my code
var crashed = false;

//Constructor for stars used in gameScreen and startScreen
var Star = function(x,y) {
  this.x = x;
  this.y = y;
};


/*-----------------------------------Button Classes---------------------------------------*/

// This is Khan's Button classes copied exactly from the reading
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(110, 56, 110);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(255, 255, 255);
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

Button.prototype.handleMouseClick = function()
{
    if (this.isMouseInside()) {
        this.onClick();
    }
};
/*--------------------------------------Button Instances----------------------------------*/

//This is the start button 
var startButton = new Button({
    x: 120,
    y: 331,
    label: "         Start",
    onClick: function() 
    {
        currentScene = 1;
    }
});

//Next Button
var nextButton = new Button({
    x: 120,
    y: 270,
    label: "       Next",
    onClick: function()
    {
        tOrF = true;
        currentScene = 2;
    }
});

//Mouse clicked function to check for the clicking of button
mouseClicked = function() {
    if (currentScene === 0)
    {
        startButton.handleMouseClick();
}
else{
        nextButton.handleMouseClick();
}
};

/*----------------------------------------Key Codes---------------------------------------*/

//keycodes
var keys = [];
keyPressed = function(){
    keys[keyCode] = true;
};
keyReleased = function(){
    keys[keyCode] = false;
};

/*----------------------------------------Asteroids---------------------------------------*/

//Asteroids coming from top left
var AsteroidTypeOne = function (x,y,size,hit) 
{
  this.x = x;
  this.y = y;
  this.size = size;
  this.hit = 0;
 
};

//Asteroids coming from bottom right
var AsteroidTypeTwo = function (x,y,size,hit) 
{
  this.x = x;
  this.y = y;
  this.size = size;
   this.hit = hit;
};
//These are the prototypes for my asteroids 
AsteroidTypeOne.prototype.draw = function()
{
    noFill();
    stroke(247, 247, 247);
    ellipse(this.x,this.y, this.size, this.size);
    this.x += 1;
    this.y += 1;
    
    if (this.x >= 500) 
    {
        this.x = -50;
    }
    if (this.y >= 500) 
    {
        this.y = -50;
    }

};
AsteroidTypeTwo.prototype.draw = function()
{
    noFill();
    stroke(247, 247, 247);
    ellipse(this.x,this.y, this.size, this.size);
    this.x += -1;
    this.y += -1;
    
    if (this.x <= -50) 
    {
        this.x = 500;
    }
    if (this.y <= -50) 
    {
        this.y = 500;
    }
};

//This is a for loop creating new Asteroid objects and placing them into my asteroids array above
for (var i =0; i <= AC; i++) 
{
   asteroids.push(new AsteroidTypeOne(random(0,400),random(0,400),random(30,50))); 
}
for (var i =0; i <= AC; i++) 
{
   asteroids.push(new AsteroidTypeTwo(random(0,400),random(0,400),random(30,50)));
}

/*----------------------------------------SpaceShip---------------------------------------*/

//ship constructor
var Player = function(){
    this.boost = false;
    this.veling = false;
    this.vel = 0;
    this.rot = false;
    this.rotTmr = 0;
    this.rotTmr2 = 0;
    this.spd = 0.1;
};
//(inspired by https://www.khanacademy.org/computer-programming/space-rock-shooter-ugh-another-asteroid-clone/5282528651116544)
//ship properties
Player.prototype.draw = function(x,y,z) {
    fill(255, 0, 0);
    translate(x,y);
  //allowing rotation
    if (this.rot === true){
        
        rotate(rot2);
    }
    else{
        
        rotate(rot);
    }
    
// seting cameras to zero
    translate(0,0);
    strokeWeight(1.5);
    stroke(255, 255, 255);
    noFill();
//building ship
    line(0,-23,15,17);
    line(0,-23,-14,17);
    line(-11,9,11,9);
    fill(255, 255, 255);
    triangle(0,-9,-11,9,11,9);
    if (this.boost === true){
        noFill();
    triangle(0,21,-6,9,6,9);
    }
    //seting max velocity
    if (this.vel > 4) {
        this.vel = 4;
    }
    //moving ship
    // the x and y position * velocity so momentum is maintained and controlable
    py+=cos(rot)*-this.vel;
    px+=sin(rot)*this.vel;
    
    //moving foward
    if (keys[UP]) {
        this.rot = false;
        this.rotTmr2 = 0;
        //rembering where the ship is pointing after leting go of the up key
        if (this.rotTmr === 0){
        rot = rot2;
        
        }this.rotTmr++;
        this.veling=false;
        //increasing velocity
        this.vel += 0.09;
        
        //seting boost animation
        this.boost = true;
        if (keys[RIGHT]){
        //adding to the angle to turn right
        rot += 5;
        }
        //subtractingto the angle to turn left
        if (keys[LEFT]){
        rot -= 5;
        }
    }
    //controling the ship while not pressing forward
    else {
        //slowing down the ship and rembering the direction the ship is in
        this.rotTmr = 0;
        if (this.rotTmr2 === 0){
        rot2 = rot;
        }this.rotTmr2++;
        this.rot = true;
        this.vel/=1.01;this.boost = false;
        //same rotation from earlier except with out the foward key
        if (keys[RIGHT]){
        
        rot2 += 5;
    }
    if (keys[LEFT]){
        rot2 -= 5;
    }
    }
};

//calling the player
var p = new Player();

//puting all values into the same function so its easier to see the values of x,y and velocity
var drawPlayer = function(){
    
    pushMatrix();
    //orienting the camara so the rotate functions properly
    rotate(0);
    
    //seting the values of the ship at the start
    p.draw(px,py,200);
    
    popMatrix();
    
    
};

/*-------------------------------------Game Screens---------------------------------------*/

//This is the start screen
var startScreen = function() 
{
    
    background(20, 16, 20);
    textAlign(CENTER,CENTER);
    textSize(40);
    text("D O D G E   T H E ",197,77);
    text("A S T E R O I D S !",197,133);
      //Franciscos bitmoji
      stroke(89, 86, 86);
    dBitmoji({x:-87,
            y:98,
            h:71,
            shirtColor:color(255, 0, 0),
            initials:true});
            
    //Josh Bitmoij
    drawBitmoji(greenBitmoji);

    //Function to create random stars
    Star.prototype.draw = function() {
    
        fill(255, 255, 255);
        noStroke();
        ellipse(this.x,this.y,2,2);
    };

    var stars = [];

    for (var i = 0; i <= 15; i++) 
    {
    stars.push(new Star(random(0,400),random(0,400)));   
}
    for (var j in stars)
    {
        stars[j].draw(j) ;    
    }
    startButton.draw();
    
};

//Instruction screen
var instructionScreen = function() 
{
    background(54, 36, 54);
    textAlign(CENTER,CENTER);
    textSize(20);
    text("How long can you last? Use the arrow \n keys provided to stay alive for \n as long as possible without \n hitting any of the asteroids.",196,109);
    text("Instructions ",196,37);
    nextButton.draw();
    
    //Franciscos bitmoji
    dBitmoji({x:-87,
            y:85,
            h:71,
            shirtColor:color(255, 0, 0),
            initials:true});
            
    //Josh Bitmoij
    drawBitmoji(greenBitmoji);
};

//This will restart my timer
var start = millis();

//This is the game screen
var gameScreen = function() 
{
    background(10, 10, 10);
    
    //Franciscos bitmoji
    dBitmoji({x:-87,
            y:95,
            h:71,
            shirtColor:color(255, 0, 0),
            initials:true});
            
    //Josh Bitmoij
    drawBitmoji(greenBitmoji);
    
    //This is my timer
    var m = millis();
    text(((m -start)/1000), 30, 20);


    if (m === millis[5])
    {
        AC += 1;
    }
    if (m === millis[10])
    {
       AC += 3;
    }
    if (m === 20)
    {
        asteroids.push(new AsteroidTypeOne(random(0,400),random(0,400),random(30,50)));
        asteroids.push(new AsteroidTypeTwo(random(0,400),random(0,400),random(30,50)));
    }
    
    
    //Function to create random stars
    Star.prototype.draw = function() {
    
        fill(255, 255, 255);
        noStroke();
        ellipse(this.x,this.y,2,2);
    };
    
    //Where all the stars are
    var stars = [];
    
    //Creates 15 stars and pushes them into my stars array
    for (var i = 0; i <= 15; i++) 
    {
    stars.push(new Star(random(0,400),random(0,400)));   
}
    
    //Iterates through my stars array
    for (var j in stars)
    {
        stars[j].draw(j) ;    
    }
    
    //Iterates through my asteroids array
    for(var i in asteroids)
    {
        asteroids[i].draw(i);
        //size = diamter
        //collsion
        if (asteroids[i].x < px + asteroids[i].size/2 && asteroids[i].x > px -asteroids[i].size/2 && asteroids[i].y < py +asteroids[i].size/2 && asteroids[i].y > py -asteroids[i].size/2 ) 
    {
        crashed = true;
    }
    }
    
    textAlign(CENTER,CENTER);
    cursor(ARROW);

    if (state === "game"){
        drawPlayer();
        if (px < -18){
            px = 418;
        }
        if (px > 418){
            px = -18;
        }
        if (py < -18){
            py = 418;
        }
        if (py > 418){
            py = -18;
        }
    }
    return crashed;
};

//Game over Screen
var endScreen = function() 
{
    background(3, 3, 3);
    fill(255, 0, 0);
    text("Game Over",200,200);
};

/*--------------------------------------Draw Function-------------------------------------*/

//This is the business area
draw = function() 
{
    if (currentScene === 0) 
    {
        startScreen();
    }
    if (currentScene === 1) 
    {
        instructionScreen();
    }
    if (currentScene === 2)
    {
        if (!crashed){
            crashed = gameScreen();
        }
        else
        {
            endScreen();   
        }

    }
};