// Counter JS Code using different functions

const counterIncremenet = document.getElementById("counter-increment");
const counterDecrement = document.getElementById("counter-decrement");
const counterReset = document.getElementById("counter-reset");
const counterValueContainer = document.getElementById(
  "counter-value-container"
);
let counter = counterValueContainer.textContent;

// Increment function
counterIncremenet.addEventListener("click", () => {
  counter = +counter + 1;
  counterValueContainer.textContent = counter;
  console.log(counter);
});

// Decrement Function
counterDecrement.addEventListener("click", () => {
  counter = +counter - 1;
  counterValueContainer.textContent = counter;
  console.log(counter);
});

// Reset Function
counterReset.addEventListener("click", () => {
  counter = 0;
  counterValueContainer.textContent = counter;
  console.log(counter);
});

// -----------------------------------------

// Counter JS Code using different functions

const counterValue = document.getElementById("counterValue");
const counterButton = document.querySelectorAll(".counterButton");

// Question Number 2---------------------------
// Timer Decrease Value Code
const timerValue = document.getElementById("timerValue");
const timerDecrease = document.getElementById("timerDecrease");
const timerReset = document.getElementById("timerReset");
const timerIncrease = document.getElementById('timerIncrease');
const timerStop = document.getElementById('timerStop');
let intervalId;

let timerDecreaseFunction = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    let timerCurrentValue = timerValue.textContent;
    // console.log(timerCurrentValue);
    timerValue.textContent = +timerCurrentValue - 1;
  }, 1000);
};

let timerIncreaseFunction = () => {
  if (intervalId) {
    clearInterval(intervalId);
  } 
  intervalId = setInterval(() => {
    let timerCurrentValue = timerValue.textContent;
    // console.log(timerCurrentValue);
    timerValue.textContent = +timerCurrentValue + 1;
  }, 1000);
};

timerIncrease.addEventListener('click', timerIncreaseFunction)
timerDecrease.addEventListener("click", timerDecreaseFunction);
timerReset.addEventListener("click", () => {
  clearInterval(intervalId);
  timerValue.textContent = 0;
});
timerStop.addEventListener('click', () => {
  clearInterval(intervalId);
})

// Question Number 3-----------------------------------
// Deligated Value
const deligatedValue = document.getElementById("deligatedValue");
const deligatedItemContainer = document.getElementById(
  "deligatedItemContainer"
);
const deligationButtonAdd = document.getElementById("deligationButtonAdd");
// console.log(deligatedItemContainer.children.length);

deligationButtonAdd.addEventListener("click", () => {
  let li = document.createElement("li");
  li.className = "deligatedItem";
  li.textContent = deligatedItemContainer.children.length + 1;
  deligatedItemContainer.appendChild(li);
});

deligatedItemContainer.addEventListener("click", (event) => {
  console.log(event.target.textContent);
  deligatedValue.textContent = event.target.textContent;
});

// Question Number 4---------------------------------------
// Form Data
const mainInputField = document.getElementById("mainInputField");
const peraToReplicateInput = document.getElementById("peraToReplicateInput");
const formSubmit = document.getElementById("formSubmit");
let inputData = "";

mainInputField.addEventListener("keydown", (event) => {
  if (event.key !== "Backspace") {
    inputData += event.key;
  } else {
    inputData = inputData.slice(0, inputData.length - 1);
  }

  peraToReplicateInput.textContent = inputData;

  console.log(inputData);
});

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  peraToReplicateInput.textContent = "No Content Here....";
  mainInputField.value = "";
  inputData = "";
});

// Question Number 5---------------------------------------
// Toggle Button Code
const toggleButton = document.getElementById("toggleButton");
const toggleContainer = document.getElementById("toggleContainer");

toggleButton.addEventListener("click", () => {
  if (toggleContainer.style.display !== "none") {
    toggleContainer.style.display = "none";
  } else {
    toggleContainer.style.display = "block";
  }
});

// Question Number 6-----------------------------------------------
// Propogation Logic
const outerContainer = document.getElementById("outerContainer");
const innerContainer = document.getElementById("innerContainer");
const mostInnerContainer = document.getElementById("mostInnerContainer");
const displayContainer = document.getElementById("displayContainer");

outerContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("outerClicked");
  displayContainer.textContent = "Outer Container";
});

innerContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("innerClicked");
  displayContainer.textContent = "Inner Container";
});

mostInnerContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("mostInnerClicked");
  displayContainer.textContent = "Most Inner Container";
});

// Question Number 7-------------------------------------------
// Add and Remove Paragraph from a list of paragraph
const addPara = document.getElementById("addPara");
const removePara = document.getElementById("removePara");
const paraCollectionContainer = document.getElementById(
  "paraCollectionContainer"
);

addPara.addEventListener("click", () => {
  const NewPara = document.createElement("p");
  NewPara.textContent = `Hello World ${
    paraCollectionContainer.children.length + 1
  }`;
  NewPara.id = `paraCollection${paraCollectionContainer.children.length}`;
  //   console.log(paraCollectionContainer.children.length);
  paraCollectionContainer.appendChild(NewPara);
  //   console.log(NewPara);
});

removePara.addEventListener("click", () => {
  if (paraCollectionContainer.children.length !== 0) {
    let removingIndex = paraCollectionContainer.children.length;
    let removedChild = document.getElementById(
      `paraCollection${removingIndex - 1}`
    );
    // console.log(`paraCollection${removingIndex - 1}`);
    paraCollectionContainer.removeChild(removedChild);
  }
});

// Question Number 8-----------------------------------------------
// setTimeout and setInterval
const colorChangingContainer = document.getElementById(
  "colorChangingContainer"
);
const stopColorChange = document.getElementById("stopColorChange");
const messageAfterFiveSec = document.getElementById("messageAfterFiveSec");

