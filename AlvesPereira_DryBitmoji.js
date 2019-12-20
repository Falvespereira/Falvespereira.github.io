var Numd = (random(100,200));
//declare arrays
var xPositions = [];
var yPositions = [];
var speed = [];
var c1 = [];
var c2 = [];
var c3 = [];

var a;
//declaring the values of an elpise
for (a=0;a<=Numd;a++){
    c1.push(random(1,355));
    c2.push(random(1,355));
    c3.push(random(1,355));
    xPositions.push(random(10,340));
    yPositions.push(random(5,417));
    speed.push(round(random(0.5,4.4)));

}

var i;
//the function that controls the rain drops
var rain = function(i){
   
        noStroke();
       
        fill(c1[i], c2[i], c3[i]);
   
        ellipse(xPositions[i], yPositions[i], 10, 10);
       
        if (xPositions[i] >= 400 || (xPositions[i] >= 250 && yPositions[i] >= 133 && yPositions[i] <= 243)) {
            xPositions[i] = 0;
        }
       
        xPositions[i] += speed[i];
};



//drawing bitmoji
//face axis
var xaxis = random(-100,100);
var yaxis = random(-100,100);

var Dhead = function(xaxis,yaxis,height){//headphones
fill(43, 44, 46);
ellipse (xaxis+(161*height/100),yaxis+171*height/100,27*height/100,49*height/100);
ellipse (xaxis+265*height/100,yaxis+170*height/100,27*height/100,49*height/100);
//head
fill(237, 233, 218);
ellipse (xaxis+213*height/100,yaxis+180*height/100,99*height/100,125*height/100);
//nose
triangle(xaxis+215*height/100, yaxis+191*height/100, xaxis+223*height/100, yaxis+216*height/100, xaxis+206*height/100, yaxis+216*height/100);
//eyes
fill(255, 255, 255);

ellipse (xaxis+235*height/100,yaxis+184*height/100,30*height/100,30*height/100);

ellipse (xaxis+194*height/100,yaxis+184*height/100,30*height/100,30*height/100);
//iris
fill(92, 57, 57);

ellipse (xaxis+236*height/100,yaxis+184*height/100,20*height/100,21*height/100);

ellipse (xaxis+194*height/100,yaxis+184*height/100,20*height/100,21*height/100);

//pupils
fill(0, 0, 0);
ellipse (xaxis+194*height/100,yaxis+184*height/100,9*height/100,9*height/100);
ellipse (xaxis+236*height/100,yaxis+184*height/100,9*height/100,9*height/100);
//hair
arc(xaxis+214*height/100, yaxis+155*height/100, 124*height/100, 99*height/100, 180, 360);
//eyebrows
rect(xaxis+179*height/100,yaxis+159*height/100, 27*height/100, 9*height/100, 16*height/100);
rect(xaxis+223*height/100,yaxis+159*height/100, 27*height/100, 9*height/100, 16*height/100);
//mouth
ellipse(xaxis+214*height/100, yaxis+225*height/100, 30*height/100, 3*height/100);};

var Dbody = function(xaxis,yaxis,height){
//shirt
fill(255, 81, 0);
quad(xaxis+172*height/100, yaxis+242*height/100, xaxis+249*height/100, yaxis+242*height/100, xaxis+274*height/100, yaxis+283*height/100, xaxis+145*height/100, yaxis+281*height/100);
//initials
fill(250, 250, 250);
 beginShape(QUAD_STRIP);
vertex(xaxis+195*height/100, yaxis+252*height/100);
vertex(xaxis+194*height/100, yaxis+265*height/100);
vertex(xaxis+178*height/100, yaxis+251*height/100);
vertex(xaxis+174*height/100, yaxis+265*height/100);

endShape();

beginShape(QUAD_STRIP);
vertex(xaxis+178*height/100,yaxis+ 251*height/100);
vertex(xaxis+178*height/100,yaxis+ 282*height/100);
vertex(xaxis+166*height/100,yaxis+ 251*height/100);
vertex(xaxis+164*height/100,yaxis+ 281*height/100);

endShape();
 beginShape(QUAD_STRIP);
vertex(xaxis+194*height/100,yaxis+ 269*height/100);
vertex(xaxis+190*height/100,yaxis+ 279*height/100);
vertex(xaxis+177*height/100,yaxis+ 268*height/100);
vertex(xaxis+174*height/100,yaxis+ 278*height/100);

endShape();

 beginShape(QUAD_STRIP);
vertex(xaxis+202*height/100,yaxis+ 256*height/100);
vertex(xaxis+252*height/100,yaxis+ 282*height/100);
vertex(xaxis+237*height/100,yaxis+ 252*height/100);
vertex(xaxis+202*height/100,yaxis+ 278*height/100);

endShape();};
var dt = function(xaxis,yaxis,height){
    Dhead(xaxis,yaxis,height);
    Dbody(xaxis,yaxis,height);
};

    //drawing rain function
    draw=function (){
    background(204, 247, 255);
    fill(0, 0, 0);
    rect(255,135,9,100);
   
    for(i=0;i<=Numd;i++){
        rain(i);
    }
   
    stroke(0, 0, 0);
dt(199,77,55);
};

