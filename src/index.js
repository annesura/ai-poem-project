function generatePoem(event) {
    event.preventDefault();

    let userTopic = document.querySelector("#user-topic");
    let apiKey = "0cca9cddf1f4t4bb307e8bfo1fa213f2";
    let context = `You are a poetic AI assistant that loves to share four lined poems. Please write the response in basic HTML paragraphs with ONLY four lines of code`;
    let prompt = `Generate a short and sweet poem about ${userTopic.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(apiUrl).then(displayPoem);
    
    console.log("generating poem...");
}

function displayPoem(response) {
console.log("poem generated");

 new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);

