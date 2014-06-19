function initialize(){

	var canvas = document.getElementById('cv');
	var context = canvas.getContext('2d');

	var centerX = canvas.width/2, centerY = canvas.height/2;

	console.log(centerX);
	console.log(centerY);

	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0,200);
	context.lineWidth = 15;

    context.strokeStyle = '#58FA58';
    context.stroke();
}


function draw(i){

	var canvas = document.getElementById('cv');
	var context = canvas.getContext('2d');

	var centerX = canvas.width, centerY = canvas.height/2;

	// console.log(centerX);
	// console.log(centerY);

	context.beginPath();
	context.globalAlpha = 0.5;
	context.moveTo(i,-10);		
	context.lineTo((Math.random()*2348972)%200,250);
	context.lineWidth = 15;
	context.lineLength = 1000;
	context.strokeStyle = getRandomColor();
	context.stroke();

}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomSelectedColor(){

	var colors = ['#9AFE2E','#C8FE2E', '#BFFF00',];


	return ;
}

$(document).ready(function(){

	var i = 0;

	initialize();

	setInterval(function(){
		draw(i);
		i++;
		if(i > 210)
			i=0;

	},41.6);
	
});