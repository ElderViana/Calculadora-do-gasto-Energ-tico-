
/*

let div = document.getElementById("div")
let p = document.getElementById("p")
let input1 = document.createElement("input")
input1.type = "checkbox" 
input1.name = "Abacate"
let li = document.createElement("p")
p.textContent = "Abacate" 

div.appendChild(input1); 
div.appendChild(label);
div.appendChild(p); 
div.appendChild(input2); 
div.appendChild(label2);



















































for( i = 0; i < 9; i++){
	let tb = document.getElementById("tbDiet2");
	let numberOfLines = tb.rows.length;
	let line = tb.insertRow(numberOfLines);

	let cellBreakfast = line.insertCell(0);
	let cellMorningSnack = line.insertCell(1);
	let cellPreWorkout = line.insertCell(2);
	let cellPostWorkout = line.insertCell(3)
	let cellLunch = line.insertCell(4);
	let cellAfternoonSnack = line.insertCell(5);
	let cellDinner = line.insertCell(6);
	let cellSupper = line.insertCell(7);

if(i < 6 && foods[i].typeMeal === "Café da manhã"){
	cellBreakfast.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;	 
}	
i+=6
if(i < 11 && foods[i].typeMeal === "Lanche da manhã"){
	cellMorningSnack.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;	
}
i+=5
if(i < 12 && foods[i].typeMeal === "Pré-treino"){
	cellPreWorkout.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;	
}
i++
if(i < 13 && foods[i].typeMeal === "Pós-treino"){
	cellPostWorkout.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;	
}
i++
if(i < 22 && foods[i].typeMeal === "Almoço"){
	cellLunch.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
}
i+=9
if( i < 27 && foods[i].typeMeal === "Lanche da tarde"){
	cellAfternoonSnack.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
}
i+=5
if(i < 35 && foods[i].typeMeal === "Jantar"){
	cellDinner.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
}
i+=8
if(i < 36 && foods[i].typeMeal === "Ceia"){
	cellSupper.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
}
i-=35
}



for( i = 0; i < foods.length; i++){
	let tb = document.getElementById("tbDiet");
	let numberOfLines = tb.rows.length;
	let line = tb.insertRow(numberOfLines);

	let cellTypeMeal = line.insertCell(0);
	let cellFood = line.insertCell(1);
	let cellQuantity = line.insertCell(2);
	let cellCarbohydrate = line.insertCell(3);
	let cellProtein = line.insertCell(4);
	let cellFat = line.insertCell(5);
	let cellCalories = line.insertCell(6);
	

	cellTypeMeal.innerHTML = foods[i].typeMeal;
	cellFood.innerHTML = foods[i].name;
	cellQuantity.innerHTML = `${foods[i].quantity} ${foods[i].unitOfMeasure}`;
	cellCarbohydrate.innerHTML = foods[i].carbohydrate;
	cellProtein.innerHTML = foods[i].protein;
	cellFat.innerHTML = foods[i].fat;
	cellCalories.innerHTML = foods[i].calories;

}




let loseWeight = input.id === "input-loseWeight" && input.checked === true;
let keepWeight = input.id === "input-keepWeight" && input.checked === true;
let gainWeight = input.id === "input-gainWeight" && input.checked === true;

let wholemealBread = input.id === "input-wholemealBread"&& input.cheched === true;
let tapioca = input.id === "input-tapioca"&& input.cheched === true;
let sugar = input.id === "input-sugar"&& input.cheched === true;
let egg = input.id === "input-egg"&& input.cheched === true;
let ricotaCheese = input.id === "input-ricotacheese"&& input.cheched === true;
let skimedMilk = input.id === "input-skimedMilk"&& input.cheched === true;

let banana = input.id === "input-banana"&& input.cheched === true;
let oat = input.id === "input-oat"&& input.cheched === true;
let peanutButter = input.id === "input-peanutButter"&& input.cheched === true;
let yakult = input.id === "input-yakult"&& input.cheched === true;
let naturalYogurt = input.id === "input-naturalYogurt"&& input.cheched === true;

let sweetPotato = input.id === "input-sweetPotato"&& input.cheched === true;

let whey = input.id === "input-whey"&& input.cheched === true;

let wholegrainRice = input.id === "input-wholegrainRice"&& input.cheched === true;
let cassava = input.id === "input-cassava"&& input.cheched === true;
let chickenFillet = input.id === "input-chickenFillet"&& input.cheched === true;
let tilapiaFillet = input.id === "input-tilapiaFillet"&& input.cheched === true;
let porkChop = input.id === "input-porkChop"&& input.cheched === true;
let bean = input.id === "input-bean"&& input.cheched === true;
let tomato = input.id === "input-tomato"&& input.cheched === true;
let cabbage = input.id === "input-cabbage"&& input.cheched === true;
let carrot = input.id === "input-carrot"&& input.cheched === true;

let apple = input.id === "input-apple"&& input.cheched === true;
let sleeve = input.id === "input-sleeve"&& input.cheched === true;
let persimmon = input.id === "input-persimmon"&& input.cheched === true;
let starFruit = input.id === "input-starFruit"&& input.cheched === true;
let orange = input.id === "input-orange"&& input.cheched === true;

let beefSteak = input.id === "input-beefSteak"&& input.cheched === true;
let chckenLiver = input.id === "input-chckenLiver"&& input.cheched === true;
let cannedSardine = input.id === "input-cannedSardine"&& input.cheched === true;
let couscous = input.id === "input-couscous"&& input.cheched === true;
let lettuce = input.id === "input-lettuce"&& input.cheched === true;
let cucumber = input.id === "input-cucumber"&& input.cheched === true;
let beet = input.id === "input-beet"&& input.cheched === true;
let oliveOil = input.id === "input-oliveOil"&& input.cheched === true;

let avocado = input.id === "input-avocado"&& input.cheched === true;


	for(let i = 0; i < input.length; i++){															//console.log(input[0].checked)
		if(loseWeight.checked === true){
			if(input[0].checked || input[1].checked === true){
				console.log("hello");
			}
		}
console.log("oi");
	} 



	let breakfast = [0];
	let morningSnack = [0];
	let preWorkout = [0];
	let postWorkout = [0];
	let lunch = [0];
	let afternoonSnack = [0];
	let dinner = [0];
	let supper = [0];
	let t = [0];

console.log(t)

	for( i = 0; i < input.length; i++){

		let tb2 = document.getElementById("tbDiet2");
		let numberOfLines2 = tb2.rows.length;
		let line2 = tb2.insertRow(numberOfLines2);
	
		let cellBreakfast = line2.insertCell(0);
		let cellMorningSnack = line2.insertCell(1);
		let cellPreWorkout = line2.insertCell(2);
		let cellPostWorkout = line2.insertCell(3)
		let cellLunch = line2.insertCell(4);
		let cellAfternoonSnack = line2.insertCell(5);
		let cellDinner = line2.insertCell(6);
		let cellSupper = line2.insertCell(7);

		if(loseWeight.checked === true){
			if(input[i].checked === true){
				t.push(input[i].name);
				if(i < breakfast.length && input[i].name === foods[i].name && foods[i].typeMeal === "Café da manhã"){
					cellBreakfast.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;	
					breakfast.push(input[i].name);
				}
				i += breakfast.length
				if(i < (breakfast.length + morningSnack.length) && input[i].name === foods[i].name && foods[i].typeMeal === "Lanche da manhã"){
					cellMorningSnack.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
					morningSnack.push(input[i].name);
				}
				i+= morningSnack.length
				if(i < (breakfast.length + morningSnack.length + preWorkout.length) && input[i].name === foods[i].name && foods[i].typeMeal === "Pré-treino"){
					cellPreWorkout.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
					preWorkout.push(input[i].name);
				}
				i+= preWorkout.length
				if(i < (breakfast.length + morningSnack.length + preWorkout.length + postWorkout.length) && input[i].name === foods[i].name && foods[i].typeMeal === "Pós-treino"){
					cellPostWorkout.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;	
					postWorkout.push(input[i].name);
				}
				i+= postWorkout.length
				if(i < (breakfast.length + morningSnack.length + preWorkout.length + postWorkout.length + lunch.length) && input[i].name === foods[i].name && foods[i].typeMeal === "Almoço"){
					cellLunch.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
					lunch.push(input[i].name);
				}
				i+= lunch.length
				if(i < (breakfast.length + morningSnack.length + preWorkout.length + postWorkout.length + lunch.length + afternoonSnack.length) && input[i].name === foods[i].name && foods[i].typeMeal === "Lanche da tarde"){
					cellAfternoonSnack.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
					afternoonSnack.push(input[i].name);
				}
				i+= afternoonSnack.length
				if(i < (breakfast.length + morningSnack.length + preWorkout.length + postWorkout.length + lunch.length + afternoonSnack.length + dinner.length) && input[i].name === foods[i].name && foods[i].typeMeal === "Jantar"){
					cellDinner.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
					dinner.push(input[i].name);
				}
				i+= dinner.length
				if(i < (breakfast.length + morningSnack.length + preWorkout.length + postWorkout.length + lunch.length + afternoonSnack.length + dinner.length + supper.length) &&input[i].name === foods[i].name && foods[i].typeMeal === "Ceia"){
					cellSupper.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
					supper.push(input[i].name);
				}
				i-=
				



				
				input.forEach(ipt1 => {
				
		
					if(ipt1.name === foods[i].name && foods[i].typeMeal === "Café da manhã"){
						cellBreakfast.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;	 
					}
					
					if(ipt1.name === foods[i].name && foods[i].typeMeal === "Lanche da manhã"){
						cellMorningSnack.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;	
					}
				
					if(  ipt1.name === foods[i].name && foods[i].typeMeal === "Pré-treino"){
						cellPreWorkout.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;	
					}
					
					if( ipt1.name === foods[i].name && foods[i].typeMeal === "Pós-treino"){
						cellPostWorkout.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;	
					}
				
					if(  ipt1.name === foods[i].name && foods[i].typeMeal === "Almoço"){
						cellLunch.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
					}
					
					if( ipt1.name === foods[i].name && foods[i].typeMeal === "Lanche da tarde"){
						cellAfternoonSnack.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
					}
				
					if(ipt1.name === foods[i].name && foods[i].typeMeal === "Jantar"){
						cellDinner.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
					}
				
					if(ipt1.name === foods[i].name && foods[i].typeMeal === "Ceia"){
						cellSupper.innerHTML =  ` ${foods[i].quantity} ${foods[i].unitOfMeasure} de ${foods[i].name}`;
					}
				
				
			})	
		}
		}
	}
	
	

console.log(foods2[0].name)
let meal1 = document.getElementById("meal1");
let meal2 = document.getElementById("meal2");
let meal3 = document.getElementById("meal3");
let meal4 = document.getElementById("meal4");
let meal5 = document.getElementById("meal5");
let meal6 = document.getElementById("meal6");
let meal7 = document.getElementById("meal7");
let meal8 = document.getElementById("meal8");
let inputs = [];
let inputsN = [];


 for (i = 0; i < foods2.length; i++){
	br =  document.createElement("br");
	meal2.appendChild(br);
	if (foods2[i].typeMeal === "Café da manhã"){
		
			ipt =  document.createElement("input");
			ipt.type = "checkbox";
		
	
			ipt.id = `input-${i}`
			ipt.name = foods2[i].name
			ipt.class = "input"
			meal1.appendChild(ipt);
			label = document.createElement("label");
			label.textContent = foods2[i].name;
			meal1.appendChild(label);
			inputs.push(ipt.id);
			inputsN.push(ipt.name);
		
	}
	if(foods2[i].typeMeal === "Lanche da manhã"){
		if(foods2[i].name !== "Yakult" && foods2[i].name !== "Iogurte natural"){
			ipt2 =  document.createElement("input");
			ipt2.type = "checkbox";
			ipt2.id = `input-${i}`
			ipt2.name = foods2[i].name
			ipt2.class = "input"
			meal2.appendChild(ipt2);
			label = document.createElement("label");
			label.textContent = foods2[i].name;
			meal2.appendChild(label);
			inputs.push(ipt2.id);
			inputsN.push(ipt2.name);

			br =  document.createElement("br");
			meal2.appendChild(br);
		}else{
			ipt3 =  document.createElement("input");
			ipt3.type = "checkbox";
			ipt3.id = `input-${i}`
			ipt3.name = foods2[i].name
			ipt3.class = "input"
			meal2.appendChild(ipt3);
			label = document.createElement("label");
			label.textContent = foods2[i].name;
			meal2.appendChild(label);
			inputs.push(ipt3.id);
			inputsN.push(ipt3.name);

		}
			
			if(foods2[i].name !== foods2[9].name || foods2[i].name !== foods[10].name){
		
			
			ipt3 =  document.createElement("input");
			ipt3.type = "checkbox";
			ipt3.id = `input-${i}`
			ipt3.name = foods2[i].name
			ipt3.class = "input"
			meal3.appendChild(ipt3);
			label = document.createElement("label");
			label.textContent = foods2[i].name;
			meal2.appendChild(label);
			inputs.push(ipt3.id);
			inputsN.push(ipt3.name);

		}
		
	}
 }

console.log(inputsN)
 



const createFood = (input, label, nameFood, id) => {
	//p1 = document.createElement("p");
	//p1.textContent = "Café da manhã" ;
	//meal1.appendChild(p1);
	
	let inputs = [];

	input = document.createElement("input");
	input.type = "checkbox";
	input.id = id;
	label = document.createElement("label");
	label.textContent = nameFood;
	meal1.appendChild(input);
	meal1.appendChild(label);
	//ç
inputs.push(input.id);
console.log(inputs)

	
	
	
	if(foods2[i].name !== foods2[0].name || foods[i].name !== foods2[1].name){
	br = document.createElement("br")
	meal1.appendChild(br);
	}
	

}

for (i = 0; i < foods2.length; i++){
	if(foods2[i].typeMeal === "Café da manhã"){
		if(foods2[i].name === foods2[0].name || foods[i].name === foods2[1].name){
			createFood(foods2.length, foods2.length, foods2[i].name, `input-${[i]}`);
		}else{
			br = document.createElement("br")
			meal1.appendChild(br);
			createFood(foods2.length, foods2.length, foods2[i].name, `input-${[i]}`);
			}
	if(foods2[i].typeMeal === "lanche da manhã"){
		createFood(foods2.length, foods2.length, foods2[i].name);
	}
	}	
}



foods2.forEach(input => {

	if(input[0].name === foods2[0].name && input[1].name === foods2[1].name){

		let input1 = document.createElement("input")
		input1.type = "checkbox" 
		input1.innerHTML = "Abacate"
		let li = document.createElement("p")
		p.textContent = "Abacate" 

		meal1.appendChild(input1) 
		input1.appendChild(li)

	}
})

*/
let numero = 2;
export default numero

