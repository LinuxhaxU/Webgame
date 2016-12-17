var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var timer;
var n1 = 2;
var n2 = 2;
var op = 1;
var e1 = 1;
var e2 = 1;
var score = 0;
var wrongAnswers = 0;
function onSub()
{
	clearTimeout(timer);
	//Check win
	if(wrongAnswers > 4)
	{
		document.getElementById("message").innerHTML = "Game Over!";
		document.getElementById("question").innerHTML = "Game Over!";
		var name = document.getElementById("name").value;
		$.get("/name?test="+encodeURI(name), function callback(){});
		$.get("/sc?test="+encodeURI(score), function callback(){});
												 $.get('/score', function(data){
							document.getElementById("highScores").innerHTML = "HighScores<br>" + data;
						});
		return;
	}
	//Hide Splash
	document.getElementById("splash").style.visibility = "hidden";
	var subAnswer = parseInt(document.getElementById("input").value);
	
						switch(op)
					{
						case 1:
						var answer = Math.pow(n1,e1) + Math.pow(n2,e2);
						break;
						case 2:
						var answer = Math.pow(n1,e1) - Math.pow(n2,e2);
						break;
						case 3:
						var answer = Math.pow(n1,e1) * Math.pow(n2,e2);
						break;
						case 4:
						// TODO! var answer = ;
						break;
						default:
						break;
					}
               
	$(document).ready(function () {
	$.ajax({
                     complete: function() {
                     if(subAnswer == answer)
                     {
							score++;
                            document.getElementById("message").innerHTML = "Correct!<br>" + "Score: " + score;    
                     }
                     else
                     {
                            document.getElementById("message").innerHTML = "Wrong!<br>" + "Score: " + score; 
							wrongAnswers++;
                     }
					equationGen();
					var operation = '+';
					switch(op)
					{
						case 1:
						operation = '+';
						break;
						case 2:
						operation = '-';
						break;
						case 3:
						operation = '*';
						break;
						case 4:
						operation = '/';
						break;
						default:
						break;
					}
					document.getElementById("question").innerHTML = "Answer: " + n1 + "^" + e1 + " " + operation + " " + n2 +"^"+e2 + " =?"; 
					timer = setTimeout(onSub, 25000)
										 $.get('/score', function(data){
							document.getElementById("highScores").innerHTML = "HighScores<br>" + data;
						});
					 }

					 
	});
    });
}

function equationGen()
{
    n1 = Math.floor((Math.random() * 100) + 1);
	n2 = Math.floor((Math.random() * 100) + 1);
	op = Math.floor((Math.random() * 3) + 1);
	e1 = Math.floor((Math.random() * 5) + 1);
	e2 = Math.floor((Math.random() * 5) + 1);
	if(op == 3)
	{
	e1 = Math.floor((Math.random() * 3) + 1);
	e2 = Math.floor((Math.random() * 2) + 1);
	}
}