import { handleInputForm } from "./js/input_information.js";
import { validateInputName } from "./js/validation.js";

const inputs = document.querySelectorAll("input");
const button = document.querySelector(".btn");

inputs.forEach((input) => input.addEventListener("keyup", handleInputForm));

button.addEventListener("click", (e) => {
  e.preventDefault(); // ✅ aquí sí está correcto
});
