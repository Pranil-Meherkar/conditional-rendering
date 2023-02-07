const button = document.getElementById("customSwitches");
const textElement = document.getElementById("rendered-element");
textElement.innerHTML = button.checked? "ON": "OFF";

function updateText() {
    textElement.innerHTML = button.checked? "ON": "OFF";
}