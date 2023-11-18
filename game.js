let player1Score = document.getElementById("score1")
let compScore = document.getElementById("score2")

let player_hand = document.getElementById("player-hand")
let computer_hand = document.getElementById("computer-hand")

let rockbutton = document.getElementById("rockbutton")
let paperbutton = document.getElementById("paperbutton")
let scissorsbutton = document.getElementById("scissorsbutton")

let gameover = document.getElementById("gameover")
let winOrLoss = document.getElementById("winOrLoss")

let playAgain = document.getElementById("playAgain")

let rock = 'assets/rock-hand.png'
let paper = 'assets/paper-hand.png'
let scissor = 'assets/scissors-hand.png'

let playerScore = 0
let ComputerSocre = 0

let random = [rock,paper,scissor]
let player ;
let computer;

function computerHand(){
    let randomHand = random[Math.floor(Math.random()*random.length)];
    computer_hand.src= randomHand
    computer = randomHand
}
rockbutton.onclick =()=>{
    player_hand.src = rock;
    player = rock
    computerHand()
    Compare()
    
}
paperbutton.onclick =()=>{
    player_hand.src = paper;
    player = paper
    computerHand()
    Compare()
}
scissorsbutton.onclick=()=>{
    player_hand.src = scissor
    player = scissor
    computerHand()
    Compare()
}
function Compare(){
    if(player == rock && computer== scissor){
        playerScore++;
    }
    else if(player==rock && computer== paper ){
        ComputerSocre++
        
    }
    if(player==paper && computer== rock ){
        playerScore++
        
    }
    else if(player==paper && computer== scissor ){
        ComputerSocre++
     
    }
    if(player==scissor && computer== paper ){
        playerScore++
       
    }
    else if(player==scissor && computer== rock ){
        ComputerSocre++
        
    }
    player1Score.innerText = playerScore
    compScore.innerText = ComputerSocre
    if(playerScore == 5){
        gameover.style.display = 'block'
        winOrLoss.innerText = 'You won the game'
        location.href = "#gameover"
    }
    else if(ComputerSocre == 5){
        gameover.style.display = 'block'
        winOrLoss.innerText = 'Computer won the game'
        location.href = "#gameover"
    }
}
playAgain.onclick=()=>{
    location.reload()

}