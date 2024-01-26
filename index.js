// initializing some values
// let totalAttempts = 5;
// let Attempts = 0;
// let totalWons = 0;
// let totalLosts = 0;

// finding elements
// const form = document.querySelector("form");
// const guessingNumber = form.querySelector("#guessingNumber");
// const checkButton = form.querySelector("#check");
// const cardBody = document.querySelector(".card-body");
// const resultText = cardBody.querySelector(".resultText");
// const remainingAttempts = cardBody.querySelector(".remainingAttempts");
// const lostWonMessage = document.createElement("p");

// form.addEventListener("submit", function () {
//   event.preventDefault();
//   let guessingNumber = console.log(guessingNumber.value);

// Attempts++;
// if (Attempts >= 6) {
//   guessingNumber.disabled = true;
//   checkButton.disabled = true;
// } else {
//   let guessNumber = Number(guessingNumber.value);
//   checkResult(guessNumber);
//   remainingAttempts.innerHTML = `Remaining Attempts${totalAttempts-Attempts}`
// }

// });

// function checkResult(guessingNumber) {
//   console.log(guessingNumber);
//   const randomNumber = getRandomNumber(5);
//   console.log(randomNumber);

//   if (guessingNumber == randomNumber) {
//     resultText.innerHTML = `Hurra ! You have won.`;
//     totalWons++;
//   } else {
//     resultText.innerHTML = `You have lost  ;   random number was : ${randomNumber}`;
//     totalLosts++;
//   }

//   lostWonMessage.innerHTML = `Won : ${totalWons}, Lost:${totalLosts}`;
//   lostWonMessage.classList.add("large-text");
//   cardBody.appendChild(lostWonMessage);
// }

// function getRandomNumber(limit) {
//   return Math.floor(Math.random() * limit) + 1;
// }


// =============================================================================
 