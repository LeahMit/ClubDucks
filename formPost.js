function submitAnswer1(){
     var y = document.getElementById("userAnswer1");
     var text = "";
     var i;
     for (i = 0;  i < y.length;  i++){
          text += y.elements[i].value; //+ "<br>";
     }
     if (text == "5"){
          console.log("start");
          var coinNumber = document.getElementById("coinNumber").textContent;
          //console.log(coinNumber);
          // console.log(coinNumber.elements[0]);
          // var currentNumber = coinNumber.elements[0].value;
          var newNumber = parseInt(coinNumber) + 5;
          console.log(newNumber);
          var numberText = newNumber + " Coins";
          document.getElementById("coinNumber").innerHTML = newNumber;
          document.getElementById("coinCount").innerHTML = numberText;//newNumber + " Gold";
          document.getElementById("correctness1").style.color = "green";
          document.getElementById("correctness1").innerHTML = "Correct!";
     }
     else{
          document.getElementById("correctness1").style.color = "red";
          document.getElementById("correctness1").innerHTML = "Incorrect, try again";
     }
     document.getElementById("result1").innerHTML = "Your answer was: " + text;
     return false;
}


function submitAnswer2(){
     var y = document.getElementById("userAnswer2");
     var text = "";
     var i;
     for (i = 0;  i < y.length;  i++){
          text += y.elements[i].value; //+ "<br>";
     }
     if (text == "8"){
          console.log("start");
          var coinNumber = document.getElementById("coinNumber").textContent;
          //console.log(coinNumber);
          // console.log(coinNumber.elements[0]);
          // var currentNumber = coinNumber.elements[0].value;
          var newNumber = parseInt(coinNumber) + 5;
          console.log(newNumber);
          var numberText = newNumber + " Coins";
          document.getElementById("coinNumber").innerHTML = newNumber;
          document.getElementById("coinCount").innerHTML = numberText;//newNumber + " Gold";
          document.getElementById("correctness2").style.color = "green";
          document.getElementById("correctness2").innerHTML = "Correct!";
     }
     else{
          document.getElementById("correctness2").style.color = "red";
          document.getElementById("correctness2").innerHTML = "Incorrect, try again";
     }
     document.getElementById("result2").innerHTML = "Your answer was: " + text;
     return false;
}


function submitAnswer3(){
     var y = document.getElementById("userAnswer3");
     var text = "";
     var i;
     for (i = 0;  i < y.length;  i++){
          text += y.elements[i].value; //+ "<br>";
     }
     if (text == "False" || text == "false" || text == "f"){
          console.log("start");
          var coinNumber = document.getElementById("coinNumber").textContent;
          //console.log(coinNumber);
          // console.log(coinNumber.elements[0]);
          // var currentNumber = coinNumber.elements[0].value;
          var newNumber = parseInt(coinNumber) + 5;
          console.log(newNumber);
          var numberText = newNumber + " Coins";
          document.getElementById("coinNumber").innerHTML = newNumber;
          document.getElementById("coinCount").innerHTML = numberText;//newNumber + " Gold";
          document.getElementById("correctness3").style.color = "green";
          document.getElementById("correctness3").innerHTML = "Correct!";
     }
     else{
          document.getElementById("correctness3").style.color = "red";
          document.getElementById("correctness3").innerHTML = "Incorrect, try again";
     }
     document.getElementById("result3").innerHTML = "Your answer was: " + text;
     return false;
}



function submitAnswer4(){
     var y = document.getElementById("userAnswer4");
     var text = "";
     var i;
     for (i = 0;  i < y.length;  i++){
          text += y.elements[i].value; //+ "<br>";
     }
     if (text == "False" || text == "false" || text == "f"){
          console.log("start");
          var coinNumber = document.getElementById("coinNumber").textContent;
          //console.log(coinNumber);
          // console.log(coinNumber.elements[0]);
          // var currentNumber = coinNumber.elements[0].value;
          var newNumber = parseInt(coinNumber) + 5;
          console.log(newNumber);
          var numberText = newNumber + " Coins";
          document.getElementById("coinNumber").innerHTML = newNumber;
          document.getElementById("coinCount").innerHTML = numberText;//newNumber + " Gold";
          document.getElementById("correctness4").style.color = "green";
          document.getElementById("correctness4").innerHTML = "Correct!";
     }
     else{
          document.getElementById("correctness4").style.color = "red";
          document.getElementById("correctness4").innerHTML = "Incorrect, try again";
     }
     document.getElementById("result4").innerHTML = "Your answer was: " + text;
     return false;
}


function submitAnswer5(){
     var y = document.getElementById("userAnswer5");
     var text = "";
     var i;
     for (i = 0;  i < y.length;  i++){
          text += y.elements[i].value; //+ "<br>";
     }
     if (text == "9"){
          console.log("start");
          var coinNumber = document.getElementById("coinNumber").textContent;
          //console.log(coinNumber);
          // console.log(coinNumber.elements[0]);
          // var currentNumber = coinNumber.elements[0].value;
          var newNumber = parseInt(coinNumber) + 5;
          console.log(newNumber);
          var numberText = newNumber + " Coins";
          document.getElementById("coinNumber").innerHTML = newNumber;
          document.getElementById("coinCount").innerHTML = numberText;//newNumber + " Gold";
          document.getElementById("correctness5").style.color = "green";
          document.getElementById("correctness5").innerHTML = "Correct!";
     }
     else{
          document.getElementById("correctness5").style.color = "red";
          document.getElementById("correctness5").innerHTML = "Incorrect, try again";
     }
     document.getElementById("result5").innerHTML = "Your answer was: " + text;
     return false;
}
