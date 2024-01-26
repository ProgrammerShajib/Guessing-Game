// initializing some value
let totalAttempts = 5;
let Attempts = 0;
let totalWons = 0;
let totalLosts = 0;

// access/finding the element
const cardBody = document.querySelector(".card-body");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const lostWonMessage = document.createElement("p");

const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");

form.addEventListener("submit", function () {
  Attempts++;
  event.preventDefault();

  if (Attempts >= 6) {
    gueessNumber.disabled = true;
    checkButton.disabled = true;
  } else {
    console.log(guessingNumber.value);
    const gueessNumber = Number(guessingNumber.value);
    checkResult(gueessNumber);
    remainingAttempts.innerHTML = `Remaining attempts ${
      totalAttempts - Attempts
    }`;
  }
});

function checkResult(gueessNumber) {
  const RandomNumber = getRandomNumber(5);
  console.log(RandomNumber);
  if (gueessNumber == RandomNumber) {
    resultText.innerHTML = `Hurra! you have won.`;
    totalWons++;
  } else {
    resultText.innerHTML = `you have lost ; Random number was : ${RandomNumber}`;
    totalLosts++;
  }

  lostWonMessage.innerHTML = `Won :${totalWons} ,Lost :${totalLosts}`;
  lostWonMessage.classList.add("large-text");
  cardBody.appendChild(lostWonMessage);
}
function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
