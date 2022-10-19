const blank = document.querySelectorAll("input");
const button = document.querySelector(".btn");

blank.forEach((label) => {
  label.addEventListener("keydown", (e) => {
    let codeValue = e.key;
    e.preventDefault();
    console.log("Su tecla presionada es " + codeValue);
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Sumbit");
});