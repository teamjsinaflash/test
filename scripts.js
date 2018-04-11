// Requirements:
// Show the front and back of the flashcard @jeroen
// It should have a way to delete a flashcard @sue
// Update the flashcard and the array 
// Flashcards should go onto the next row if there's no more room @sue
// part 2 - move the Editing using index to the card itself


let flashcardList = {
	cards: [],
	addCard: function(){
		var frontText = document.getElementById("question").value;
		document.getElementById("question").value = "";
		var backText = document.getElementById("answer").value;
		document.getElementById("answer").value = "";
		this.cards.push({front: frontText, 
			back: backText});
		flashcardList.displayCard();
	},
	displayCard: function() {
		let flexContainer = document.getElementById('flex-container');
		let totalCards = flashcardList.cards.length;

		for (var i = 0; i < totalCards; i++){
			let flashcard = document.createElement("li");
			flexContainer.appendChild(flashcard);

			// display newCardFront
			let newCardFront = document.createElement("div");
			newCardFront.className = "front-inner";
			newCardFront.textContent = flashcardList.cards[i].front;
			flashcard.appendChild(newCardFront);

			// display newCardBack
			let newCardBack = document.createElement("div");
			newCardBack.className = "back-inner";
			newCardBack.textContent = flashcardList.cards[i].back;
			flashcard.appendChild(newCardBack);

			// create a delete button
			let deleteButton = document.createElement("button");
			deleteButton.innerHTML = "delete";
			deleteButton.className = "deleteButton";
			deleteButton.addEventListener("click", function(event) {
      var elementClicked = event.target;
      console.log(elementClicked);
      if (elementClicked.className === "deleteButton") {
        var listItem=this.parentNode;
				var ul =listItem.parentNode;
				ul.removeChild(listItem);
      }    
    });
			flashcard.appendChild(deleteButton);
		}
	},		
	updateCard: function(){
		// input field for the index of the card
		// update the card based on the value of the input fields
	}
};










