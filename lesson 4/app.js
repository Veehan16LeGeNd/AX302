console.log("test.....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")
// var ctx = document.getElementById('myCanvas').getContext('2d')
var img = new Image();
img.src = 'Donald_Trump.png';

img.onload = function(){
	ctx.drawImage(img,300,200,100,200,);
}; 


ctx.font = "60px Trebuchet MS";
ctx.fillStyle = "royalblue";
ctx.fillText('Veehan', 100, 70);
ctx.strokeText('Veehan', 200, 90);
