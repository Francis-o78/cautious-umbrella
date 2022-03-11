let myName = "Francis";
console.log(myName);

// this function logs a line of text in the browser
console.log("hello world!");
// console.log(myHeading);
// alert("welcome to the most obnoxious function in javascript...");
// var myHeading = document.querySelector('h1');
// let myHeading = document.querySelector('h1');

function init() {
    changeHeading();
    greeting();
}

function changeHeading() {
    let myHeading = document.querySelector('h1');
    myHeading = document.querySelector('h2');
    myHeading.textContent = 'Hello world!';
    // creates function to change top heading to "hello world"
}

function greeting() {
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";
    document.body.appendChild(para);
    // storing a creative element inside of a variable - the element = paragraph
}