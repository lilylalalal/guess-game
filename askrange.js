// import the readline module into our file
const readline = require("readline");
const { callbackify } = require("util");

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function randomInRange(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function checkGuess(secretNumber, inputnum) {
    let response = ''
 if (inputnum>secretNumber) {
   response =  'Too high.' 
   console.log(response)
   return false
 }
 
 else if (inputnum< secretNumber) {
    response =  'Too low.' 
    console.log(response)
   return false
 }else{
       response =  'You Won!' 
    console.log(response)
   return true
 }}

function askGuess(secretNumber, numAttempts){
  if (numAttempts <= 0) {
    console.log( 'you lose' )
    rl.close()
    return false

  }
  rl.question('Enter a guess: ', (guess) => {
//if (guess <= ansmax & guess >= ansmin) {
  //checkGuess(secretNumber,guess)
  if (checkGuess(secretNumber,guess) == false) {
     return askGuess(secretNumber, numAttempts-1)
  }
  else{
    rl.close()
  }})}


function askRange(){
    rl.question('Enter the number of rounds you would like to try: ',ans)
    
    }
  const ans = (round) => {
  let numAttempts= round
  rl.question('Enter a max number: ',(ansmax) => {
    rl.question('Enter a min number: ',(ansmin) =>{
    console.log(`I'm thinking of a number between ${ansmin} and  ${ansmax} ...` )
    let secretNumber = randomInRange(Number(ansmin), Number(ansmax))
    console.log(secretNumber)
    askGuess(secretNumber,numAttempts)
    
    })})}
  //let secretNumber = randomInRange(ansmin,ansmax)




askRange()
