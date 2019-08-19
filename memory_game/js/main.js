// var cards = ["queen", "queen", "king", "king"];
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			console.log("You found a match!");
			alert("You found a match!");
		}
		else {
			console.log("Sorry, try again.");
			alert("Sorry, try again.");
		}
	}
}

function flipCard(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage)
	checkForMatch();
};

function createBoard(){
	for (var i = 0; i < cards.length; i++){
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

// flipCard(0);
// flipCard(2);

// var cardOne = cards[0];
// var cardTwo = cards[2];

// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);

