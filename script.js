const blank = document.querySelectorAll("input");
const button = document.querySelector(".btn");
const customerName = document.querySelector("#cardholder");

/* blank.forEach((label) => {
  label.addEventListener("keydown", (e) => {
    let codeValue = e.key;
    e.preventDefault();
    codeValue.textContent = "Hola";
  });
});
 */

button.addEventListener("click", (e) => {
  e.preventDefault();
  nameCard();
});

function nameCard() {
  let testArray = customerName.value.split("");
  let arr2 = [];

  for (let i = 0; i < testArray.length; i++) {
    //console.log(testArray[i]);

    if (testArray[i] === testArrayykujuk(new RegExp(/[a-z\s]+/))) {
      arr2.push(testArray);
    } else {
      console.log("Solo se permite letras!");
    }
  }
}
