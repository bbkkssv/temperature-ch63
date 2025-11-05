console.log("Hello, world!");

console.log("functions");

// function declaration (create)
function sayHello(){
  console.log("Welcome to Angry Birds!");
}

// call/run/trigger/execute the fn
sayHello;
sayHello();

function greetBird(birdName){
    console.log(`Hello, ${birdName}!`);}

    greetBird("Red");
    greetBird("Chuck");
    greetBird("Bomb");

    //example 3

    function greetPlayer(firstName, lastName){
        console.log(`Welcome, ${firstName} ${lastName}, to the game!`);
    }

    greetPlayer("Lara", "Croft");
    greetPlayer("Master", "Chief");


    function doubleScore(score) {
  console.log(score * 2);
}


doubleScore(10); 
doubleScore(25); 

function askPigName(){
  let pigName = prompt("Enter Pig's name");
  console.log(`Target: ${pigName}`)
}

//askPigName();

function addPoints(points1, points2){
  let total = points1 + points2;
  console.log(`Total points earned: ${total} `);
}

addPoints(100,200);
addPoints(0,20);
addPoints(50,100);


//function convertToSeconds(minutes) {
  //let seconds = minutes * 60;
//  console.log(`${minutes} minute(s) = ${seconds} second(s)`);
//}

//convertToSeconds(1);
//convertToSeconds(5);
//convertToSeconds(10);


function convertToSeconds() {
  let minutes = prompt("Enter minutes to convert to seconds:");
  let seconds = minutes * 60;
  console.log(`${minutes} minute(s) = ${seconds} second(s)`);
}



// dynamic function
function convertToSeconds(){
    let mins = prompt("Enter the mins: ");//the user will input mins
    let secs = mins * 60; //. calculates the secs
    document.getElementById("result").innerHTML += `<li>${mins} minutes are ${secs}s</li>`; // display/print
}