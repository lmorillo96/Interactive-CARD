import { handleInputForm } from "./js/input_information.js";
//import { validateInputName } from "./js/validation.js";

const variableDisponibleEnTodoEsteArchivo = true;
const inputs = document.querySelectorAll("input");
const button = document.querySelector(".btn");

inputs.forEach((input) => input.addEventListener("keyup", handleInputForm));

button.addEventListener("click", callbackButtonClick);

function callbackButtonClick(e) {
  // e.preventDefault(); // ✅ aquí sí está correcto
  // validateInputName();
} 


// qué, cómo, cuando, dónde

// 1. qué input card holder name
const cardHolderName = document.querySelector("#cardHolderName");

// 2. cuando
cardHolderName.addEventListener("keyup", callbackCardHolderNameKeyUp);

// 3. cómo
function callbackCardHolderNameKeyUp() {
  const nameValue = cardHolderName.value;

  // si NO cumple, y hay un numero, lo quitamos
  if (! onlyUpperLettersAndSpaces(nameValue)) { // block scope
    cardHolderName.value = cardHolderName.value.slice(0, -1);
  }
}

function onlyLettersAndSpaces(str) {
  variableDisponibleEnTodoEsteArchivo
  age
  return /^[A-Za-z\s]*$/.test(str);
}

function onlyUpperLettersAndSpaces(str) {
  return /^[A-Z\s]*$/.test(str);
}
