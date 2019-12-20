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

 dBitmoji (
	    {x:2,
            y:54,
            h:75,
            shirtColor:color(255, 0, 0),
            initials:false}
          );
	
dBitmoji (
     {x:63,
            y:36,
            h:120,
            shirtColor:color(255, 255, 0),
            initials:true}
            );

