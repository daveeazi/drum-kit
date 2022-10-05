

// Declared variable selecting drum buttons using DOM, the Drum buttons and the number of drum buttons using the .length function
var numberOfDrumButtons = document.querySelectorAll(".drum").length;


// Loop running through each button to add event listeners
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);


// Function Handling clicks on drum buttons 
function handleClick() {


    // Variable to switch on the letter inside the innerHTML of the buttons
    var buttonInnerHTML = this.innerHTML;


    // Using switch statements in fuction parameters
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML)

}

}


// Event identifying keypress
document.addEventListener("keydown", function (event) {
    
    makeSound(event.key);

    buttonAnimation(event.key)

}

);


// Function makes sound when keypress is identified
function makeSound(key){
    

    // Using switch statements
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default: console.log(buttonInnerHTML);

        
    }
}


// Adding button animations
function buttonAnimation(currentkey){
    
    var activeButton =  document.querySelector("." + currentkey);

    activeButton.classList.add("pressed")

    setTimeout(function () {
        activeButton.classList.remove("pressed");
        }, 100);

}

// This code below (event listener) identifies which key was pressed on the console

// document.addEventListener("keydown", function (event) {
//     console.log(event);`
// }

// );






//               Second approach to Javascript code

// ************************************************************************
 

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });

// }

// document.addEventListener("keypress", function(event) {

//   makeSound(event.key);

//   buttonAnimation(event.key);

// });


// function makeSound(key) {

//   switch (key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;

//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;

//     case "s":
//       var tom3 = new Audio('sounds/tom-3.mp3');
//       tom3.play();
//       break;

//     case "d":
//       var tom4 = new Audio('sounds/tom-4.mp3');
//       tom4.play();
//       break;

//     case "j":
//       var snare = new Audio('sounds/snare.mp3');
//       snare.play();
//       break;

//     case "k":
//       var crash = new Audio('sounds/crash.mp3');
//       crash.play();
//       break;

//     case "l":
//       var kick = new Audio('sounds/kick-bass.mp3');
//       kick.play();
//       break;


//     default: console.log(key);

//   }
// }


// function buttonAnimation(currentKey) {

//   var activeButton = document.querySelector("." + currentKey);

//   activeButton.classList.add("pressed");

//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);

// }

// *************************************************************************