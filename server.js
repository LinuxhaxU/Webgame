var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var path = require("path");
var topScores = [0,0,0,0,0,0,0,0,0,0];
var topNames = [
"void",
"void",
"void",
"void",
"void",
"void",
"void",
"void",
"void",
"void",
];
var name;
var score;
var board = "";

app.use(express.static(__dirname));

app.get('/',function(request,res){
       
     res.sendFile(path.join(__dirname+'/views/index.html'));

});

app.get('/name',function(req,res){
	name = req.param("test");
});
app.get('/sc',function(req,res){
	score = parseInt(req.param("test"));
	  for(var i = 0; i < 10; i++)
  {
	  
	  if(score > topScores[i])
	  {
		if(i == 9)
		{
		  topScores[i] = score;
		  topNames[i] = name;
		}
	  if(score < topScores[i+1] && i != 9)
	  {
		  topScores[i] = score;
		  topNames[i] = name;
	  }
	  }
  }
});

app.get('/score',function(request,res){
	board = "";
	for (var i = 9; i > -1; i--)
	{
		board += topNames[i] + " " + topScores[i] + "<br>";
	}
	res.send(board);
	res.end();
});

app.listen(8080);

console.log("Running at Port 8080");