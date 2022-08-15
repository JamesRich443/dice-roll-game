var rnone=Math.floor(Math.random()*6)+1;

var rdi="images/" + "dice" + rnone + ".png";

var image1=document.querySelectorAll("img")[0]

image1.setAttribute("src",rdi)

var rntwo=Math.floor(Math.random()*6)+1;

var rdi2="images/" + "dice" + rntwo + ".png";
var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src",rdi2)
if(rnone > rntwo){
    document.querySelector("h1").innerHTML= "player one wins";    
}
else if(rntwo > rnone){
    document.querySelector("h1").innerHTML= "player two wins";    
}
else if(rnone = rntwo){
    document.querySelector("h1").innerHTML= "DRAW";    
}






