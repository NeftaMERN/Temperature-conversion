
const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const resalt = document.getElementById("resalt");
let temp;

function convert() {

    if(toFahrenheit.checked){

        temp = Number(textbox.value)
        temp = temp * 9 / 5 + 32;

        resalt.textContent = temp.toFixed(1) + "°F";

    }

    else if(toCelsius.checked) {
        
        temp = Number(textbox.value)
        temp = temp - 32 * (5 / 9);


        resalt.textContent = temp.toFixed(1) + "°C";
    }

    else {
        resalt.textContent = "Select a unit"
    }

}