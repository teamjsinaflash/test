// Requirements:
// It should have a way to add a flashcard
// It should have a way to display a flashcard
// It should have a way to delete a flashcard

let flashcardObject = {
	cards: [{front: "The front text", back: "The back text"}],
	addCard: function(frontText, backText){
		this.cards.push({front: frontText, back: backText});
		this.displayCard();
	},
	displayCard: function(){
		console.log(this.cards);
	},
	deleteCard: function(position){
		this.cards.splice(position, 1);
		this.displayCard();
	}
}

function myFunction(){
	let question = document.getElementById("question").value;
	let answer = document.getElementById("answer").value;


	let fragment = document.createDocumentFragment();

	let flipContainer = document.createElement("div");
	flipContainer.className = "flip-container";

	let flashcard = document.createElement("div");
	flashcard.className = "flashcard";

	let newCardFront = document.createElement("div");
	newCardFront.className = "front-inner";
	newCardFront.innerHTML = question;

	let newCardBack = document.createElement("div");
	newCardBack.className = "back-inner";
	newCardBack.innerHTML = answer;

	flipContainer.appendChild(flashcard);

	flashcard.appendChild(newCardFront);
	flashcard.appendChild(newCardBack);


	fragment.appendChild(flipContainer);

	document.querySelector(".flex-container").appendChild(fragment);

}