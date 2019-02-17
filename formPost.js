function getText(){
     var y = document.getElementById("userSolution");
     var text = "";
     var i;
     for (i = 0;  i < y.length;  i++){
          text += y.elements[i].value; //+ "<br>";
     }
     if (text == "5"){
          console.log("the");
          var currentNumber = parseInt(document.getElementById("coinNumber"));
          console.log(currentNumber);
          var newNumber = currentNumber + 5;
          console.log(newNumber);
          var numberText = newNumber + " Gold";
          document.getElementById("coinNumber").innerHTML = newNumber;
          document.getElementById("coinCount").innerHTML = numberText;//newNumber + " Gold";
          document.getElementById("correctAnswer").innerHTML = "Correct!"
     }
     document.getElementById("result").innerHTML = "Your answer was: " + text;
}
