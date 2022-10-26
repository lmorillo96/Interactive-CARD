// Input name Validate

export function validateInputName(texto) {
  if ((texto = "")) {
    alert("Error: Input is Empty");
    return false;
  }

  if (texto.length <= 5) {
    alert("Error: Name too short");
    return false;
  }
  return true;
}

// Cardholder name Validation

/* export function nameValidation(inputName) {
  let regularExp = /^[\w ]+$/;

  if ((inputName.inputCardName.value = "")) {
    alert("Error: Input is Empty!");
    inputName.inputCardName.focus();
    return false;
  }

  if (!regularExp.test(inputName.inputCardName.value)) {
    alert("Error: Input contains invalid characters!");
    inputName.inputCardName.focus();
    return false;
  }

  return true;
}
 */
