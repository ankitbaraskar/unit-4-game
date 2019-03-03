$(document).ready(function() {

//  create crystal class
class Crystal{
    constructor(){
        this.crystalValue = function(){
            return Math.floor(Math.random() * 12) + 1;
        }
    }
};

//  declare global variables
//  push wins and losses to html
var wins = 0;
$("#win-span").text(wins);
var losses = 0;
$("#loss-span").text(losses);

var randomNumber;
var totalScore;

var red;
var blue;
var yellow;
var green;

var redValue;
var blueValue;
var yellowValue;
var greenValue;

//  a new game is create everytime the browser is refreshed and win++ or losses++
function newGame(){
    randomNumber= Math.floor(Math.random()*(120-19+1)+19);
    console.log(randomNumber);
    $("#random-number").text(randomNumber);

    totalScore=0;
    $("#score-span").text(totalScore);

//  create new four crystal objects everytime a new game starts
    red = new Crystal();
    blue = new Crystal();
    yellow = new Crystal();
    green = new Crystal();

//  get values from the objects
    redValue = red.crystalValue();
    blueValue = blue.crystalValue();
    yellowValue = yellow.crystalValue();
    greenValue = green.crystalValue();
    
};

//  call function for when browser is refreshed. Moreover, display totalscore and randomNumber on browser refresh
newGame();

//  how decisions are made with the crystal value passed in it
function onClickPerform(value){

//  updates totalscore if less than randomNUmber
    if(totalScore < randomNumber){
        totalScore += value;
        $("#score-span").text(totalScore);
    }

//  this IF has to be checked at the same time as the above IF so that newGame is called properly
    if(totalScore == randomNumber){
        wins++;
        $("#win-span").text(wins);
        newGame();
    }

    else if(totalScore > randomNumber){
        losses++;
        $("#loss-span").text(losses);
        newGame();
    }
};

//  calling the above function for each on click listener
$("#red-crystal").on("click", "img", function(){
    console.log("Red Value "+redValue);
    onClickPerform(redValue);
});

$("#blue-crystal").on("click", "img", function(){
    console.log("Blue Value "+blueValue);
    onClickPerform(blueValue);
});

$("#yellow-crystal").on("click", "img", function(){
    console.log("Yellow Value "+yellowValue);
    onClickPerform(yellowValue);
});

$("#green-crystal").on("click", "img", function(){
    console.log("Green Value "+greenValue);
    onClickPerform(greenValue);
});

});