function generatePoem(event) {
    event.preventDefault();

    let userTopic = document.querySelector("#user-topic");
    let poemDisplay = document.querySelector("#poem");
    let apiKey = "0cca9cddf1f4t4bb307e8bfo1fa213f2";
    let context = `You are a poetic AI assistant that loves to share poems. Please write the response in basic HTML, separating each line with <br /> and with ONLY four lines. Do not include any html elements in the display`;
    let prompt = `Generate a short and sweet poem about ${userTopic.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(apiUrl).then(displayPoem);
    poemDisplay.classList.remove("hidden");
    poemDisplay.innerHTML = `Generating your poem...`;
}

function displayPoem(response) {


new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);

