var numSqr = 6;
var color;
var correctColor;
var square = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var levelBtn = document.querySelectorAll(".level");

init();

function init() {
    reset();
    setupLevels();
    setupSquares();
}

function setupSquares() { 
    for (var i = 0; i < color.length; i++){
        square[i].style.backgroundColor = color[i];
        //pickedColor
        square[i].addEventListener("click", function () {
            //picking color
            var pickedColor = this.style.backgroundColor;
            //checking
            if (pickedColor === correctColor) {
                messageDisplay.textContent = "Correct";
                colorLeveler(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function setupLevels() { 
    for (var i = 0; i < levelBtn.length; i++){
        levelBtn[i].addEventListener("click", function () {
            levelBtn[0].classList.remove("selected");
            levelBtn[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSqr = 3;
            }
            else {
                numSqr = 6;
            }
            reset();
        });
    }
}

 
//reset function
function reset() { 
    //picks a new arr
    color = arrayGenerator(numSqr);
    //picks a new correct color
    correctColor = pickColor();
    //changes h1 rgb display
    colorDisplay.textContent = correctColor;
    //assigns new array to the squares
    for (var i = 0; i < square.length; i++){
        if (color[i]) {
            square[i].style.display = "block";
            square[i].style.backgroundColor = color[i];            
        }
        else {
            square[i].style.display = "none";
        }
    }
    //resets h1 background
    h1.style.backgroundColor = "steelblue";
    //changes messageDisplay text
    messageDisplay.textContent = "";
    //changes resetButton text
    resetButton.textContent = "New Colors";
}

//reset button functionality
resetButton.addEventListener("click", function () {
    reset();
});

//squares functionality


function colorLeveler(color) {
    for (var i = 0; i < square.length; i++) {
        if (square[i].style.backgroundColor !== "rgb(35, 35, 35)") {
            square[i].style.backgroundColor = color;            
        }
    }
}
    
//picks color that is correct
function pickColor() {
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

//makes an array of random colors
function arrayGenerator(num) {
    //make an array
    var arr = [];
    //assign random colors
    for (var i = 0; i < num; i++) { 
        arr.push(randomColor());
    }
    //returm the array
    return arr;
}

//generates random color
function randomColor() {
    //pick r, g, b
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    //return rgb string rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
