// reset function
function reset() {
  document.getElementById("input").value = "";
  document.getElementById("Output").value = "";
}

// Function to find length
function findLength() {
  let inputValue = document.getElementById("input").value.trim();

  if (inputValue !== "") {
    let length = inputValue.length;
    document.getElementById("Output").value = `Length: ${length}`;
    // console.log(length);
  } else {
    alert("⚠️ Please enter some text!");
  }
}

// Function replace
function replaceString() {
  let inputValue = document.getElementById("input").value.trim();
  let oldWord = prompt("Enter the word you want to replace:");
  let newWord = prompt("Enter the new word:");

  if (inputValue !== "" && oldWord && newWord) {
    let replaced = inputValue.replace(new RegExp(oldWord, "g"), newWord);
    document.getElementById("Output").value = replaced;
  } else {
    alert("⚠️ Please enter valid text and words!");
  }
}

// function lastIndexof
function lastIndex() {
  let inputText = document.getElementById("input").value.trim();
  let searchWord = prompt("Enter the text to find lastIndexoOf: ").trim();

  if (inputText === "" || searchWord === "") {
    alert("⚠️ Please enter both text and a word to search!");
    return;
  }

  let lastIndex = inputText.lastIndexOf(searchWord);

  if (lastIndex !== -1) {
    document.getElementById("Output").value = `Last index of '${searchWord}' is : ${lastIndex}`;
  } else {
    document.getElementById("Output").value = `"${searchWord}" not found in the text.`;
  }
}

// Function startsWith
function StartsWithText() {
  let inputText = document.getElementById("input").value.trim();
  let searchText = prompt("Enter the text to check if it starts with:");

  if (inputText !== "" && searchText !== null) {
      let result = inputText.startsWith(searchText);
      document.getElementById("Output").value = `Starts with "${searchText}"? : ${result}`;
  } else {
      alert("⚠️ Please enter valid text!");
  }
}


//funcftion uppercase
function upperCase() {
  let inputText = document.getElementById("input").value.trim();

  if (inputText !== "") {
    let upperCaseText = inputText.toUpperCase();
    document.getElementById("Output").value = `${upperCaseText}`;
  } else {
    alert("⚠️ Please enter some text!");
  }
}

//funcftion lowercase
function lowerCase() {
  let inputText = document.getElementById("input").value.trim();

  if (inputText !== "") {
    let lowerCaseText = inputText.toLowerCase();
    document.getElementById("Output").value = `${lowerCaseText}`;
  } else {
    alert("⚠️ Please enter some text!");
  }
}

//function repeat
function repeatText() {
  let inputText = document.getElementById("input").value.trim();
  let repeatCount = prompt("Enter how many times to repeat the text:");

  repeatCount = parseInt(repeatCount);

  if (inputText !== "" && !isNaN(repeatCount) && repeatCount >= 0) {
    let repeatedText = inputText.repeat(repeatCount);
    document.getElementById("Output").value = `${repeatedText}`;
  } else {
    alert("⚠️ Please enter a valid number (0 or positive)!");
  }
}

// Function to match text
function matchText() {
  let inputText = document.getElementById("input").value.trim();
  let matchtext = prompt("Enter the text to match with:").trim();

  if (inputText !== "" && matchtext !== "") {
    let regex = new RegExp(matchtext, "gi");
    let matchedText = inputText.match(regex);

    if (matchedText) {
      document.getElementById("Output").value = `${matchedText.join(", ")}`;
    } else {
      document.getElementById("Output").value = "No match found!";
    }
  } else {
    alert("⚠️ Please enter valid text to match.");
  }
}

//function concat
function concatText() {
  let inputText = document.getElementById("input").value.trim();
  let additionalText = prompt("Enter the text to concatenate:");

  if (inputText !== "" && additionalText !== "") {
    let result = inputText.concat(" ", additionalText);
    document.getElementById("Output").value = `${result}`;
  } else {
    alert("⚠️ Please enter valid text!");
  }
}

//function split
function splitText() {
  let inputText = document.getElementById("input").value.trim();
  let separator = prompt("Enter a separator (e.g., space, comma, dash):");

  if (inputText !== "" && separator !== null) {
    let splitArray = inputText.split(separator);
    document.getElementById("Output").value = `${splitArray.join(" | ")}`;
  } else {
    alert("⚠️ Please enter valid text and separator!");
  }
}

//function trim
function trimText(){
    let inputText= document.getElementById("input").value.trim();
    if(inputText!== ""){
        let trimmedText= inputText.trim();
        document.getElementById("Output").value= `${trimmedText}`;
    }
    else{
        alert("⚠️ Please enter the text before using trim")
    }
}

//function slice
function sliceText() {
    let inputText = document.getElementById("input").value.trim();

    if (inputText !== "") {
        let start = parseInt(prompt("Enter the start index:"));
        let end = prompt("Enter the end index (optional, leave empty for full slice):");

        // Convert 'end' to a number if provided, otherwise use 'undefined' to slice till end
        end = end === "" ? undefined : parseInt(end);

        if (!isNaN(start)) {
            let slicedText = inputText.slice(start, end);
            document.getElementById("Output").value = `Sliced: ${slicedText}`;
        } else {
            alert("⚠️ Please enter a valid number for the start index.");
        }
    } else {
        alert("⚠️ Please enter text before using slice!");
    }
} 