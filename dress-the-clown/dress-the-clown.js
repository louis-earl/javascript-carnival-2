// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

var headIndex = 0;
var bodyIndex = 0;
var shoesIndex = 0;
var bodyPartIndex = 0;

function changeClothingIndex(val) {

  var partName;
  var partIndex;
  var min = 0, max = 5
  if (val < 0) min = 5, max = 0;

  switch (bodyPartIndex) {
    case 0:
      partName = "head";

      if (headIndex == max) headIndex = min;
      else headIndex += val;

      partIndex = headIndex;
      break;
    case 1:
      partName = "body";

      if (bodyIndex == max) bodyIndex = min;
      else bodyIndex += val;

      partIndex = bodyIndex;
      break;
    case 2:
      partName = "shoes";

      if (shoesIndex == max) shoesIndex = min;
      else shoesIndex += val;

      partIndex = shoesIndex;
      break;
  }
  var partElement = document.getElementById(partName);
  partElement.src = "./images/" + partName + partIndex + ".png"
}


function changeBodyPartIndex(val) {
  var min = 0, max = 2;
  if (val < 0) min = 2, max = 0;

  if (bodyPartIndex == max) bodyPartIndex = min;
  else bodyPartIndex += val;
}


document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      // left
      changeClothingIndex(-1);
      break;
    case 38:
      // up
      changeBodyPartIndex(-1);
      break;
    case 39:
      // right
      changeClothingIndex(1);
      break;
    case 40:
      // down
      changeBodyPartIndex(1);
      break;
  }
  console.log("head: " + headIndex +
     " body: " + bodyIndex +
    " shoes :" + shoesIndex +
    " body part index: " + bodyPartIndex);
});

