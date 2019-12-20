var number = round( random(0.5,300.4));
var temp;
var line1;
var x;
var y;
println(number);

var gen_number = function(x,y,current){
fill(0, 0, 0);
text(current,x+16,y+25,100,100);
//text(number,x+38,y+40,100,100);

};
y=-15;
for(temp=1;temp<=number;temp+=15){
    x=0;
    y+=15;
    for(line1=temp;line1<=15+temp;line1++){
    
        if (line1<=number){  
        gen_number(x,y,line1);
        x+=22;
        println("line= " + line1);}
      
    }
    
}











