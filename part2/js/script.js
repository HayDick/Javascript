//chalange 1: age in days

function ageInDays() {
  //get year
  let d = new Date();
  let n = d.getFullYear();

  let birthYear = prompt("what year were you born?");
  let days = (n - birthYear) * 365;

  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode("you are " + days + " days old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

//chalange 1: Generate cat

function generateCat() {
  let image = document.createElement("img");
  let div = document.getElementById("flex-cat-gen");
  image.src = "https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif";
  image.setAttribute("class", "img");
  div.appendChild(image);
}

//chalange 1: rock paper scissors
function rpsGame(yourChoice) {
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  console.log("human choice: ", humanChoice);

  botChoice = numToChoice(randToInt());
  console.log("computer choice: ", botChoice);

  result = decideWinner(humanChoice, botChoice);
  console.log(result);

  messege = finalMessege(result);
  console.log(messege);
  rpsFrontend(yourChoice.id, botChoice, messege);
}

function randToInt() {
  return Math.floor(Math.random() * 3);
}

function numToChoice(num) {
  return ["rock", "paper", "scissors"][num];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 }
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessege([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { messege: "you lost", color: "red" };
  } else if (yourScore === 0.5) {
    return { messege: "it is a tie", color: "red" };
  } else {
    return { messege: "you won!", color: "green" };
  }
}

function rpsFrontend(humanImage, botImage, finalMessege) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messegeDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" + imageDatabase[humanImage] + "' height=150 width=150 style=>";
  messegeDiv.innerHTML =
    "<h1 style='color: " +
    finalMessege.color +
    ";font-size: 40px; padding: 30px;'>" +
    finalMessege.messege +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" + imageDatabase[botImage] + "' height=150 width=150 style=>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messegeDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}
