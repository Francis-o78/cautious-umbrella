// let user = prompt("choose: rock, paper, or scissors...");
let user;
let score = 0;
let choices = ["rock", "paper", "scissors"];
// establishes global variables for specific choices

function userChoice(choice) {
    user = choice;
    compare();
    // creates function for ser to give input on which he wants to choose
}

function randNum(things) {
    return Math.floor(Math.random() * things.length);
    // function to return specific value that...
}

function cpuChoice() {
    // cpu will be the same value all the time
    return choices[randNum(choices)];
    // function to craete random choice of cpu after user inputs
}

function drawImg(pic, width, height, alt, id) {
    var x = document.createElement("IMG");
    x.setAttribute("src", pic);
    x.setAttribute("width", width);
    x.setAttribute("height", height);
    x.setAttribute("alt", alt);
    document.getElementById(id).appendChild(x);
    // function to draw specific image for option chosen by user and pc

}
// I got this from https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeChild(id) {
    let identity = document.getElementById(id);
    while (identity.firstChild) {
        identity.removeChild(identity.firstChild);
        // function to remove given child nodes from above identity
    }
}

// console.log("the user choice is " + user);
// console.log("the randnum is " + randnum);
// console.log("the computer choice is " + cpu);

function compare() {
    let cpu = cpuChoice();
    // removeChild("player");
    // removeChild("cpu");
    if (user == "rock") {
        drawImg("_images/rock_emoji.png", "150", "150", "rock", "player");
    }
    if (user == "paper") {
        drawImg("_images/paper2.png", "150", "150", "paper", "player");
    }
    if (user == "scissors") {
        drawImg("_images/scissors2.png", "150", "150", "scissors", "player");
    } 
    if (cpu == "rock") {
        drawImg("_images/rock_emoji.png", "150", "150", "rock", "cpu");
    }
    if (cpu == "paper") {
        drawImg("_images/paper2.png", "150", "150", "paper", "cpu");
    }
    if (cpu == "scissors") {
        drawImg("_images/scissors2.png", "150", "150", "scissors", "cpu");
    }
    // main function to determine conditions of winning/losing
    // creates if else statement based on what user and cpu choose - drawing img accordingly
    if ((user == "rock" && cpu == "scissors") ||
        (user == "paper" && cpu == "rock") ||
        (user == "scissors" && cpu == "paper")) {
        console.log("user wins the game...");
        score = score + 1;
    } else if (cpu == "rock" && user == "scissors" ||
        cpu == "paper" && user == "rock" ||
        cpu == "scissors" && user == "paper") {
        console.log("user loses the game...");
    } else if (cpu == user) {
        console.log("tie game...");
    } else {
        console.log("something went wrong");
    }
    // creates if else statements stating conditions for comparison between waht user and and what cpu chooses
    // console.log's given condition based on decision (tie, win, loss)
}










// function diceRoll(sides){
//     let numsides = parseInt(sides);
//     let outcome = Math.floor(Math.random()*numsides);
//     alert("Your " + sides + " sided die rolled a " + outcome);
// }

// function getInputValue() {
//     // Selecting the input element and get its value 
//     let inputVal = document.getElementById("inputId").value;
//     // Displaying the value
//     alert(inputVal);
// }