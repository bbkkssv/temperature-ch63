console.log("If Statements");

let result = 50;

if(result > 40){
  console.log("You passed the exam");
}

let result2 = 50;

if(result == result2){
  console.log("Your values are the same");
}



result = 20;

if(result > 40){
  console.log("You passed the exam");
}else{
  console.log("You did NOT pass the exam");
}


let waterTemp = 105;
if(waterTemp >= 100){
    console.log("The water is boiling");
}else{
    console.log("The water is NOT boiling");
}


function ageCalculator(){
  let age = prompt("Enter your age: ");

  if(age < 13){
    console.log("You are a child");
  }else if(age < 21){
    console.log("You are a teenager");
  }else if(age < 64){
    console.log("You are an adult");
  }else{
    console.log("You are a senior");
  }
}

function bikeTrafficControl(){
  let lightColor = prompt("Enter the traffic light color (green, yellow, or red): ");

  if(lightColor == "green"){
    console.log("Go!");
  }else if(lightColor == "yellow"){
    console.log("Slow down");
  }else if(lightColor == "red"){
    console.log("Stop");
  }else{
    console.log("Invalid color. Please enter green, yellow, or red.");
  }
}


let userType = "Editor";

if (userType === "Admin") {
  console.log("You have access to all the system");
  document.write("Welcome Admin");
} else if (userType === "Editor") {
  console.log("You have access but limited actions");
  document.write("Welcome Editor");
} else {
  document.write("Error 404");
  console.log("You do not have access to the system");
}

// Switch-case
let paymentMethod = "wise";

switch (paymentMethod) {
  case "cash":
    console.log("you paid with cash");
    break;
  case "bitcoin":
    console.log("you paid with bitcoin");
    break;
  case "credit card":
    console.log("you paid with credit card");
    break;
  case "paypal":
    console.log("you paid with paypal");
    break;
  default:
    console.log("We can't process that payment method");
}





function weatherOutfit() {
  console.log("Weather outfit!");
  let tmp;
  const DIV = document.getElementById("results");

  // Remove any previous classes before applying new ones
  DIV.classList.remove("hot", "cold");

  tmp = prompt("Enter the temperature");

  if (tmp < 15) {
    DIV.classList.add("cold");
    DIV.innerHTML = "Jacket";
  } else if (tmp < 25) {
    DIV.innerHTML = "Sweater";
  } else {
    DIV.classList.add("hot");
    DIV.innerHTML = "T-shirt";
  }
}
