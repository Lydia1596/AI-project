function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  console.log(response.data.answer);
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "34f2a007t4073b7ac44010a0e7f0b6co";
  let prompt = `The instructions are to generate a poem about ${instructionsInput.value}`;
  let context =
    "Knowledgeable and creative AI assistant, please generate a 4 line poem in basic HTML format, font-size 14px and separate each line with a <br/>. Do not include a <br/> on the last line. Do not include a title to the poem. Make sure to follow the instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`Prompt: ${prompt}`);

  axios.get(apiURL).then(displayPoem);
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
