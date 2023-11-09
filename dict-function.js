//1. Create variables for user's input, the search button, and definition that will display
const inputElement = document.getElementById("searchInput");
const buttonElement = document.getElementById("searchButton");
const definitionsList = document.getElementById("definitionsList");
const notFoundMessage = document.getElementById("searchResult");


//2. Create objects to hold the word, its part of speech, and definition (array)
const allWords = [
    {
      word: "Yes",
      partOfSpeech: "Noun",
      definitions: [
        "Used to give an affirmative response.",
        "Used as a response to someone addressing one or otherwise trying to attract one's attention."
      ]
    },
    {
      word: "Panacea",
      partOfSpeech: "Noun",
      definitions: ["An answer or solution for all problems or difficulties."]
    },
    {
      word: "Concatenation",
      partOfSpeech: "Noun",
      definitions: ["A series of interconnected or interdependent things or events."]
    },
    {
      word: "Saw",
      partOfSpeech: "Verb",
      definitions: [
        "Cut (something) using a saw.",
        "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."
      ]
    },
    {
      word: "Found",
      partOfSpeech: "Adjective",
      definitions: [
        "Having been discovered by chance or unexpectedly.",
        "of a ship) Equipped; Supplied."
      ]
    },
    {
      word: "Crane",
      partOfSpeech: "Verb",
      definitions: [
        "Stretch out one's body or neck in order to see something.",
        "Move (a heavy object) with a crane."
      ]
    },
    {
      word: "Minute",
      partOfSpeech: "Noun",
      definitions: [
        "A period of time equal to sixty seconds or a sixtieth of an hour.",
        "A sixtieth of a degree of angular measurement (symbol: ʹ)"
      ]
    },
    {
      word: "Grotesque",
      partOfSpeech: "Adjective",
      definitions: ["Comically or repulsively ugly or distorted."]
    },
    {
      word: "Label",
      partOfSpeech: "Adjective",
      definitions: ["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
    },
    {
      word: "Debacle",
      partOfSpeech: "Noun",
      definitions: ["A sudden and ignominious failure; a fiasco."]
    }
  ];
    
    //3. This function will create a p element for the words's definition to be displayed in the screen
function createDefinitionElement (userWord){
  //This allows the words that are searched to not be case sensitive so the search bar can take "yes" or "Yes" without running into an issue
  const searchedWord = userWord.toLowerCase();
  const specificDefinition = findDefinition(searchedWord);

        
  if(specificDefinition){
    //This is creating a div element for the searched word
    const definitionElement = document.createElement("div")
    //This sets the class name for the definitionElement to be "definition"
    definitionElement.className = "definition";

    //This will display the searched word as a header the size of an h3 element and places it in the class definition
    const wordHeader = document.createElement("h3");
    // Set the word as the header text
    wordHeader.innerText = specificDefinition.word;
    //Puts wordHeader into definitionElement's class as child element 
    definitionElement.appendChild(wordHeader);

    const partOfSpeech = document.createElement ("p");
    partOfSpeech.innerText = specificDefinition.partOfSpeech;
    definitionElement.appendChild(partOfSpeech);

    //This creates a numbered list for the definitions when it displays
    const definitionsList = document.createElement("ol");

    specificDefinition.definitions.forEach(definition =>{
      //This creates the list item element for the definitions
      const listItem = document.createElement("li");
      //This takes the value of the definitions to put them as the list items
      listItem.innerText = definition;
      //This will take the listItem elements to put them as children of the definitionsList
      definitionsList.appendChild(listItem);
    });

    //This takes the definitionsList and all its children to make it part of the definitionElement    
    definitionElement.appendChild(definitionsList);

    //Once all this goes through, this will return the defintions to the word
    return definitionElement;
  }

  //If word searched does not have a definition in the array, then it will return null
  return null;
}

function findDefinition(userWord) {
  const lowercasedInput = userWord.toLowerCase();
    
  for (let i = 0; i < allWords.length; i++) {
    const specificDefinition = allWords[i];
    const lowercasedWord = specificDefinition.word.toLowerCase();
    
    if (lowercasedInput === lowercasedWord) {
      return specificDefinition;
    }
  }
    
  return null;
}

function searchButtonClicked() {
  const userWord = inputElement.value;
  const definitionElement = createDefinitionElement(userWord);

  //Clears the page so a new word can get searched
  definitionsList.innerHTML = "";

  if (definitionElement) {
    definitionsList.appendChild(definitionElement);
    notFoundMessage.style.display = "none";
  } 
  else {
    definitionsList.innerHTML = "";
    notFoundMessage.style.display = "block";
  }

}
    

//When user clicks the blue "add" button, their task will appear below.    
buttonElement.addEventListener("click", searchButtonClicked)