
const name = document.getElementById("name");
const maleGender = document.getElementById("male");
const femaleGender = document.getElementById("female");
const age = document.getElementById("age");
const tall = document.getElementById("tall");
const weight = document.getElementById("weight");
const input = document.querySelectorAll("[input]")
console.log(input.id)
const totalDailyEnergyExpenditure = document.getElementById("totalDailyEnergyExpenditureResult");


const calculateTDEE = () => { //Total Daily Energy Expenditure 

	let basalMetabolicRate = "";
	let totalDailyEnergyExpenditure = "";
	
	if(male.checked === true){
		basalMetabolicRate = 66 + (13.7 * (parseFloat(weight.value))) + (5 * (parseFloat(tall.value))) - (6.8 * (parseInt(age.value)));
	}
	if(female.checked === true){
		basalMetabolicRate = 655 + (9.6 * (parseFloat(weight.value))) + (1.8 * (parseFloat(tall.value))) - (4.7 * (parseInt(age.value)));
	}

	//Physical activity level
	if(input[0].checked === true){
		totalDailyEnergyExpenditure = (basalMetabolicRate * 1.2); //sedentary
	}

	if(input[1].checked === true){
		totalDailyEnergyExpenditure = (basalMetabolicRate * 1.375); //slightlyActive
	}

	if(input[2].checked === true){
		totalDailyEnergyExpenditure = (basalMetabolicRate * 1.55); //moderatelyActive
	}

	if(input[3].checked === true){
		totalDailyEnergyExpenditure = (basalMetabolicRate  * 1.725); //highlyActive
	}

	if(input[4].checked === true){
		totalDailyEnergyExpenditure = (basalMetabolicRate * 1.9); //extremelyActive
	}
	
	totalDailyEnergyExpenditureResult.textContent = `A sua taxa metabólica basal é de ${basalMetabolicRate.toFixed(2)} kcal e O seu gasto energético é de ${totalDailyEnergyExpenditure.toFixed(2)} kcal.`
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


/*
const sedentary = document.getElementById("sedentary");
const slightlyActive = document.getElementById("slightlyActive");
const moderatelyActive = document.getElementById("moderatelyActive");
const highlyActive = document.getElementById("highlyActive");
const extremelyActive =  document.getElementById("extremelyActive");
const resultTotalDailyEnergyExpenditure = document.getElementById("resultTotalDailyEnergyExpenditure");





























	
	
	const se = sedentary.checked;
	const s = slightlyActive.checked;
	const m = moderatelyActive.checked;
	const h = highlyActive.checked;
	const e = extremelyActive.checked;
console.log(calculateBasalMetabolicRate())
	if(se === true){
		totalDailyEnergyExpenditure = (2 * 1.2);
 	}
	
	if(s === true){
		totalDailyEnergyExpenditure = ( 2 * 1.375);
	}
	if(m === true){
		totalDailyEnergyExpenditure = (2 * 1.55);
	}
	if(h === true){
		totalDailyEnergyExpenditure = (2  * 1.725);
	}
	if(e === true){
		totalDailyEnergyExpenditure = (2 * 1.9);
	}
	
	resultTotalDailyEnergyExpenditure.textContent = `O seu gasto energético é de ${totalDailyEnergyExpenditure.toFixed(2)} kcal.`
}

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

const loseWeight = document.getElementById("loseWeight");
const keepWeight = document.getElementById("keepMuscleMass");
const gainMuscleMass = document.getElementById("gainMuscleMass");

*/








