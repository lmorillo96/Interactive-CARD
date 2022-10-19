const blank = document.querySelectorAll("input");
const button = document.querySelector(".btn");

blank.forEach((label) => {
  label.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("me estás dando click");
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Sumbit");
});