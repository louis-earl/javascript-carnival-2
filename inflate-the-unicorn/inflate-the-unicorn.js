  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
var unicornStages = [0, 0, 0];


function inflate(index) {
  
  var element = document.getElementById("unicorn" + index);

  if (unicornStages[index] == 3) {
    unicornStages[index] = 0;
    alert("Unicorn Number " + (index + 1) +" says thank you!");
  }
  else {
    unicornStages[index]++;
  }

  element.src = "./images/unicorn-" + unicornStages[index] + ".png";

}
