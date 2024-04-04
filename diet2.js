

const foods = [
	{typeMeal: "Café da manhã", name: "Pão integral", quantity: 2, unitOfMeasure: "Fatia(as)", carbohydrate: 24.54, protein: 4.74, fat: 2.14, calories: 136},
	{typeMeal: "Café da manhã", name: "Tapioca", quantity: 30, quantity: 1, unitOfMeasure: "g", carbohydrate: 27.93, protein: 0, fat: 0, calories: 114},
	{typeMeal: "Café da manhã", name: "Açúcar", quantity: 1, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 4.2, protein: 0, fat: 0, calories: 16},
	{typeMeal: "Café da manhã", name: "Ovo", quantity: 1, unitOfMeasure: "Unidade(s)", carbohydrate: 0.38, protein: 6.29, fat: 4.97, calories: 74},
	{typeMeal: "Café da manhã", name: "Queijo ricota", quantity: 30, unitOfMeasure: "g", carbohydrate: 11.23, protein: 0.40, fat: 0.61, calories: 11}, 
	{typeMeal: "Café da manhã", name: "Leite desnatado", quantity: 100, unitOfMeasure: "ml", carbohydrate: 10, protein: 6, fat: 0.7, calories: 7},
	{typeMeal: "Lanche da manhã", name: "Banana nanica", quantity: 100, unitOfMeasure: "g", carbohydrate: 23.8, protein: 1.4, fat: 0.1, calories: 92},
	{typeMeal: "Lanche da manhã", name: "Aveia", quantity: 4, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 34.2, protein: 8.72, fat: 4.72, calories: 212},
	{typeMeal: "Lanche da manhã", name: "Pasta de amendoim", quantity: 2, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 5.98, protein: 7.34, fat: 14.96, calories: 176},
	{typeMeal: "Lanche da manhã", name: "Yakult", quantity: 80, unitOfMeasure: "ml", carbohydrate: 11, protein: 1.6, fat: 0, calories: 51},
	{typeMeal: "Lanche da manhã", name: "Iogurte natural", quantity: 150, unitOfMeasure: "g", carbohydrate: 10, protein: 6.8, fat: 3.6, calories: 88},
	{typeMeal: "Pré-treino", name: "Batata doce", quantity: 100, unitOfMeasure: "g", carbohydrate: 25.88, protein: 2.48, fat: 0.13, calories: 112},
	{typeMeal: "Pós-treino", name: "Whey concentrado", quantity: 30, unitOfMeasure: "g", carbohydrate: 5, protein: 24, fat: 0, calories: 116},
	{typeMeal: "Almoço", name: "Arroz integral", quantity: 4, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 6.88, protein: 0.68, fat: 0.24, calories: 33},
	{typeMeal: "Almoço", name: "Mandioca", quantity: 100, unitOfMeasure: "g", carbohydrate: 37.46, protein: 1.34, fat: 2.04, calories: 173},
	{typeMeal: "Almoço", name: "Filé de frango", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 31.02, fat: 3.57, calories: 165},
	{typeMeal: "Almoço", name: "Filé de tilápia", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 20.08, fat: 1.7, calories: 96},
	{typeMeal: "Almoço", name: "Bisteca suína", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 24, fat: 5.4, calories: 146},
	{typeMeal: "Almoço", name: "Feijão", quantity: 4, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 18, protein: 5.8, fat: 0.5, calories: 100},
	{typeMeal: "Almoço", name: "Tomate", quantity: 100, unitOfMeasure: "g", carbohydrate: 9.9, protein: 0.9, fat: 0, calories: 18},
	{typeMeal: "Almoço", name: "Repolho", quantity: 100, unitOfMeasure: "g", carbohydrate: 3.9, protein: 0.9, fat: 0.1, calories: 17},
	{typeMeal: "Almoço", name: "Cenoura", quantity: 100, unitOfMeasure: "g", carbohydrate: 41, protein: 0.93, fat: 0.24, calories: 41},
	{typeMeal: "Lanche da tarde", name: "Maçã", quantity: 100, unitOfMeasure: "g", carbohydrate: 15, protein: 0, fat: 0, calories: 52},
	{typeMeal: "Lanche da tarde", name: "Manga palmer", quantity: 100, unitOfMeasure: "g", carbohydrate: 18.55, protein: 0.56, fat: 18.55, calories: 72},
 	{typeMeal: "Lanche da tarde", name: "Caqui", quantity: 100, unitOfMeasure: "g", carbohydrate: 19.3, protein: 0.4, fat: 0, calories: 71},
 	{typeMeal: "Lanche da tarde", name: "Carambola", quantity: 100, unitOfMeasure: "g", carbohydrate: 6.73, protein: 1.04, fat: 0.33, calories: 31},
	{typeMeal: "Lanche da tarde", name: "Laranja pêra", quantity: 100, unitOfMeasure: "g", carbohydrate: 9.73, protein: 0.61, fat: 0.11, calories: 37},
	{typeMeal: "Jantar", name: "Cuscuz", quantity: 100, unitOfMeasure: "g", carbohydrate: 23.22, protein: 3.79, fat: 0.16, calories: 112},
	{typeMeal: "Jantar", name: "Bife bovino", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 27.29, fat: 15.01, calories: 252},
	{typeMeal: "Jantar", name: "Fígado de frango", quantity: 100, unitOfMeasure: "g", carbohydrate: 0.87, protein: 24.46, fat: 6.51, calories: 167},
	{typeMeal: "Jantar", name: "Sardinha enlatada", quantity: 1, unitOfMeasure: "Lata(s)", carbohydrate: 0, protein: 22.65, fat: 10.53, calories: 191},
	{typeMeal: "Jantar", name: "Alface", quantity: 100, unitOfMeasure: "g", carbohydrate: 2.97, protein: 0.9, fat: 0.14, calories: 14},
	{typeMeal: "Jantar", name: "Pepino", quantity: 100, unitOfMeasure: "g", carbohydrate: 3.6, protein: 0.7, fat: 0.1, calories: 16},
	{typeMeal: "Jantar", name: "Beterraba", quantity: 100, unitOfMeasure: "g", carbohydrate: 9.9, protein: 1.67, fat: 0.18, calories: 44},
	{typeMeal: "Jantar", name: "Azeite", quantity: 2, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 0, protein: 0, fat: 27, calories: 238},
	{typeMeal: "Ceia", name: "Abacate", quantity: 100, unitOfMeasure: "g", carbohydrate: 8.53, protein: 2, fat: 14.66, calories: 160}
];
console.log(foods)
const foods2 = structuredClone(foods);



