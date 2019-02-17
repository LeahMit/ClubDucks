var q1Complete =    false;
var q2Complete =    false;
var q3Complete =    false;
var q4Complete =    false;
var q5Complete =    false;

function submitAnswer1(){
     var y = document.getElementById("userAnswer1");
     var text = "";
     var i;
     for (i = 0;  i < y.length;  i++){
          text += y.elements[i].value; //+ "<br>";
     }
     if (text == "5" && q1Complete == false){
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
          q1Complete = true;
     }
     else if(q1Complete){
          document.getElementById("correctness1").style.color = "green";
          document.getElementById("correctness1").innerHTML = "You already answered this correctly!";
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
     if (text == "8" && q2Complete == false){
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
          q2Complete = true;
     }
     else if(q2Complete == true){
          document.getElementById("correctness2").style.color = "green";
          document.getElementById("correctness2").innerHTML = "You already answered this correctly!";
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
     if ((text == "False" || text == "false" || text == "f") && q3Complete == false){
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
          q3Complete = true;
     }
     else if(q3Complete == true){
          document.getElementById("correctness3").style.color = "green";
          document.getElementById("correctness3").innerHTML = "You already answered this correctly!";
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
     if ((text == "False" || text == "false" || text == "f") && q4Complete == false){
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
          q4Complete = true;
     }
     else if(q4Complete == true){
          document.getElementById("correctness4").style.color = "green";
          document.getElementById("correctness4").innerHTML = "You already answered this correctly!";
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
     if (text == "9" && q5Complete == false){
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
          q5Complete = true;
     }
     else if(q5Complete == true){
          document.getElementById("correctness5").style.color = "green";
          document.getElementById("correctness5").innerHTML = "You already answered this correctly!";
     }
     else{
          document.getElementById("correctness5").style.color = "red";
          document.getElementById("correctness5").innerHTML = "Incorrect, try again";
     }
     document.getElementById("result5").innerHTML = "Your answer was: " + text;
     return false;
}
