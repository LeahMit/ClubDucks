function getText(){
     var y = document.getElementById("userSolution");
     var text = "";
     var i;
     for (i = 0;  i < y.length;  i++){
          text += y.elements[i].value; //+ "<br>";
     }
     if (text == "5"){
          console.log("the");
          var coinNumber = document.getElementById("coinNumber").textContent;
          //console.log(coinNumber);
          // console.log(coinNumber.elements[0]);
          // var currentNumber = coinNumber.elements[0].value;
          var newNumber = parseInt(coinNumber) + 5;
          console.log(newNumber);
          var numberText = newNumber + " Gold";
          document.getElementById("coinNumber").innerHTML = newNumber;
          document.getElementById("coinCount").innerHTML = numberText;//newNumber + " Gold";
          document.getElementById("correctAnswer").innerHTML = "Correct!";
     }
     else{
          document.getElementById("correctAnswer").innerHTML = "Incorrect";
     }
     document.getElementById("result").innerHTML = "Your answer was: " + text;
     return false;
}
