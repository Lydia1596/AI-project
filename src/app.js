function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Hello World",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
