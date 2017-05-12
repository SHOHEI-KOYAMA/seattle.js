window.onload = function fallball(){

for (var i = 1; i<19; i++) {
//this interval vars define the interval of fall of raindrops.
	var dropinterval = Math.floor( Math.random() * 100 + 1);//ここの数字で雨粒の頻度を調節
	var dropinterval0 = Math.floor( Math.random() * 1000 + 1);//ここの数字で雨粒の頻度を調節
	var dropinterval1 = Math.floor( Math.random() * 2000 + 1);//ここの数字で雨粒の頻度を調節

	//this var defines the width of rain.
	var random_width = Math.random();//ここの数字で雨粒の範囲を調節

	var ball = document.getElementById("ball"+i)
	,bh = ball.offsetHeight
	,bw = ball.offsetWidth
	,left = ( window.innerWidth ) *random_width - ( bw / 2 )//ここで降り出す位置を指定
	,top = -ball.offsetHeight
	,ground = ( window.innerHeight) - ( bh / 2 );
	ball.style.left = left + "px";
	ball.style.top = top + "px";


	console.log(dropinterval);


	//this is the main funciton of making raindrops.
	setInterval(function(){
		var y = top
		,b = ground
		,v = 0
		,R = 0.48;
		// console.log(y);

		function gravity() {
			y+= ++v;
			if( y >= b ) {
			  	y = b;
			  	v*= -R/3;
			  	if ( !~~v ) {
			  		clearInterval(g)
			  	}
			}
			document.getElementById('ball1').style.top = y + "px";
			document.getElementById('ball2').style.top = y + "px";
			document.getElementById('ball3').style.top = y + "px";
			document.getElementById('ball4').style.top = y + "px";
			document.getElementById('ball5').style.top = y + "px";
			document.getElementById('ball6').style.top = y + "px";
		}
		var g = setInterval(gravity, 10);
	}, dropinterval);


	setInterval(function(){
		var y = top
		,b = ground
		,v = 0
		,R = 0.48;
		// console.log(y);

		function gravity() {
			y+= ++v;
			if( y >= b ) {
			  	y = b;
			  	v*= -R/3;
			  	if ( !~~v ) {
			  		clearInterval(g)
			  	}
			}
			document.getElementById('ball7').style.top = y + "px";
			document.getElementById('ball8').style.top = y + "px";
			document.getElementById('ball9').style.top = y + "px";
			document.getElementById('ball10').style.top = y + "px";
			document.getElementById('ball11').style.top = y + "px";
			document.getElementById('ball12').style.top = y + "px";
		}
		var g = setInterval(gravity, 10);
	}, dropinterval0);

	setInterval(function(){
		var y = top
		,b = ground
		,v = 0
		,R = 0.48;
		// console.log(y);

		function gravity() {
			y+= ++v;
			if( y >= b ) {
			  	y = b;
			  	v*= -R/3;
			  	if ( !~~v ) {
			  		clearInterval(g)
			  	}
			}
			document.getElementById('ball13').style.top = y + "px";
			document.getElementById('ball14').style.top = y + "px";
			document.getElementById('ball15').style.top = y + "px";
			document.getElementById('ball16').style.top = y + "px";
			document.getElementById('ball17').style.top = y + "px";
			document.getElementById('ball18').style.top = y + "px";
		}
		var g = setInterval(gravity, 10);
	}, dropinterval1);
}

};