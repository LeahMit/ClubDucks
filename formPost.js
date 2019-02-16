function getText(){
     var y = document.getElementById("userSolution");
     var text = "";
     var i;
     for (i = 0;  i < y.length;  i++){
          text += y.elements[i].value + "<br>";
     }
     document.getElementById("resultr").innerHTML = text;
}
