var student = {
	name: "",
	type: "student"
};
console.log(" I am here");
document.addEventListener('DOMContentLoaded', contentLoaded);
function contentLoaded(event){
	document.getElementById("name").addEventListener("keyup",keyUp);

}

function keyUp(event){
	calculateTheNameOutput();
}

function calculateTheNameOutput(){
	student.name = document.getElementById("name").value;

	var totalNumber =0;
	for(i =0 ; i< student.name.length;i++){
		totalNumber+=student.name.charCodeAt(i);
	}

	var output = " Total Numeric valuee of the Persons name is "+ totalNumber;
	document.getElementById("output").innerText= output;

}