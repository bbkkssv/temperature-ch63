// convert temperature
function convertTemperature(temp, scale) {
  if (scale === "C") {
    return (temp * 9/5) + 32;
  } else if (scale === "F") {
    return (temp - 32) * 5/9;
  }
}

// Celsius to Fahrenheit
function convertCelsiusToFahrenheit() {
  let temp = prompt("Enter temperature in Celsius:");
  let fahrenheit = convertTemperature(temp, "C");
  
  document.getElementById("result").innerHTML = temp + "°C = " + fahrenheit.toFixed(2) + "°F";
  
  fillThermometer(temp);
}

// Fahrenheit to Celsius
function convertFahrenheitToCelsius() {
  let temp = prompt("Enter temperature in Fahrenheit:");
  let celsius = convertTemperature(temp, "F");
  
  document.getElementById("result").innerHTML = temp + "°F = " + celsius.toFixed(2) + "°C";
  
  fillThermometer(celsius);
}

// Fill thermometer
function fillThermometer(celsius) {
  let thermo = document.getElementById("thermo");
  thermo.innerHTML = "";
  
  for (let i = 0; i < 10; i++) {
    let level = document.createElement("div");
    level.classList.add("level");
    
    if (celsius <= 10) {
      level.style.backgroundColor = "blue";
    } else if (celsius > 10 && celsius <= 25) {
      level.style.backgroundColor = "orange";
    } else if (celsius > 25) {
      level.style.backgroundColor = "red";
    }
    
    thermo.appendChild(level);
  }
}

// conversion table
function generateTable() {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  
  for (let celsius = 0; celsius <= 100; celsius += 10) {
    let fahrenheit = (celsius * 9/5) + 32;
    
    tableBody.innerHTML += `
      <tr>
        <td>${celsius}°C</td>
        <td>${fahrenheit.toFixed(2)}°F</td>
      </tr>
    `;
  }
}
