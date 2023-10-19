var buttonid = new Array ("b00","b01","b02","b03","b10","b11","b12","b13","b20","b21","b22","b23","b30","b31","b32","b33");
var pairs = [];

//keeps track of how many tries 
num_tries = 0;

//keeps track fo ids of first and second block clicked during 3 second period 
id1="";
id2="";

//each try has 2 turns 
clicks=2;

//needs to get to 8 matches to pop up alert 
total_matches = 0; 

function random_pairs() {
	for (i=0; i<8; i++){
		var alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		
		do {
			//generate random alphanumeric
			random_char = alphanumeric.charAt(Math.floor(Math.random()*alphanumeric.length));
		}
		while (pairs.includes(random_char));
		
		//add it twice to the array 
		pairs.push(random_char);
		pairs.push(random_char);
	}

	shuffle_array(pairs);

	//document.getElementById("test").innerHTML = pairs;

	//fill spans with uppercase letter or number 
	var index = 0 
	for (var j=0; j<4; j++){
		for (var k=0; k<4; k++){
			new_id = "s" + j + k
			document.getElementById(new_id).innerHTML=pairs[index];
			index++;
		}
	}
}


//shuffles array (Durstenfed algorithm)
function shuffle_array(array){
	for (var i = 0 ; i < array.length ; i++) {
	    	var j = Math.floor(Math.random() * (array.length-i)+i);
	    	var temp = array[i];
	    	array[i]=array[j];
	    	array[j]=temp;
		}
}





function game(id){
	if (clicks ==2){
		//find corresponding span id 
		s_id = "#" + "s"+ id.slice(1,3);
		$(s_id).fadeIn("fast");
		id1=id;
		clicks--;
		num_tries ++;
		$(s_id).fadeOut(3000,clear_block);
	}
	else if (clicks ==1 &&id1!=id) {
		//find corresponding span id 
		s_id = "#" + "s"+ id.slice(1,3);
		$(s_id).fadeIn("fast");
		id2=id;
		clicks--;
		same(id1,id2);
	}
}


function same(id1, id2){
	var index1 = buttonid.indexOf(id1);
	var index2 = buttonid.indexOf(id2);
	s_id1 = "#" + "s"+ id1.slice(1,3);
	s_id2 = "#" + "s"+ id2.slice(1,3);


	if (pairs[index1]==pairs[index2]){
		total_matches++;
		$(s_id1).finish();
		$(s_id1).fadeIn("fast");
		document.getElementById(id1).setAttribute("disabled","disabled");
		document.getElementById(id2).setAttribute("disabled","disabled");
		if (total_matches ==8){
			window.alert("Congratulations! You matched the blocks in "+num_tries+" tries!")
		}
		clear_block();
	}
	else{
		//not the same, fade second
		$(s_id2).fadeOut(3000);
	}
}



function clear_block(){
	id1="";
	id2="";
	clicks=2;
	
}








