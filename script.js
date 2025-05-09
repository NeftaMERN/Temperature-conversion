
const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const resalt = document.getElementById("resalt");

function convert() {

    if(toFahrenheit.checked){

        resalt.textContent = "You are selected to Fahrenheit"

    }

    else if(toCelsius.checked) {
        resalt.textContent = "You are selected to Celsius"
    }

    else {
        resalt.textContent = "Select a unit"
    }

}