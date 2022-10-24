const inputs = document.querySelectorAll("input");
const button = document.querySelector(".btn");

inputs.forEach((input) => input.addEventListener("keyup", handleInputForm));


function handleInputForm (evento) {

  // evento = objecto de tipo KeyboardEvent
  // {key: value}
  // acceder a una propiedad de evento --> evento.key 
  const inputAttributeName = evento.target.name;
  const inputValue = evento.target.value;
  const cardName  = document.querySelector(".card-name")
  const cardNumber = document.querySelector(".card-number")

  if (inputAttributeName === 'name') {
    cardName.innerHTML = inputValue;

    if (!validateInputName(inputValue)) {
      evento.target.classList.add("input-error")
    } else {
      evento.target.classList.remove("input-error")
    }
  }

  if (inputAttributeName === 'number') {
    cardNumber.innerHTML = inputValue;
  }
}

function validateInputName (texto) {
  if (texto === "" || texto.length < 5)
    return false
  return true
}

button.addEventListener("click", (e) => {
  e.preventDefault(); // ✅ aquí sí está correcto
  console.log("Sumbit");
});