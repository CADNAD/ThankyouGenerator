var ChangeMessage;
var NameUse;
var GetAdj;
var Sentence;
var GetNoun;
var AdjectiveList = new Array("great", "amazing", "witty", "lazy", "unique", "harsh", "magical", "wonderus", "salty", "weak", "dull", "strange", "affentionate", "confident", "beautiful");
var NounList = new Array("friend", "man", "person", "women", "spy", "child", "elf", "midget", "snowman", "phenomenon");
var ReturnMessage;

$(document).ready(function (){
	ChangeMessage = document.getElementById("Message");
	ReturnMessage = document.getElementById("Thankyou");
	//ChangeMessage.innerHTML = "Check";
	
	$("#NameSubmit").click(function(){
		NameUse = $("#Name").val();
		AdjectiveSelect();
		SentenceSelect();
		NounSelect();
		
		if(Sentence == 1){
		ReturnMessage.innerHTML = "Wow! I can't believe you gave me such a " + AdjectiveList[GetAdj] + " card. You really are too nice " + NameUse + "!";
		} 
		else if(Sentence == 2){
		ReturnMessage.innerHTML = "Greetings, " + NameUse + " thank you for being such a " + AdjectiveList[GetAdj] + " " + NounList[GetNoun] + ", here's to good wishes.";
		} else if(Sentence == 3){
		ReturnMessage.innerHTML = "Happy Holidays " + NameUse +	"! This card relly shows how " + AdjectiveList[GetAdj] + " of a " + NounList[GetNoun] + " you are." 	  
		}
		
	});
	
});

function SentenceSelect (){
	Sentence = Math.floor(Math.random() * 3);
}


function AdjectiveSelect (){
	GetAdj = Math.floor(Math.random() * 15);
}

function NounSelect (){
	GetNoun = Math.floor(Math.random() * 10);
}
