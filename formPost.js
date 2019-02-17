function getText(){
     var y = document.getElementById("userSolution");
     var text = "";
     var i;
     for (i = 0;  i < y.length;  i++){
          text += y.elements[i].value; //+ "<br>";
     }
     if (text == "5"){
          console.log("the");
          document.getElementById("correctAnswer").innerHTML = "Correct!"
     }
     document.getElementById("result").innerHTML = "Your answer was: " + text;
}
