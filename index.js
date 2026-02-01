/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputValue = 0;

// Selectors
const inputEl = document.getElementById("text-input")
const lengthEl = document.getElementById("length-conversion")
const volumeEl = document.getElementById("volume-conversion")
const massEl = document.getElementById("mass-conversion")

const btnEl = document.getElementById("btn")


// Listening for change in input value
inputEl.addEventListener("input", function (e) {
    inputValue = e.target.value;
})



// Click Event Listener on Button
btnEl.addEventListener("click", function () {

    lengthEl.textContent = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`
    volumeEl.textContent = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`
    massEl.textContent = `${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`
})

