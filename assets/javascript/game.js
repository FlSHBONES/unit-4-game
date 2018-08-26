// defining variables in order of page apperance

var target = 0;
var counter = 0;
var wins = 0;
var losses = 0;
var crystalone = 0;
var crystaltwo = 0;
var crystalthree = 0;
var crystalfour = 0;

//random number generation function           
//reference source for two range random number generation: https://gist.github.com/brunomonteiro3/27af6d18c2b0926cdd124220f83c474d

function values(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// generating random values for variables

// create random target number min = 19, max = 120
function valuewritetarget() {
    target = writevalue(19, 120);
}
// crystals values min = 1, max = 12    
function valuewritecrystals() {
    crystalone = writevalue(1, 12);
    crystaltwo = writevalue(1, 12);
    crystalthree = writevalue(1, 12);
    crystalfour = writevalue(1, 12);
}


//write game start logic

$(document).ready(function() {
    valuewritetarget();
    valuewritecrystals();

)