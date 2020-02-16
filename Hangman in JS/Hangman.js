const game=['god','india','goa','books','king'];
	var l=game.length;
	let temp=[];
	var word=game[Math.floor(Math.random() * l)];
	var div=document.getElementById("div1");
	let word_length=word.length;
	let count=0;

function hang(){
		
	console.log(word);
	alert("Let's play Hangman Game");
	
	var p = document.createElement('p');
	p.textContent="Guess The word";
	div.appendChild(p); 
	
	var h=document.createElement("h3");
	var str="";
	for(i=0;i<word_length;i++){
		var str=str+" _";
	}
	h.textContent="The word is "+str+" letters";
	div.appendChild(h);
	// console.log(str);
	
	var guess=document.createElement("input");
	guess.setAttribute("placeholder","Enter any letter");
	guess.setAttribute("class","input");
	guess.setAttribute("onkeydown","find(this)");
	div.appendChild(guess);

}
function find(val){
	if(event.key==="Enter"){
		valid(val.value);
	}
}

function valid(guessed){
	
		
		// if(word.indexOf(guessed)>-1)
		if(word.includes(guessed)){
			word_length=word_length-1;
			console.log(word_length);
			if(word_length!=0){
			var p = document.createElement('p');
			p.textContent="Guess is Correct";
			div.appendChild(p); 

			var guess=document.createElement("input");
			guess.setAttribute("placeholder","Enter any letter");
			guess.setAttribute("id","input");
			guess.setAttribute("onkeydown","find(this)");
			div.appendChild(guess);
			}
			else{finish();}
		}
		else{
			wrong();
	}
}
function finish(){
	alert("You Won!!!");
}
function wrong(){
	alert("Your guess is wrong!! Try Again");
	var guess=document.createElement("input");
	guess.setAttribute("placeholder","Enter any letter");
	guess.setAttribute("id","input");
	guess.setAttribute("onkeydown","find(this)");
	div.appendChild(guess);
}
