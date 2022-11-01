export function handleInputForm(evento) {
  // evento = objecto de tipo KeyboardEvent
  // {key: value}
  // acceder a una propiedad de evento --> evento.key
  const inputAttributeName = evento.target.name;
  const inputValue = evento.target.value;
  const cardName = document.querySelector(".card-name");
  const cardNumber = document.querySelector(".card-number");
  const cardExpDateM = document.querySelector(".card-expM");
  const cardExpDateY = document.querySelector(".card-expY");
  const cardCvc = document.querySelector(".card-cvc");

  if (inputAttributeName === "name") {
    cardName.innerHTML = inputValue;

    if (!validateInputName(inputValue)) {
      evento.target.classList.add("input-error");
    } else {
      evento.target.classList.remove("input-error");
    }
  }

  if (inputAttributeName === "number") {
    cardNumber.innerHTML = inputValue;
  }

  if (inputAttributeName === "exp-dateM") {
    cardExpDateM.innerHTML = inputValue;
  }

  if (inputAttributeName === "exp-dateY") {
    cardExpDateY.innerHTML = inputValue;
  }

  if (inputAttributeName === "cvc") {
    cardCvc.innerHTML = inputValue;
  }
}

// Validación datos de Input


