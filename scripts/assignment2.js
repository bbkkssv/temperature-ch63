function convertToFahrenheit(){
    let celsius = prompt("Enter temperature in Celsius:");
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("temperature").innerHTML += `<li>${celsius}°C is ${fahrenheit}°F</li>`;
}