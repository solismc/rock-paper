


const playerOneRockButtonClick = () => {
  console.log('rock button is clicked')

document.querySelector('.answer-output').textContent = 'rock'

}
document.querySelector('.rock-button-player-one').addEventListener('click', playerOneRockButtonClick)

const playerOnePaperButtonClick = () => {
  console.log('paper button is clicked')
  
document.querySelector('.answer-output').textContent = 'paper'
}

document.querySelector('.paper-button-player-one').addEventListener('click', playerOnePaperButtonClick)

const playerOneScissorsButtonClick = () => {
  console.log('scissors button is clicked')

document.querySelector('.answer-output').textContent = 'scissors'
}

document.querySelector('.scissors-button-player-one').addEventListener('click', playerOneScissorsButtonClick)

const playerTwoRockButtonClick = () => {
  console.log('rock button is clicked')

document.querySelector('.player-two-output').textContent = 'rock'
}

document.querySelector('.rock-button-player-two').addEventListener('click', playerTwoRockButtonClick)

const playerTwoPaperButtonClick = () => {
  console.log('paper button is clicked')

document.querySelector('.player-two-output').textContent = 'paper'
}

document.querySelector('.paper-button-player-two').addEventListener('click', playerTwoPaperButtonClick)

const playerTwoScissorsButtonClick = () => {
  console.log('scissors button is clicked')

document.querySelector('.player-two-output').textContent = 'scissors'
}  

document.querySelector('.scissors-button-player-two').addEventListener('click', playerTwoScissorsButtonClick)

const playerOneNameButtonClick = () => {
  console.log('player name button is clicked')
  const playerOneName = document.querySelector('.player-name-one-input').value
  console.log(playerOneName)
  document.querySelector('.player-one-name-output').textContent = playerOneName
}
document.querySelector('.player-one-name-button').addEventListener('click', playerOneNameButtonClick)

const playerTwoNameButtonClick = () => {
  console.log('player name button is clicked')
  const playerTwoName = document.querySelector('.player-name-two-input').value
  console.log(playerTwoName)
  document.querySelector('.player-two-name-output').textContent = playerTwoName
}
document.querySelector('.player-two-name-button').addEventListener('click', playerTwoNameButtonClick)
