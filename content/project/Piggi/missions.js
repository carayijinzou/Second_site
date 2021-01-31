// Get the modal
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
var modal6 = document.getElementById("modal6");
var modal7 = document.getElementById("modal7");

// Get the button that opens the modal
var btn1 = document.getElementById("reg1");
var btn2= document.getElementById("reg2");
var btn3 = document.getElementById("reg3");
var btn4 = document.getElementById("reg4");
var btn5 = document.getElementById("spec1");
var btn6 = document.getElementById("spec2");
var btn7 = document.getElementById("spec3");


// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
var span7 = document.getElementsByClassName("close")[6];

// Get the <span> element that closes the modal
var mis1 = document.getElementsByClassName("mission_complete")[0];
var mis2 = document.getElementsByClassName("mission_complete")[1];
var mis3 = document.getElementsByClassName("mission_complete")[2];
var mis4 = document.getElementsByClassName("mission_complete")[3];
var mis5 = document.getElementsByClassName("mission_complete")[4];
var mis6 = document.getElementsByClassName("mission_complete")[5];
var mis7 = document.getElementsByClassName("mission_complete")[6];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
} 
btn5.onclick = function() {
  modal5.style.display = "block";
}
btn6.onclick = function() {
  modal6.style.display = "block";
}
btn7.onclick = function() {
  modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
span6.onclick = function() {
  modal6.style.display = "none";
}
span7.onclick = function() {
  modal7.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}

//if user clicks complete mission
mis1.onclick = function() {
  modal1.style.display = "none";
  btn1.style.display = "none";
}
mis2.onclick = function() {
  modal2.style.display = "none";
  btn2.style.display = "none";
}
mis3.onclick = function() {
  modal3.style.display = "none";
  btn3.style.display = "none";
}
mis4.onclick = function() {
  modal4.style.display = "none";
  btn4.style.display = "none";
}
mis5.onclick = function() {
  modal5.style.display = "none";
  btn5.style.display = "none";
}
mis6.onclick = function() {
  modal6.style.display = "none";
  btn6.style.display = "none";
}
mis7.onclick = function() {
  modal7.style.display = "none";
  btn7.style.display = "none";
}

