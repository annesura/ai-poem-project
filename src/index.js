function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "Dainty petals, fancy flair",
        autoStart: true,
        delay: 1,
      });
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);