
const name = document.getElementById("name");
const maleGender = document.getElementById("male");
const femaleGender = document.getElementById("female");
const age = document.getElementById("age");
const tall = document.getElementById("tall");
const weight = document.getElementById("weight");
const input = document.querySelectorAll("[input]")
console.log(input.id)
const tDEEresult = document.getElementById("tDEEresult");


const calculateTDEE = () => { //(TDEE) Total Daily Energy Expenditure 

	let bMR = ""; //(bMR) basal Metabolic Rate
	let tDEE = "";
	
	if(male.checked === true){
		bMR = 66 + (13.7 * (parseFloat(weight.value))) + (5 * (parseFloat(tall.value))) - (6.8 * (parseInt(age.value)));
	}
	if(female.checked === true){
		bMR = 655 + (9.6 * (parseFloat(weight.value))) + (1.8 * (parseFloat(tall.value))) - (4.7 * (parseInt(age.value)));
	}

	//Physical activity level
	if(input[0].checked === true){
		tDEE = (bMR * 1.2); //sedentary
	}

	if(input[1].checked === true){
		tDEE = (bMR * 1.375); //slightlyActive
	}

	if(input[2].checked === true){
		tDEE = (bMR * 1.55); //moderatelyActive
	}

	if(input[3].checked === true){
		tDEE = (bMR  * 1.725); //highlyActive
	}

	if(input[4].checked === true){
		tDEE = (bMR * 1.9); //extremelyActive
	}
	
	tDEEresult.textContent = `A sua taxa metabólica basal é de ${bMR.toFixed(2)} kcal e O seu gasto energético é de ${tDEE.toFixed(2)} kcal.`
}


const unSelectInput = (input) => {
	if(input === male){
		femaleGender.checked = false;
	}
	if(input === female){
		maleGender.checked = false;
	}
}

male.addEventListener("click", () => {
	unSelectInput(male);
});
female.addEventListener("click", () => {
	unSelectInput(female);
});

const unSelectInput2 = (input) => {

	if(input === sedentary){
		slightlyActive.checked = false;
		moderatelyActive.checked = false;
		highlyActive.checked = false;
		extremelyActive.checked =false;	
	}
	
	if(input === slightlyActive){
		sedentary.checked = false;
		moderatelyActive.checked = false;
		highlyActive.checked = false;
		extremelyActive.checked =false;	
	}
	if(input === moderatelyActive){
		sedentary.checked = false;
		slightlyActive.checked = false;
		highlyActive.checked = false;
		extremelyActive.checked =false;	
	}
	if(input === highlyActive){
		sedentary.checked = false;
		slightlyActive.checked = false;
		moderatelyActive.checked = false;
		extremelyActive.checked =false;	
	}
	if(input === extremelyActive){
		sedentary.checked = false;
		slightlyActive.checked = false;
		moderatelyActive.checked = false;
		highlyActive.checked =false;	
	}
	
}


sedentary.addEventListener("click", () => {
	unSelectInput2(sedentary);
});
slightlyActive.addEventListener("click", () => {
	unSelectInput2(slightlyActive);
});
moderatelyActive.addEventListener("click", () => {
	unSelectInput2(moderatelyActive);
});
highlyActive.addEventListener("click", () => {
	unSelectInput2(highlyActive);
});
extremelyActive.addEventListener("click", () => {
	unSelectInput2(extremelyActive);
});


 export default function somar(n1, n2){
	return n1 + n2
 }
