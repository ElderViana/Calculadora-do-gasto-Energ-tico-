

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


console.log(foods2[0])


const input = document.querySelectorAll("[input]");
const loseWeight = document.getElementById("loseWeight")
const keepMuscleMass = document.getElementById("keepMuscleMass")
const gainMuscleMass = document.getElementById("gainMuscleMass")



console.log(input)


const chooseMenu = () => {
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

	for (i = 0; i < foodsCheckeds.length; i++){
		if(loseWeight.checked === true){                
			if(input[i].checked === true){         
				carbohydrate += foods2[i].carbohydrate; 
				protein += foods2[i].protein; 
				fat += foods2[i].fat; 
				calories += foods2[i].calories; 
			}
		}
		if(keepMuscleMass.checked === true){
			carbohydrate += foods2[i].carbohydrate; 
			protein += foods2[i].protein; 
			fat += foods2[i].fat; 
			calories += foods2[i].calories; 
		}
		if(gainMuscleMass.checked === true){
			carbohydrate += foods2[i].carbohydrate; 
			protein += foods2[i].protein; 
			fat += foods2[i].fat; 
			calories += foods2[i].calories; 
		}
	}
	
//Caso o usuário deseje perder peso;
	if(loseWeight.checked === true){
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
		//Para pessoas altas ou extremamente ativas
	/*
		if(calories <= 3285.18 && input[27].checked === true){
			carbohydrate += foods2[27].carbohydrate; 
			protein += foods2[27].protein; 
			fat += foods2[27].fat; 
			calories += foods2[27].calories;
	
			foods2[27].quantity = (2 * foods2[27].quantity);
			foods2[27].carbohydrate = (2 * foods2[27].carbohydrate);
			foods2[27].protein = (2 * foods2[27].protein);
			foods2[27].fat = (2 * foods2[27].fat);
			foods2[27].calories = (2 * foods2[27].calories);
		}

		if(calories <= 3285.18 && input[28].checked === true){
			carbohydrate += foods2[28].carbohydrate; 
			protein += foods2[28].protein; 
			fat += foods2[28].fat; 
			calories += foods2[28].calories;
	
			foods2[28].quantity = (2 * foods2[28].quantity);
			foods2[28].carbohydrate = (2 * foods2[28].carbohydrate);
			foods2[28].protein = (2 * foods2[28].protein);
			foods2[28].fat = (2 * foods2[28].fat);
			foods2[28].calories = (2 * foods2[28].calories);
		} else if(calories <= 3285.18 && input[29].checked === true){
					carbohydrate += (2 * foods2[29].carbohydrate); 
					protein += (2 * foods2[29].protein); 
					fat += (2 * foods2[29].fat); 
					calories += (2 * foods2[29].calories);
	
					foods2[29].quantity = (3 * foods2[29].quantity);
					foods2[29].carbohydrate = (3 * foods2[29].carbohydrate);
					foods2[29].protein = (3 * foods2[29].protein);
					foods2[29].fat = (3 * foods2[29].fat);
					foods2[29].calories = (3 * foods2[29].calories);
				}else if(calories <= 3285.18 && input[30].checked === true){
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
	}	
	
*/

	
	if(keepMuscleMass.checked === true){                      //Caso o usuário deseje manter a sua massa muscular
		if(calories <= 3514.61 && input[0].checked === true){
			carbohydrate += foods2[0].carbohydrate; 
			protein += foods2[0].protein; 
			fat += foods2[0].fat; 
			calories += foods2[0].calories;

			foods2[0].quantity = (2 * foods2[0].quantity);
			foods2[0].carbohydrate = (2 * foods2[0].carbohydrate);
			foods2[0].protein = (2 * foods2[0].protein);
			foods2[0].fat = (2 * foods2[0].fat);
			foods2[0].calories = (2 * foods2[0].calories);
		} else if(calories < 2514.61 && input[1].checked === true){
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

		if(calories <= 3514.61 && input[3].checked === true){
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

		if(calories <= 3514.61 && input[6].checked === true){
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

		if(calories <= 3514.61 && input[8].checked === true){
			carbohydrate += foods2[8].carbohydrate; 
			protein += foods2[8].protein; 
			fat += foods2[8].fat; 
			calories += foods2[8].calories;
		
			foods2[8].quantity = (2 * foods2[8].quantity);
			foods2[8].carbohydrate = (2 * foods2[8].carbohydrate);
			foods2[8].protein = (2 * foods2[8].protein);
			foods2[8].fat = (2 * foods2[8].fat);
			foods2[8].calories = (2 * foods2[8].calories);
		}

		if(calories <=3514.61  && input[11].checked === true){
			carbohydrate += foods2[11].carbohydrate; 
			protein += foods2[11].protein; 
			fat += foods2[11].fat; 
			calories += foods2[11].calories;
		
			foods2[11].quantity = (2 * foods2[11].quantity);
			foods2[11].carbohydrate = (2 * foods2[11].carbohydrate);
			foods2[11].protein = (2 * foods2[11].protein);
			foods2[11].fat = (2 * foods2[11].fat);
			foods2[11].calories = (2 * foods2[11].calories);
		}

		if(calories <= 3514.61 && input[12].checked === true){
			carbohydrate += foods2[12].carbohydrate; 
			protein += foods2[12].protein; 
			fat += foods2[12].fat; 
			calories += foods2[12].calories;
		
			foods2[12].quantity = (2 * foods2[12].quantity);
			foods2[12].carbohydrate = (2 * foods2[12].carbohydrate);
			foods2[12].protein = (2 * foods2[12].protein);
			foods2[12].fat = (2 * foods2[12].fat);
			foods2[12].calories = (2 * foods2[12].calories);
		}

		if(calories <= 3514.61  && input[15].checked === true){
			carbohydrate += foods2[15].carbohydrate; 
			protein += foods2[15].protein; 
			fat += foods2[15].fat; 
			calories += foods2[15].calories;
	
			foods2[15].quantity = (2 * foods2[15].quantity);
			foods2[15].carbohydrate = (2 * foods2[15].carbohydrate);
			foods2[15].protein = (2 * foods2[15].protein);
			foods2[15].fat = (2 * foods2[15].fat);
			foods2[15].calories = (2 * foods2[15].calories);
		} else if(calories < 3514.61  && input[16].checked === true){
					carbohydrate += (2 * foods2[16].carbohydrate); 
					protein += (2 * foods2[16].protein); 
					fat += (2 * foods2[16].fat); 
					calories += (2 * foods2[16].calories);
	
					foods2[16].quantity = (3 * foods2[16].quantity);
					foods2[16].carbohydrate = (3 * foods2[16].carbohydrate);
					foods2[16].protein = (3 * foods2[16].protein);
					foods2[16].fat = (3 * foods2[16].fat);
					foods2[16].calories = (3 * foods2[16].calories);
				} else if(calories < 3514.61  && input[17].checked === true){
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

		if(calories < 3514.61  && input[27].checked === true){
			carbohydrate += foods2[27].carbohydrate; 
			protein += foods2[27].protein; 
			fat += foods2[27].fat; 
			calories += foods2[27].calories;
	
			foods2[27].quantity = (2 * foods2[27].quantity);
			foods2[27].carbohydrate = (2 * foods2[27].carbohydrate);
			foods2[27].protein = (2 * foods2[27].protein);
			foods2[27].fat = (2 * foods2[27].fat);
			foods2[27].calories = (2 * foods2[27].calories);
		}

		if(calories < 3514.61  && input[28].checked === true){
			carbohydrate += foods2[28].carbohydrate; 
			protein += foods2[28].protein; 
			fat += foods2[28].fat; 
			calories += foods2[28].calories;
	
			foods2[28].quantity = (2 * foods2[28].quantity);
			foods2[28].carbohydrate = (2 * foods2[28].carbohydrate);
			foods2[28].protein = (2 * foods2[28].protein);
			foods2[28].fat = (2 * foods2[28].fat);
			foods2[28].calories = (2 * foods2[28].calories);
		} else if(calories < 3514.61  && input[29].checked === true){
					carbohydrate += (2 * foods2[29].carbohydrate); 
					protein += (2 * foods2[29].protein); 
					fat += (2 * foods2[29].fat); 
					calories += (2 * foods2[29].calories);
	
					foods2[29].quantity = (3 * foods2[29].quantity);
					foods2[29].carbohydrate = (3 * foods2[29].carbohydrate);
					foods2[29].protein = (3 * foods2[29].protein);
					foods2[29].fat = (3 * foods2[29].fat);
					foods2[29].calories = (3 * foods2[29].calories);
				}else if(calories < 3514.61  && input[30].checked === true){
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
	}

	//calorias adicionais para pessoas altas ou extremamente ativas
/*
	if(calories <= 4285.18 && input[0].checked === true){   
		carbohydrate += foods2[0].carbohydrate; 
		protein += foods2[0].protein; 
		fat += foods2[0].fat; 
		calories += foods2[0].calories;

		foods2[0].quantity = (2 * foods2[0].quantity);
		foods2[0].carbohydrate = (2 * foods2[0].carbohydrate);
		foods2[0].protein = (2 * foods2[0].protein);
		foods2[0].fat = (2 * foods2[0].fat);
		foods2[0].calories = (2 * foods2[0].calories);
	} else if(calories <= 4285.18 && input[1].checked === true){
				carbohydrate += foods2[1].carbohydrate; 
				protein += foods2[1].protein; 
				fat += foods2[1].fat;
				calories += foods2[1].calories;

				foods2[1].quantity = (2 * foods2[1].quantity);
				foods2[1].carbohydrate = (2 * foods2[1].carbohydrate);
				foods2[1].protein = (2 * foods2[1].protein);
				foods2[1].fat = (2 * foods2[1].fat);
				foods2[1].calories = (2 * foods2[1].calories);
			*/	}
							
											






	console.log(calories)
	





	if(gainMuscleMass.checked === true){
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
		} else if(calories < 2514.61 && input[1].checked === true){
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

		if(calories <= 2520 && input[7].checked === true){
			carbohydrate += (3 * foods2[7].carbohydrate); 
			protein += (3 * foods2[7].protein); 
			fat += (3 * foods2[7].fat); 
			calories += (3 * foods2[7].calories);

			foods2[7].quantity = (4 * foods2[7].quantity);
			foods2[7].carbohydrate = (4 * foods2[7].carbohydrate);
			foods2[7].protein = (4 * foods2[7].protein);
			foods2[7].fat = (4 * foods2[7].fat);
			foods2[7].calories = (4 * foods2[7].calories);
		}

		if(calories <= 2520 && input[13].checked === true){
			carbohydrate += (3 * foods2[13].carbohydrate); 
			protein += (3 * foods2[13].protein); 
			fat += (3 * foods2[13].fat); 
			calories += (3 * foods2[13].calories);

			foods2[13].quantity = (4 * foods2[13].quantity);
			foods2[13].carbohydrate = (4 * foods2[13].carbohydrate);
			foods2[13].protein = (4 * foods2[13].protein);
			foods2[13].fat = (4 * foods2[13].fat);
			foods2[13].calories = (4 * foods2[13].calories);
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
		} else if(calories < 2514.61 && input[16].checked === true){
					carbohydrate += (2 * foods2[16].carbohydrate); 
					protein += (2 * foods2[16].protein); 
					fat += (2 * foods2[16].fat); 
					calories += (2 * foods2[16].calories);
	
					foods2[16].quantity = (3 * foods2[16].quantity);
					foods2[16].carbohydrate = (3 * foods2[16].carbohydrate);
					foods2[16].protein = (3 * foods2[16].protein);
					foods2[16].fat = (3 * foods2[16].fat);
					foods2[16].calories = (3 * foods2[16].calories);
				} else if(calories < 2514.61 && input[17].checked === true){
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
	
		if(calories <= 2520 && input[18].checked === true){
				carbohydrate += (3 * foods2[18].carbohydrate); 
				protein += (3 * foods2[18].protein); 
				fat += (3 * foods2[18].fat); 
				calories += (3 * foods2[18].calories);
	
				foods2[18].quantity = (4 * foods2[18].quantity);
				foods2[18].carbohydrate = (4 * foods2[18].carbohydrate);
				foods2[18].protein = (4 * foods2[18].protein);
				foods2[18].fat = (4 * foods2[18].fat);
				foods2[18].calories = (4 * foods2[18].calories);
		}

		if(calories < 2514.61 && input[27].checked === true){
			carbohydrate += foods2[27].carbohydrate; 
			protein += foods2[27].protein; 
			fat += foods2[27].fat; 
			calories += foods2[27].calories;
	
			foods2[27].quantity = (2 * foods2[27].quantity);
			foods2[27].carbohydrate = (2 * foods2[27].carbohydrate);
			foods2[27].protein = (2 * foods2[27].protein);
			foods2[27].fat = (2 * foods2[27].fat);
			foods2[27].calories = (2 * foods2[27].calories);
		}

		if(calories < 2514.61 && input[28].checked === true){
			carbohydrate += foods2[28].carbohydrate; 
			protein += foods2[28].protein; 
			fat += foods2[28].fat; 
			calories += foods2[28].calories;
	
			foods2[28].quantity = (2 * foods2[28].quantity);
			foods2[28].carbohydrate = (2 * foods2[28].carbohydrate);
			foods2[28].protein = (2 * foods2[28].protein);
			foods2[28].fat = (2 * foods2[28].fat);
			foods2[28].calories = (2 * foods2[28].calories);
		} else if(calories < 2514.61 && input[29].checked === true){
					carbohydrate += (2 * foods2[29].carbohydrate); 
					protein += (2 * foods2[29].protein); 
					fat += (2 * foods2[29].fat); 
					calories += (2 * foods2[29].calories);
	
					foods2[29].quantity = (3 * foods2[29].quantity);
					foods2[29].carbohydrate = (3 * foods2[29].carbohydrate);
					foods2[29].protein = (3 * foods2[29].protein);
					foods2[29].fat = (3 * foods2[29].fat);
					foods2[29].calories = (3 * foods2[29].calories);
				}else if(calories < 2514.61 && input[30].checked === true){
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
	}		



	console.log(foods2[0])





console.log(calories)
console.log(foodsCheckeds)
















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
*/

console.log(input.checked)


















































/*
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
*/

/*

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
*/

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
/*	for(let i = 0; i < input.length; i++){															//console.log(input[0].checked)
		if(loseWeight.checked === true){
			if(input[0].checked || input[1].checked === true){
				console.log("hello");
			}
		}
console.log("oi");
	} */

/*

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
				



				/*
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
	*/
	
/*
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
			/*
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
 


*/

/*
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
*/

/*
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






































































