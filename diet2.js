const input = document.querySelectorAll("[input]");
const loseWeight = document.getElementById("loseWeight")
const keepMuscleMass = document.getElementById("keepMuscleMass")
const gainMuscleMass = document.getElementById("gainMuscleMass")





const chooseMenu = () => {
	for(let i = 0; i < input.length; i++){															//console.log(input[0].checked)
		if(loseWeight.checked === true){
			if(input[0].checked || input[1].checked === true){
				console.log("hello");
			}
		}
console.log("oi");
	}
};




let foods = [
	{typeMeal: "Café da manhã", name: "Pão integral", quantity: 1, unitOfMeasure: "Fatia(as)", carbohydrate: 12.27, protein: 2.37, fat: 1.07, calories: 68},
	{typeMeal: "Café da manhã", name: "Tapioca", quantity: 30, quantity: 1, unitOfMeasure: "g", carbohydrate: 27.93, protein: 0, fat: 0, calories: 114.6},
	{typeMeal: "Café da manhã", name: "Açúcar", quantity: 1, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 4.2, protein: 0, fat: 0, calories: 16},
	{typeMeal: "Café da manhã", name: "Ovo grande", quantity: 1, unitOfMeasure: "Unidade(s)", carbohydrate: 0.38, protein: 6.29, fat: 4.97, calories: 74},
	{typeMeal: "Café da manhã", name: "Queijo ricota", quantity: 30, unitOfMeasure: "g", carbohydrate: 11.23, protein: 0.40, fat: 0.61, calories: 11.23}, 
	{typeMeal: "Café da manhã", name: "Leite desnatado", quantity: 100, unitOfMeasure: "ml", carbohydrate: 10, protein: 6, fat: 0.7, calories: 7},
	{typeMeal: "Lanche da manhã", name: "Banana nanica", quantity: 100, unitOfMeasure: "g", carbohydrate: 23.8, protein: 1.4, fat: 0.1, calories: 92},
	{typeMeal: "Lanche da manhã", name: "Aveia", quantity: 1, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 8.55, protein: 2.18, fat: 1.18, calories: 53},
	{typeMeal: "Lanche da manhã", name: "Pasta de amendoim", quantity: 1, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 2.99, protein: 3.67, fat: 7.48, calories: 88},
	{typeMeal: "Lanche da manhã", name: "Yakult", quantity: 80, unitOfMeasure: "ml", carbohydrate: 11, protein: 1.6, fat: 0, calories: 51},
	{typeMeal: "Lanche da manhã", name: "Iogurte natural", quantity: 150, unitOfMeasure: "g", carbohydrate: 10, protein: 6.8, fat: 3.6, calories: 88},
	{typeMeal: "Pré-treino", name: "Batata doce", quantity: 100, unitOfMeasure: "g", carbohydrate: 25.88, protein: 2.48, fat: 0.13, calories: 112},
	{typeMeal: "Pós-treino", name: "Whey concentrado", quantity: 30, unitOfMeasure: "g", carbohydrate: 5, protein: 24, fat: 0, calories: 116},
	{typeMeal: "Almoço", name: "Arroz integral", quantity: 1, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 1.72, protein: 0.17, fat: 0.06, calories: 8.33},
	{typeMeal: "Almoço", name: "Mandioca", quantity: 100, unitOfMeasure: "g", carbohydrate: 37.46, protein: 1.34, fat: 2.04, calories: 173},
	{typeMeal: "Almoço", name: "Filé de frango ", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 31.02, fat: 3.57, calories: 165},
	{typeMeal: "Almoço", name: "Filé de tilápia", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 20.08, fat: 1.7, calories: 96},
	{typeMeal: "Almoço", name: "Bisteca suína", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 24, fat: 5.4, calories: 146},
	{typeMeal: "Almoço", name: "Feijão", quantity: 1, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 4.5, protein: 1.45, fat: 0.125, calories: 25},
	{typeMeal: "Almoço", name: "Tomate", quantity: 100, unitOfMeasure: "g", carbohydrate: 9.9, protein: 0.9, fat: 0, calories: 18},
	{typeMeal: "Almoço", name: "Repolho", quantity: 100, unitOfMeasure: "g", carbohydrate: 3.9, protein: 0.9, fat: 0.1, calories: 17},
	{typeMeal: "Almoço", name: "Cenoura", quantity: 100, unitOfMeasure: "g", carbohydrate: 41, protein: 0.93, fat: 0.24, calories: 41},
	{typeMeal: "Lanche da tarde", name: "Maçã", quantity: 100, unitOfMeasure: "g", carbohydrate: 15, protein: 0, fat: 0, calories: 52},
	{typeMeal: "Lanche da tarde", name: "Manga palmer", quantity: 100, unitOfMeasure: "g", carbohydrate: 18.55, protein: 0.56, fat: 18.55, calories: 72},
 	{typeMeal: "Lanche da tarde", name: "Caqui", quantity: 100, unitOfMeasure: "g", carbohydrate: 19.3, protein: 0.4, fat: 0, calories: 71},
 	{typeMeal: "Lanche da tarde", name: "Carambola", quantity: 100, unitOfMeasure: "g", carbohydrate: 6.73, protein: 1.04, fat: 0.33, calories: 31},
	{typeMeal: "Lanche da tarde", name: "Laranja pêra", quantity: 100, unitOfMeasure: "g", carbohydrate: 9.73, protein: 0.61, fat: 0.11, calories: 37},
	{typeMeal: "Jantar", name: "Bife bovino", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 27.29, fat: 15.01, calories: 252},
	{typeMeal: "Jantar", name: "Fígado de frango", quantity: 100, unitOfMeasure: "g", carbohydrate: 0.87, protein: 24.46, fat: 6.51, calories: 167},
	{typeMeal: "Jantar", name: "Sardinha enlatada", quantity: 1, unitOfMeasure: "Lata(s)", carbohydrate: 0, protein: 22.65, fat: 10.53, calories: 191},
	{typeMeal: "Jantar", name: "Cuscuz", quantity: 100, unitOfMeasure: "g", carbohydrate: 23.22, protein: 3.79, fat: 0.16, calories: 112},
	{typeMeal: "Jantar", name: "Alface", quantity: 100, unitOfMeasure: "g", carbohydrate: 2.97, protein: 0.9, fat: 0.14, calories: 14},
	{typeMeal: "Jantar", name: "Pepino", quantity: 100, unitOfMeasure: "g", carbohydrate: 3.6, protein: 0.7, fat: 0.1, calories: 16},
	{typeMeal: "Jantar", name: "Beterraba", quantity: 100, unitOfMeasure: "g", carbohydrate: 9.9, protein: 1.67, fat: 0.18, calories: 44},
	{typeMeal: "Jantar", name: "Azeite", quantity: 1, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 0, protein: 0, fat: 13.5, calories: 119},
	{typeMeal: "Ceia", name: "Abacate", quantity: 100, unitOfMeasure: "g", carbohydrate: 8.53, protein: 2, fat: 14.66, calories: 160}
];


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


/*

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

*/