let colorArray = [
  "red",
  "blue",
  "green",
  "yelow",
  "orange",
  "gray",
  "black",
  "pink",
  "aqua",
  "purple",
];

let colorChangerInterId = setInterval(() => {
  let randomNumber = Math.floor(Math.random() * 9);
  colorChangingContainer.style.backgroundColor = colorArray[randomNumber];
//   console.log("working");
}, 5000);

stopColorChange.addEventListener("click", () => {
  clearInterval(colorChangerInterId);
});

setTimeout(() => {
  messageAfterFiveSec.style.display = "block";
}, 5000);

// Question Number 9---------------------------------------
// background color changer based on data-color attribute
const colorChangingContainer2 = document.getElementById(
  "colorChangingContainer2"
);
const colorChangingButton = document.querySelectorAll(".colorChangingButton");

colorChangingButton.forEach((element) => {
  element.addEventListener("click", (event) => {
    colorChangingContainer2.style.backgroundColor = event.target.getAttribute('data-color');
    // console.log(event.target.getAttribute('data-color'));
  });
});


// Question Number 10-----------------------------------------------
// Increase $ decrease font size by 2px 
const increaseFontSize = document.getElementById('increaseFontSize');
const decreaseFontSize = document.getElementById('decreaseFontSize');
const mainParagraphFont = document.getElementById('mainParagraphFont');
let currentFontSize = mainParagraphFont.style.fontSize;

increaseFontSize.addEventListener('click', () => {
    currentFontSize = mainParagraphFont.style.fontSize;
    console.log(+(currentFontSize.slice(0, -2)));
    mainParagraphFont.style.fontSize = `${+currentFontSize.slice(0, -2) + 2}px`;
})

decreaseFontSize.addEventListener('click', () => {
    currentFontSize = mainParagraphFont.style.fontSize;
    console.log(+(currentFontSize.slice(0, -2)));
    mainParagraphFont.style.fontSize = `${+currentFontSize.slice(0, -2) - 2}px`;
})

// Question Number 11--------------------------------------------------------
// Age validation form 
const ageInputField = document.getElementById('ageInputField');
const ageSubmitButton = document.getElementById('ageSubmitButton');
const validationMessage = document.getElementById('validationMessage');

ageSubmitButton.addEventListener('click', () => {
    let ageValue = +ageInputField.value;
    console.log(ageValue);
    if(ageValue > 0 && ageValue < 100) {
        // console.log('valid');
        validationMessage.textContent = "Valid Value";
    } else {
        validationMessage.textContent = "Invalid Value";
    }
    // console.log(ageValue);
})


// Question Number 12-----------------------------------------------------------
// New Para create when click on the button 
const paraToChangeWithNewOne = document.getElementById('paraToChangeWithNewOne');
const newParagraphButton = document.getElementById('newParagraphButton');

const paraToLookFor = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae quos corrupti ex expedita. Blanditiis, reprehenderit libero. Asperiores nobis beatae ea consequuntur accusantium ex laudantium autem, inventore in natus ipsam assumenda dolore doloremque magni provident vel maiores commodi voluptatibus atque. Recusandae corporis quae non nulla exercitationem illo ratione ullam voluptates cupiditate enim praesentium sed, officia mollitia deleniti corrupti dicta sunt ducimus. Consectetur dolore similique culpa facilis expedita id at doloremque architecto nam totam nulla voluptate, natus ipsam sapiente perspiciatis facere hic fuga! Facere veritatis ab est tempora voluptas quas blanditiis, quos distinctio praesentium, iure laudantium repellendus aut sed quidem corrupti!'

function randomParagraphGenerator() {
    let generatedPara = '';
    for (let i=0; i<10; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
        let newStingArray = paraToLookFor.split(' ');
        generatedPara = generatedPara + " " + newStingArray[randomNumber];
    }
    paraToChangeWithNewOne.textContent = generatedPara;
}

newParagraphButton.addEventListener('click', () => {
    randomParagraphGenerator();
})


// question number 13-----------------------------------------------
// code for adding items to a list
const itemContainerToAddItems = document.getElementById('itemContainerToAddItems');
const addItemButtonInContainer = document.getElementById('addItemButtonInContainer');
let itemCount = 0;

addItemButtonInContainer.addEventListener('click', () => {
    let newLi = document.createElement('li');
    newLi.textContent = `Item ${itemCount + 1}`;
    itemContainerToAddItems.appendChild(newLi);
    itemCount += 1;
})


// Question Number 14--------------------------------------------------
// Hide and Show the container by toggling there value 
const toggleContainerHideAndSeak = document.getElementById('toggleContainerHideAndSeak');
const hideToggleContainerHideAndSeak = document.getElementById('hideToggleContainerHideAndSeak');
const showToggleContainerHideAndSeak = document.getElementById('showToggleContainerHideAndSeak');

hideToggleContainerHideAndSeak.addEventListener('click', () => {
    toggleContainerHideAndSeak.style.visibility = 'hidden';
})

showToggleContainerHideAndSeak.addEventListener('click', () => {
    toggleContainerHideAndSeak.style.visibility = 'visible';
})


// Question Number 15 -------------------------------------
// Changin Color Based on Button 
const colorChangerBoxFor15 = document.getElementById('colorChangerBoxFor15');
const colorChangin15 = document.querySelectorAll('.colorChangin15');

colorChangin15.forEach((element) => {
    element.addEventListener('click', (event) => {
        console.log(event.target.textContent);
        colorChangerBoxFor15.style.backgroundColor = event.target.textContent.toLowerCase();
    });
})


