// defining variables in order of page apperance
var gamestart = false
var target = 0;
var counter = 0;
var wins = 0;
var losses = 0;
var crystalone = {
    value: 0
};
var crystaltwo = {
    value: 0
};
var crystalthree = {
    value: 0
};
var crystalfour = {
    value: 0
};
//random number generation function           
//reference source for two range random number generation: https://gist.github.com/brunomonteiro3/27af6d18c2b0926cdd124220f83c474d

function values(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// generating random values for variables

// create random target number min = 19, max = 120
target = values(19, 120);

// crystals values min = 1, max = 12    
crystalone.value = values(1, 12);
crystaltwo.value = values(1, 12);
crystalthree.value = values(1, 12);
crystalfour.value = values(1, 12);

//verifying the crystal choices are diverse
function valuecheck() {
    if (crystalone.value === crystaltwo.value | crystalone.value === crystalthree.value | crystaltwo.value === crystalthree.value | crystaltwo.value === crystalfour.value | crystalthree.value === crystalfour.value) {
        gamestart = false;
    }
}



//write game start logic

$(document).ready(function startgame() {
    gamestart = true;
    values();
    $('#target').html("<p>Target: " + target + "</p>")
    valuecheck();
    console.log(target);
    console.log(crystalone);
    console.log(crystaltwo);
    console.log(crystalthree);
    console.log(crystalfour);
    console.log (gamestart);
    });


