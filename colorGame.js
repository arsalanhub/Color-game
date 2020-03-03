var numberSquares = 6;
var colors = [];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message")
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
   setupModeButtons();
   setupSquares();
   reset();
}

function setupModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy"){
        	numberSquares = 3;
        }else{
        	numberSquares = 6;
        }
        reset();
	});
    }
}

function setupSquares(){
   for(var i=0;i<squares.length;i++){ 
   //add click listener
   squares[i].addEventListener("click",function(){
   //grab color of clicked square
   var clickedColor=this.style.backgroundColor;
   //compare color to pickedColor
   if(clickedColor===pickedColor){
   messageDisplay.textContent = "Correct";
   resetButton.textContent = "Play Again?"
   changeColors(clickedColor);
   h1.style.backgroundColor = clickedColor;
   }else{
   this.style.backgroundColor="#232323";
   messageDisplay.textContent = "Try Again"; 
   }
   });
  }
}

function reset(){
  colors = generateRandomColors(numberSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for(var i=0;i<squares.length;i++){
  	if(colors[i]){
  	squares[i].style.display = "block";	
  	squares[i].style.backgroundColor = colors[i];
    }else{
     squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
  reset();
});

function changeColors(color){
	//loop through all square and change each color to given color
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{//get random color and push in array
       arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r=Math.floor(Math.random()*256);
	
	//pick a "green" from 0 - 255
	var g=Math.floor(Math.random()*256);

	//pick a "blue" from 0 - 255
	var b=Math.floor(Math.random()*256);
    "rgb(r,g,b)";
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
    //notice space after comma it is placed in such a way to avoid bug
}