const input = document.querySelectorAll("[input]");
const loseWeight = document.getElementById("loseWeight")
const keepMuscleMass = document.getElementById("keepMuscleMass")
const gainMuscleMass = document.getElementById("gainMuscleMass")

let y = true
let p = true

if(y && p ===  true){
	console.log(true)
}



const chooseMenu = () => {
	let tDEE = 0;
	let foodsCheckeds = [];
	let carbohydrate = 0;
	let protein = 0;
	let fat = 0;
	let calories = 0;
	

	

console.log(foodsCheckeds)
	input.forEach(ipt => {
		if(ipt.checked === true){
			foodsCheckeds.push(ipt.checked);
		}
	});

	for (i = 0; i < foods2.length; i++){
		if(loseWeight.checked || keepMuscleMass.checked || gainMuscleMass.checked === true){  
			if(input[i].checked === true){
				carbohydrate += foods2[i].carbohydrate; 
				protein += foods2[i].protein; 
				fat += foods2[i].fat; 
				calories += foods2[i].calories;	
				}		
		}
	}

	if(loseWeight.checked === true){
		tDEE -= 500;
	} else if(keepMuscleMass.checked === true){
		    	tDEE += 500;
	}else if(gainMuscleMass.checked === true){
				tDEE += 1000;
	}
	
//Caso o usuário deseje perder peso;
	if(loseWeight.checked || keepMuscleMass.checked || gainMuscleMass.checked === true){
		if(calories <= 2520 && input[0].checked === true){
			carbohydrate += foods2[0].carbohydrate; 
			protein += foods2[0].protein; 
			fat += foods2[0].fat; 
			calories += foods2[0].calories;

			foods2[0].quantity = (2 * foods2[0].quantity);
			foods2[0].carbohydrate = (2 * foods2[0].carbohydrate);
			foods2[0].protein = (2 * foods2[0].protein);
			foods2[0].fat = (2 * foods2[0].fat);
			foods2[0].calories = (2 * foods2[0].calories);
		} else if(calories <= 2520 && input[1].checked === true){
					carbohydrate += foods2[1].carbohydrate; 
					protein += foods2[1].protein; 
					fat += foods2[1].fat;
					calories += foods2[1].calories;

					foods2[1].quantity = (2 * foods2[1].quantity);
					foods2[1].carbohydrate = (2 * foods2[1].carbohydrate);
					foods2[1].protein = (2 * foods2[1].protein);
					foods2[1].fat = (2 * foods2[1].fat);
					foods2[1].calories = (2 * foods2[1].calories);
				}
			}
			
	
		if(calories <= 2520 && input[3].checked === true){
			carbohydrate += (2 * foods2[3].carbohydrate); 
			protein += (2 * foods2[3].protein); 
			fat += (2 * foods2[3].fat); 
			calories += (2 * foods2[3].calories);

			foods2[3].quantity = (3 * foods2[3].quantity);
			foods2[3].carbohydrate = (3 * foods2[3].carbohydrate);
			foods2[3].protein = (3 * foods2[3].protein);
			foods2[3].fat = (3 * foods2[3].fat);
			foods2[3].calories = (3 * foods2[3].calories);
		}
		
	
		if(calories <= 2520 && input[6].checked === true){
			carbohydrate += foods2[6].carbohydrate; 
			protein += foods2[6].protein; 
			fat += foods2[6].fat; 
			calories += foods2[6].calories;
		
			foods2[6].quantity = (2 * foods2[6].quantity);
			foods2[6].carbohydrate = (2 * foods2[6].carbohydrate);
			foods2[6].protein = (2 * foods2[6].protein);
			foods2[6].fat = (2 * foods2[6].fat);
			foods2[6].calories = (2 * foods2[6].calories);
		}		

		if(calories <= 2520 && input[15].checked === true){
			carbohydrate += foods2[15].carbohydrate; 
			protein += foods2[15].protein; 
			fat += foods2[15].fat; 
			calories += foods2[15].calories;

			foods2[15].quantity = (2 * foods2[15].quantity);
			foods2[15].carbohydrate = (2 * foods2[15].carbohydrate);
			foods2[15].protein = (2 * foods2[15].protein);
			foods2[15].fat = (2 * foods2[15].fat);
			foods2[15].calories = (2 * foods2[15].calories);
		} else if(calories <= 2520 && input[16].checked === true){
					carbohydrate += (2 * foods2[16].carbohydrate); 
					protein += (2 * foods2[16].protein); 
					fat += (2 * foods2[16].fat); 
					calories += (2 * foods2[16].calories);

					foods2[16].quantity = (3 * foods2[16].quantity);
					foods2[16].carbohydrate = (3 * foods2[16].carbohydrate);
					foods2[16].protein = (3 * foods2[16].protein);
					foods2[16].fat = (3 * foods2[16].fat);
					foods2[16].calories = (3 * foods2[16].calories);
	
				} else if(calories <= 2520 && input[17].checked === true){
							carbohydrate += foods2[17].carbohydrate; 
							protein += foods2[17].protein; 
							fat += foods2[17].fat; 
							calories += foods2[17].calories;
	
							foods2[17].quantity = (2 * foods2[17].quantity);
							foods2[17].carbohydrate = (2 * foods2[17].carbohydrate);
							foods2[17].protein = (2 * foods2[17].protein);
							foods2[17].fat = (2 * foods2[17].fat);
							foods2[17].calories = (2 * foods2[17].calories);
						}
		if(calories <= 2520 && input[22].checked === true){
    		carbohydrate += foods2[22].carbohydrate; 
    		protein += foods2[22].protein; 
    		fat += foods2[22].fat; 
   		 	calories += foods2[22].calories;

    		foods2[22].quantity = (2 * foods2[22].quantity);
    		foods2[22].carbohydrate = (2 * foods2[22].carbohydrate);
    		foods2[22].protein = (2 * foods2[22].protein);
    		foods2[22].fat = (2 * foods2[22].fat);
    		foods2[22].calories = (2 * foods2[22].calories);
		} else if(calories <= 2520 && input[23].checked === true){
					carbohydrate += foods2[23].carbohydrate; 
					protein += foods2[23].protein; 
					fat += foods2[23].fat; 
					calories += foods2[23].calories;
		
					foods2[23].quantity = (2 * foods2[23].quantity);
					foods2[23].carbohydrate = (2 * foods2[23].carbohydrate);
					foods2[23].protein = (2 * foods2[23].protein);
					foods2[23].fat = (2 * foods2[23].fat);
					foods2[23].calories = (2 * foods2[23].calories);
				}
		if(calories <= 2520 && input[24].checked === true){
    		carbohydrate += foods2[24].carbohydrate; 
    		protein += foods2[24].protein; 
    		fat += foods2[24].fat; 
    		calories += foods2[24].calories;

    		foods2[24].quantity = (2 * foods2[24].quantity);
    		foods2[24].carbohydrate = (2 * foods2[24].carbohydrate);
    		foods2[24].protein = (2 * foods2[24].protein);
    		foods2[24].fat = (2 * foods2[24].fat);
    		foods2[24].calories = (2 * foods2[24].calories);
		} else if(calories <= 2520 && input[25].checked === true){
					carbohydrate += (2 * foods2[25].carbohydrate); 
					protein += (2 * foods2[25].protein); 
					fat += (2 * foods2[25].fat); 
					calories += (2 * foods2[25].calories);
		
					foods2[25].quantity = (3 * foods2[25].quantity);
					foods2[25].carbohydrate = (3 * foods2[25].carbohydrate);
					foods2[25].protein = (3 * foods2[25].protein);
					foods2[25].fat = (3 * foods2[25].fat);
					foods2[25].calories = (3 * foods2[25].calories);
		} else if(calories <= 2620 && input[26].checked === true){
					carbohydrate += (2 * foods2[26].carbohydrate); 
					protein += (2 * foods2[26].protein); 
					fat += (2 * foods2[26].fat); 
					calories += (2 * foods2[26].calories);
		
					foods2[26].quantity = (3 * foods2[26].quantity);
					foods2[26].carbohydrate = (3 * foods2[26].carbohydrate);
					foods2[26].protein = (3 * foods2[26].protein);
					foods2[26].fat = (3 * foods2[26].fat);
					foods2[26].calories = (3 * foods2[26].calories);
				}
				
	
	
//Para uma pessoa que possue uma necessidade energética maior que 2.620 kcal( homem com 1,73cm, 84kg e extremamente ativo).

		if(calories <= 5000 && input[27].checked === true){
    		carbohydrate +=  foods2[27].carbohydrate; 
    		protein += foods2[27].protein; 
    		fat += foods2[27].fat; 
    		calories += foods2[27].calories;

    		foods2[27].quantity = (2 * foods2[27].quantity);
    		foods2[27].carbohydrate = (2 * foods2[27].carbohydrate);
    		foods2[27].protein = (2 * foods2[27].protein);
    		foods2[27].fat = (2 * foods2[27].fat);
    		foods2[27].calories = (2 * foods2[27].calories);
		}

	
//2.732 kcal
		if(calories <= 5000 && input[28].checked === true){
			carbohydrate += foods2[28].carbohydrate; 
			protein += foods2[28].protein; 
			fat += foods2[28].fat; 
			calories +=foods2[28].calories;
	
			foods2[28].quantity = (2 * foods2[28].quantity);
			foods2[28].carbohydrate = (2 * foods2[28].carbohydrate);
			foods2[28].protein = (2 * foods2[28].protein);
			foods2[28].fat = (2 * foods2[28].fat);
			foods2[28].calories = (2 * foods2[28].calories);
		} else if(calories <= 5000 && input[29].checked === true){
					carbohydrate += (2 * foods2[29].carbohydrate); 
					protein += (2 * foods2[29].protein); 
					fat += (2 * foods2[29].fat); 
					calories += (2 * foods2[29].calories);
	
					foods2[29].quantity = (3 * foods2[29].quantity);
					foods2[29].carbohydrate = (3 * foods2[29].carbohydrate);
					foods2[29].protein = (3 * foods2[29].protein);
					foods2[29].fat = (3 * foods2[29].fat);
					foods2[29].calories = (3 * foods2[29].calories);
				}else if(calories <= 5000 && input[30].checked === true){
							carbohydrate += (2 * foods2[30].carbohydrate); 
							protein += (2 * foods2[30].protein); 
							fat += (2 * foods2[30].fat); 
							calories += (2 * foods2[30].calories);
			
							foods2[30].quantity = (3 * foods2[30].quantity);
							foods2[30].carbohydrate = (3 * foods2[30].carbohydrate);
							foods2[30].protein = (3 * foods2[30].protein);
							foods2[30].fat = (3 * foods2[30].fat);
							foods2[30].calories = (3 * foods2[30].calories);
						}
					
//2.984 kcal
		if(calories <= 5000 && input[35].checked === true){
			carbohydrate += foods2[35].carbohydrate; 
			protein += foods2[35].protein; 
			fat += foods2[35].fat; 
			calories += foods2[35].calories;
		
			foods2[35].quantity = (2 * foods2[35].quantity);
			foods2[35].carbohydrate = (2 * foods2[35].carbohydrate);
			foods2[35].protein = (2 * foods2[35].protein);
			foods2[35].fat = (2 * foods2[35].fat);
			foods2[35].calories = (2 * foods2[35].calories);
		}
//3.144 kcal
    	if(calories <= 5000 && input[11].checked === true){
   			 carbohydrate += (2 * foods2[11].carbohydrate); 
    		protein += (2 * foods2[11].protein); 
    		fat += (2 * foods2[11].fat); 
    		calories += (2 * foods2[11].calories);

    		foods2[11].quantity = (3 * foods2[11].quantity);
    		foods2[11].carbohydrate = (3 * foods2[11].carbohydrate);
    		foods2[11].protein = (3 * foods2[11].protein);
    		foods2[11].fat = (3 * foods2[11].fat);
    		foods2[11].calories = (3 * foods2[11].calories);
		}
//3.368 kcal
		if(calories <= 5000 && input[12].checked === true){
    		carbohydrate +=  foods2[12].carbohydrate; 
    		protein += foods2[12].protein; 
    		fat += foods2[12].fat; 
    		calories += foods2[12].calories;

    		foods2[12].quantity = (2 * foods2[12].quantity);
    		foods2[12].carbohydrate = (2 * foods2[12].carbohydrate);
   			 foods2[12].protein = (2 * foods2[12].protein);
    		foods2[12].fat = (2 * foods2[12].fat);
    		foods2[12].calories = (2 * foods2[12].calories);
		} 
		
//3.484 kcal


		console.log(calories)
		console.log(foods2[11])
		
	
	for( i = 0; i < input.length; i++){

		let tb = document.getElementById("tbDiet");
		let numberOfLines = tb.rows.length;

		if(loseWeight.checked === true){
			input.forEach(ipt => {
				if(ipt.checked === true){
					if(ipt.name === foods2[i].name){
						let line = tb.insertRow(numberOfLines);
						let cellTypeMeal = line.insertCell(0);
						let cellFood = line.insertCell(1);
						let cellQuantity = line.insertCell(2);
						let cellCarbohydrate = line.insertCell(3);
						let cellProtein = line.insertCell(4);
						let cellFat = line.insertCell(5);
						let cellCalories = line.insertCell(6);
						cellTypeMeal.innerHTML = foods2[i].typeMeal;
						cellFood.innerHTML = foods2[i].name;
						cellQuantity.innerHTML = `${foods2[i].quantity} ${foods2[i].unitOfMeasure}`;
						cellCarbohydrate.innerHTML = foods2[i].carbohydrate.toFixed(2);
						cellProtein.innerHTML = foods2[i].protein.toFixed(2);
						cellFat.innerHTML = foods2[i].fat.toFixed(2);
						cellCalories.innerHTML = foods2[i].calories.toFixed(2);

					}
					
				}
			})
		}
	}
}
	

