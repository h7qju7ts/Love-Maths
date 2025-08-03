// WAIT FOR THE DOM TO FINISH LOADING BEFORE RUNNONG THE GAME
// GET THE BUTTON ELEMENTS AND ADD EVENT LISTENERS TO THEM
 document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            }else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
 })

 /**The mein game "loop", called when the script is first loaded
  * and after the user's answer has been processed
  */
function runGame() {
   let num1 = Math.floor(Math.random() * 25) + 1;
   let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScrore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubstractQuestion() {

}

function displayMutiplyQuestion() {

}
