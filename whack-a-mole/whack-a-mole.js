// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
var numOfMoles = 0;
var score = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Setup cellsArray 
function getCellsArray() {
  var arr = [];
  for (i = 0; i < document.getElementById("mole-table").rows.length; i++) {
    arr.push(document.getElementById("mole-table").rows[i].cells);

  }
  return arr
}

function showMole(cell) {
  var img = document.createElement("img");
  img.src = "mole.png";
  img.classList.add("mole");
  cell.onclick = moleClicked;
  cell.appendChild(img);
}

function showBomb(cell) {
  var img = document.createElement("img");
  img.src = "bomb.png";
  img.classList.add("bomb");
  cell.onclick = bombClicked;
  cell.appendChild(img);
}

var moleClicked = function () {
  hideMole(this);
  score++;
  updateStats();
};

var bombClicked = function () {
  explodeBomb(this);
  score--;
  updateStats();
};

function updateStats() {
  document.getElementById("score").textContent = ("Score: " + score);
}

function hideMole(cell) {
  cell.onclick = null;
  cell.removeChild(cell.firstChild);


  // play sound 
  var snd = new Audio("bonk-audio.mp3");
  snd.play();

  numOfMoles--;
  console.log("New num of moles: " + numOfMoles);
  if (numOfMoles == 0) {
    newStage();
  }
}

function explodeBomb(cell) {
  cell.onclick = null;
  cell.removeChild(cell.firstChild);


  // play sound 
  var snd = new Audio("bomb-audio.wav");
  snd.play();


}


// Pick a random index 
function newMole() {
  var randomRow = cellsArray[getRandomInt(0, cellsArray.length)];
  var randomCell = randomRow[getRandomInt(0, randomRow.length)];

  if (randomCell.childNodes.length != 0) {
    console.log("Failed to place mole, trying again...");
    newMole();
  }
  else {
    showMole(randomCell);
  }
}

function newBomb() {
  var randomRow = cellsArray[getRandomInt(0, cellsArray.length)];
  var randomCell = randomRow[getRandomInt(0, randomRow.length)];

  if (randomCell.childNodes.length != 0) {
    console.log("Failed to place mole, trying again...");
    newBomb();
  }
  else {
    showBomb(randomCell);
  }
}

function newStage() {

  console.log("adding new stage")

  numOfMoles = getRandomInt(1, 4);
  for (i = 0; i < numOfMoles; i++) {
    newMole();
  }

  // clear previous bombs
  document.querySelectorAll('.bomb').forEach(e => e.remove());


  numOfBombs = getRandomInt(1, 4); {
    for (i = 0; i < numOfMoles; i++) {
      newBomb();
    }
  }

}


var cellsArray = getCellsArray();
newStage();



