let name = document.getElementById("name");
let maleGender = document.getElementById("male");
let femaleGender = document.getElementById("female");
let age = document.getElementById("age");
let tall = document.getElementById("tall");
let weight = document.getElementById("weight");
let basalMetabolicRateResult = document.getElementById("basalMetabolicRateResult");
const input2 = document.querySelectorAll("[input]");
console.log(input2)



const calculateBasalMetabolicRate = () => {
	

	let basalMetabolicRate = "";
	let totalDailyEnergyExpenditure = "";

	if(male.checked === true){
		basalMetabolicRate = 66 + (13.7 * (parseFloat(weight.value))) + (5 * (parseFloat(tall.value))) - (6.8 * (parseInt(age.value)));
	}
	if(female.checked === true){
		basalMetabolicRate = 655 + (9.6 * (parseFloat(weight.value))) + (1.8 * (parseFloat(tall.value))) - (4.7 * (parseInt(age.value)));
	}

	if(sedentary.checked === true){
		totalDailyEnergyExpenditure = (totalDailyEnergyExpenditure * 1.2);
 	}



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
let sedentary = document.getElementById("sedentary");
let slightlyActive = document.getElementById("slightlyActive");
let moderatelyActive = document.getElementById("moderatelyActive");
let highlyActive = document.getElementById("highlyActive");
let extremelyActive =  document.getElementById("extremelyActive");
*/
let resultTotalDailyEnergyExpenditure = document.getElementById("resultTotalDailyEnergyExpenditure");


const calculateTotalDailyEnergyExpenditure = () => {
	
	let totalDailyEnergyExpenditure = "";   //sedentario: 1.2,levementeAtivo: 1.375,moderadamenteAtivo: 1.55,altamenteAtivo: 1.725,extremamenteAtivo: 1.9
	let se = sedentary.checked;
	let s = slightlyActive.checked;
	let m = moderatelyActive.checked;
	let h = highlyActive.checked;
	let e = extremelyActive.checked;

	if(se === true){
		totalDailyEnergyExpenditure = (calculateBasalMetabolicRate() * 1.2);
 	}
	
	if(s === true){
		totalDailyEnergyExpenditure = ( calculateBasalMetabolicRate() * 1.375);
	}
	if(m === true){
		totalDailyEnergyExpenditure = (calculateBasalMetabolicRate() * 1.55);
	}
	if(h === true){
		totalDailyEnergyExpenditure = (calculateBasalMetabolicRate() * 1.725);
	}
	if(e === true){
		totalDailyEnergyExpenditure = (calculateBasalMetabolicRate() * 1.9);
	}
	
	resultTotalDailyEnergyExpenditure.textContent = `O seu gasto energético é de ${totalDailyEnergyExpenditure.toFixed(2)} kcal.`
}
/*
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

let loseWeight = document.getElementById("loseWeight");
let keepWeight = document.getElementById("keepWeight");
let gainWeight = document.getElementById("gainWeight");


*/








