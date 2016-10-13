function autoEngineeringCompany (models) {
	let dataModels = new Map ();
	for (let product of models) {
		let [carBrand,carModel,producedCars] = product.split (" | ");
		producedCars = Number (producedCars);

		if (!dataModels.has (carBrand)) {
			dataModels.set (carBrand, new Map ());
		}

		let allProducedCars = dataModels.get (carBrand).get (carModel);
		if (allProducedCars) {
			producedCars = producedCars + allProducedCars;
		}
		dataModels.get (carBrand).set (carModel, producedCars);
	}
	for (let car of dataModels.keys()) {
		console.log (`${car}`);
		for (let [product,value] of dataModels.get(car)) {
			console.log (`###${product} -> ${value}`);
		}
	}
}
autoEngineeringCompany (
	[
		"Audi | Q7 | 1000",
		"Audi | Q6 | 100",
		"BMW | X5 | 1000",
		"BMW | X6 | 100",
		"Citroen | C4 | 123",
		"Volga | GAZ-24 | 1000000",
		"Lada | Niva | 1000000",
		"Lada | Jigula | 1000000",
		"Citroen | C4 | 22",
		"Citroen | C5 | 10"
	]);

