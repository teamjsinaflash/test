// Requirements:
// Show the front and back of the flashcard @jeroen
// It should have a way to delete a flashcard @sue
// Update the flashcard and the array 
// Flashcards should go onto the next row if there's no more room @sue
// part 2 - move the Editing using index to the card itself

let flashcardList = {
	cards: [],
	addCard: function(){
		frontText = document.getElementById("question").value;
		document.getElementById("question").value = "";
		backText = document.getElementById("answer").value;
		document.getElementById("answer").value = "";
		console.log(frontText, backText);
		this.cards.push({front: frontText, back: backText});

		this.displayCard();
	},
	displayCard: function(){
		let flashcard = document.createElement("div");
		flashcard.className = "flashcard";

		let newCardFront = document.createElement("div");
		newCardFront.className = "front-inner";
		newCardFront.innerHTML = frontText;

		let newCardBack = document.createElement("div");
		newCardBack.className = "back-inner";
		newCardBack.classList.add("hidden");
		newCardBack.innerHTML = backText;

		let deleteButton = document.createElement("button");
		deleteButton.innerHTML = "delete";
		deleteButton.className = "deleteButton";
		deleteButton.onclick = function () {
			alert('hi!');
			debugger;
			flashcardList.cards.splice(0, 1);
			flashcardList.displayCard();
		}

		let flipButton = document.createElement("button");
		flipButton.innerHTML = "flip";
		flipButton.className = "flipButton";
		
		let flexContainer = document.querySelector(".flex-container");

		flashcard.appendChild(newCardFront);
		flashcard.appendChild(newCardBack);
		flashcard.appendChild(deleteButton);
		flashcard.appendChild(flipButton);

		flexContainer.appendChild(flashcard);
	},
	deleteCard: function(position){

		// delete the card the user clicked on
		// display the updated list of cards
	},
	updateCard: function(){
		// input field for the index of the card
		// update the card based on the value of the input fields
	}
}

function flipCard () {
	newCardBack.classList.remove("hidden");
}











