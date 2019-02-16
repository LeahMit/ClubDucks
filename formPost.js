function getText(){
     var inputs     = document.getElementByID("userSolution");
     var text       = "";
     var i;
     for (i = 0;  i < inputs.length;  i++){
          text      += inputs.elements[i].value + "<br>";
     }
     document.getElementsById("result").innerHTML = text;
     return 0;
}
