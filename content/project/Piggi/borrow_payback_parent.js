// Get the modal
var modal1 = document.getElementById("modal1");

// Get the button that opens the modal
var btn1 = document.getElementById("edit_button");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// daily and weekly
var daily = document.getElementById("daily");
var weekly = document.getElementById("weekly");

var new_freq = document.getElementById("new_freq");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
	var new_date = document.getElementById("new_date");
	var new_fee = document.getElementById("new_fee");
	if (new_date.value!=""){
		document.getElementById("reddate").innerHTML = new_date.value;
	}

	if (new_fee.value!=""){
		document.getElementById("latefee").innerHTML = new_fee.value;
	}
	modal1.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}



daily.onclick = function() {
  new_freq.innerHTML = "day";

}

weekly.onclick = function(){
	new_freq.innerHTML = "week";
}
