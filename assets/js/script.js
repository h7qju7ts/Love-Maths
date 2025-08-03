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

function runGame() {

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
