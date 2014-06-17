$(document).ready(function(){

	setInterval(function(){

		function timePrint(){
			console.log(new Date());
		};

		// console.log(new Date());
	   	function draw(){

	   	  var canvas = document.getElementById("cv");
		  var context = canvas.getContext("2d");  

     // determine center and max clock arm length
     var centerX = canvas.width / 2, centerY = canvas.height / 2;
     var maxArmLength = Math.min(centerX, centerY);

     clearCanvas(context,canvas);

	 function clearCanvas(context, canvas) {
		  context.clearRect(0, 0, canvas.width, canvas.height);
		  var w = canvas.width;
		  canvas.width = 1;
		  canvas.width = w;
	}

     function drawArm(position, lengthScale, weight) {


			// context.strokeStyle='#00cc00';
			context.lineWidth=weight;
			context.lineLength = lengthScale;
 			context.beginPath();
			context.moveTo(centerX, centerY);
			context.lineTo(centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength, centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength);
			context.stroke();
			context.fill();
     }
 
     // erase background
     // context.background(224);
 
     var now = new Date();
 
     // Moving hours arm by small increments
    var hoursPosition = (now.getHours() % 12 + now.getMinutes() / 60) / 12;
     drawArm(hoursPosition, 0.5, 5);
 
     // Moving minutes arm by small increments
     var minutesPosition = (now.getMinutes() + now.getSeconds() / 60) / 60;
     drawArm(minutesPosition, 0.80, 3);
 
     // Moving hour arm by second increments
     var secondsPosition = now.getSeconds() / 60;
     drawArm(secondsPosition, 0.90, 1);
  };

  // timePrint();
  draw();
 },1000);
});