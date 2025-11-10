console.log("Loops");

//for(let i = 0; i < 11; i++) {
  //console.log("This is loop iteration number: " + i);
//}

/*function multiTable(){
    for(let i=1;i<=10;i++){

        console.log(2 + " x " + i + " = " + (2*i));

    }
}

//multiTable();

for(let i=1;i<=100;i++){
    if(i==1){
        console.log("Gold Metal");
    }
    else if(i==2){
        console.log("Silver Metal");
    }
    else if(i==3){
        console.log("Bronze Metal");
    }
    else{
        console.log("Runner Number  " + i);
    }

}
    */

function fillThermo() {
  for (let i = 0; i < 10; i++) {
    let level = document.createElement("div");
    level.classList.add("level");
    console.log(level);

    if (i < 3) {
      level.style.backgroundColor = "red";
    }
    else if (i < 7) {
        level.style.backgroundColor = "orange";
    }
    else {
        level.style.backgroundColor = "blue";
    }

    document.getElementById("thermo").appendChild(level);
  }
}

function generateTable() {
  for (let celsius = 0; celsius < 10; celsius++) {
    let farenheit = (celsius * (9 / 5)) + 32;
    console.log(farenheit);

    document.getElementById("temps").innerHTML += `
      <tr>
        <td>${celsius}</td>
        <td>${farenheit}</td>
      </tr>
    `;
  }
}

generateTable();
