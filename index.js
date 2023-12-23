const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge (){
    let x = getAge()
    resultEl.innerHTML = `Your age is ${x} Y.O`
}

function getAge(){
    let currentDate = new Date()
    let birthDate = new Date(birthdayEl.value)
    let age = currentDate.getFullYear() - birthDate.getFullYear()
    let month = currentDate.getMonth() - birthDate.getMonth()
    if(month < 0 || (month === 0 && currentDate.getDay() < birthDate.getDate())){
        age--
    } 
    return age
}
btnEl.addEventListener("click", calculateAge)


console.log('hi');
const  getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === "rock" ||userInput === "paper" || userInput ==="scissors"){
    return userInput
  } else {
    console.log("error")
  }
}

function getComputerChoice (){
    let num = Math.floor(Math.random() * 3);
    if(num == 0){
      return "rock"
    } else if (num == 1){
      return "paper"
    } else {
      return "scissors"
    }}

function determineWinner  (userChoice, computerChoice){
  if(userChoice === computerChoice){
    console.log("it's a tie")
  } else if(userChoice === "rock"){
    if(computerChoice === "paper"){
      console.log("the computer won")
    } else {
      console.log("the user won")
    }
  } 
}


const countries = ['Japan', 'Denmark', 'Mexico', 'Morocco'];
countries.shift();
console.log(countries); 
countries =  ['England', 'Mozambique', 'Cambodia', 'Peru']; 
console.log(countries); 