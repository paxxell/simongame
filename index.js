var sequenceMade=[];
var sequenceUser=[];
var audio = [new Audio("./sounds/green.wav"), new Audio("./sounds/blue.wav"), new Audio("./sounds/red.wav"), new Audio("./sounds/yellow.wav"), new Audio("./sounds/wrong.wav")];
var levelCounter= 0; 
var level=0;

//Press key to start
/* green = 0, red= 1, yellow =2, blue=3 */

$(document).on("keydown", function(e){
    if (e.keyCode === 13){
    nextSequence();
    }
});


//This generates a random number and pushes it to the sequenceMade.
function nextSequence() {
 var randomNumber = Math.floor(Math.random()*4);
 sequenceMade.push(randomNumber); 
 showSequence(sequenceMade[sequenceMade.length - 1]);
 changeLevel();
 sequenceUser=[];
 
};

//This displays the color and sound of each option
function showSequence(element) {
    
    switch (element){
        case 0:
            audio[0].play();
              $("#purple2").addClass("dissapear");
              setTimeout(function(){
                  $("#purple2").removeClass("dissapear");
              },250)
              break;
        case 1:
            audio[2].play();
            $("#purple1").addClass("dissapear");
              setTimeout(function () {
                  $("#purple1").removeClass("dissapear");
              }, 250)
            break;
        case 2:
            audio[3].play();
              $("#purple4").addClass("dissapear");
              setTimeout(function () {
                $("#purple4").removeClass("dissapear");
              }, 250)
            break;
        case 3:
            audio[1].play();
            $("#purple3").addClass("dissapear");
              setTimeout(function () {
                  $("#purple3").removeClass("dissapear");
              }, 250)
            break;
    }
 };

function changeLevel() {
    levelCounter++;
    $("#level-title").text(`Level: ${levelCounter}`);
    
};

//This converts the clicks into numbers and pushes it to a new array.
$(".btn").click(function(e){
        var userClicked= $(this).attr("id");
        switch(userClicked){
            case "purple2":
                sequenceUser.push(0);
                showSequence(0);
                break;

            case "purple1":
                sequenceUser.push(1);
                showSequence(1);
                break;
            
            case "purple4":
                sequenceUser.push(2);
                showSequence(2);
                break;
            
            case "purple3":
                sequenceUser.push(3);
                showSequence(3);
                break;
            }
        checkSequence(sequenceUser.length-1);
              
    });     


       
//This checks if the sequences is correct so far
function checkSequence(indexOfArray) { 

    if(sequenceUser[indexOfArray] === sequenceMade[indexOfArray]){
       
      if(sequenceMade.length === sequenceUser.length) {
           setTimeout(function () {
            nextSequence();
           }, 1000);
        }
    } else {
      launchError();
    }
}
// Launches error sequence
function launchError(){
$("body").css("background-color", "#c3d3d9")
$("h1").text("Game Over");
    setTimeout(function () {
        $("h1").text("Press Enter Key to start");
        $("body").css("background-color", "#a19b9f");
    }, 1500)
audio[4].play();
levelCounter=0;
sequenceMade = [];
}