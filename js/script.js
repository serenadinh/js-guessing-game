//GUESSING GAME 

// 1. random number from 0-100

// 2. take player's input 

// 3. compare player's input to random number

// 4. give hints 

// 5. 10 tries
var playerInput = document.getElementById('player-input')
var btn = document.getElementById('btn')
function guessGame() {
	console.log(randomNum)
	console.log(playerInput.value)
	if (playerInput.value < randomNum) {
		console.log("Guess Higher")
	}	else if (playerInput.value > randomNum) {
		console.log("Guess Lower")
	}	else {
		console.log ("You got it!")
	}
}
var randomNum = Math.floor(Math.random()*100)
btn.addEventListener("click", guessGame)

