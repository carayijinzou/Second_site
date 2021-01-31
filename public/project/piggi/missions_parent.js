// Get the modal
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btn1 = document.getElementById("sub1");
var btn2 = document.getElementById("new");
var btn3 = document.getElementById("send");


// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];


// Complete and incomplete
var complete = document.getElementById("complete");
var incomplete = document.getElementById("incomplete");


// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";

}
span2.onclick = function() {
  modal2.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//if user clicks complete mission
complete.onclick = function() {
  modal1.style.display = "none";
  btn1.style.display = "none";
}
incomplete.onclick = function() {
  var hidden = document.getElementById("hidden1");
  modal1.style.display = "none";
  btn1.style.display = "none";
  hidden.style.display = "flex";
}
btn3.onclick = function() {
  modal2.style.display = "none";
  var hidden2 = document.getElementById("hidden2");
  var hidemoney = document.getElementById("hidemoney");
  var hidetask = document.getElementById("hidetask");
  var formmoney = document.getElementById("reward");
  var formtask = document.getElementById("title_id");

  hidemoney.innerHTML= "$" + formmoney.value;
  hidetask.innerHTML=formtask.value;
  hidden2.style.display = "flex";
}


