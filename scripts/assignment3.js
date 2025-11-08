function convertTemperature(temperature, scale) {
  if (scale === "C") {
    // Convert Celsius to Fahrenheit
    let fahrenheit = (temperature * 9/5) + 32;
    return fahrenheit;
  } else if (scale === "F") {
    // Convert Fahrenheit to Celsius
    let celsius = (temperature - 32) * 5/9;
    return celsius;
  }
}

function temperatureConverter() {
  let temp = prompt("Enter the temperature:");
  let scale = prompt("Enter C for Celsius or F for Fahrenheit:").toUpperCase(); // Convert to uppercase to handle lowercase input
  
  let result = convertTemperature(temp, scale);
  
  let resultDiv = document.getElementById("results");
  
  // Setting the result color based on temp.
  if (scale === "C") {
    resultDiv.innerHTML = temp + "°C = " + result + "°F";
    if (result > 80) {
      resultDiv.classList.add("hot");
    } else if (result < 50) {
      resultDiv.classList.add("cold");
    }
  } else if (scale === "F") {
    resultDiv.innerHTML = temp + "°F = " + result + "°C";
    if (result > 25) {
      resultDiv.classList.add("hot");
    } else if (result < 10) {
      resultDiv.classList.add("cold");
    }
  }
  else {
    resultDiv.innerHTML = "Invalid scale, try again";
  }
}
