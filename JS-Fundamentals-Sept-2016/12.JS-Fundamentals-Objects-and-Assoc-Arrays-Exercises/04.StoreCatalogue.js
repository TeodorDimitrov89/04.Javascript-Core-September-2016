function storeCatalogue (productInput) {
	//Without nested Map();
	
	// let dataProduct = new Map ();
	// for (let product of productInput) {
	// 	let [productName,productPrice] = product.split (" : ");
	// 	productPrice = Number (productPrice);
	// 	dataProduct.set (productName, productPrice);
	// }
	// let sorted = Array.from (dataProduct).sort ();
	// let firstLetter = [];
	// for (let [key,value] of sorted) {
	// 	firstLetter.push (key[0]);
	// }
	// let unique = firstLetter.filter ((v, i, a) => a.indexOf (v) === i);
	// for (let i = 0; i < unique.length; i++) {
	// 	console.log (unique[i]);
	// 	for (let [key,value] of sorted) {
	// 		if (unique[i] == key[0]) {
	// 			console.log (`  ${key}: ${value}`);
	// 		}
	// 	}
	// }
	
	//With Nested Map();
	
	let initials = new Map ();

	for (let initial of productInput) {
		let product = initial.split (" : ");
		let productName = product[0];
		let productPrice = Number (product[1]);
		let init = productName[0];
		if (!initials.has (init)) {
			initials.set (init, new Map ());
		}
		if (!initials.get (init).has (productName)) {
			initials.get (init).set (productName, productPrice);
		}
	}

	function alphabeticallyCompare (a, b) {
		return a[0].toLowerCase().localeCompare (b[0].toLowerCase());

	}
	let sorted = Array.from (initials).sort (alphabeticallyCompare);

	for (let [key,value] of sorted) {
		console.log (key);

		let productData = Array.from(value).sort(alphabeticallyCompare);
		for (let [k,v] of productData) {
			console.log (`  ${k}: ${v}`);
		}
	}
}
storeCatalogue (
	[
		"Appricot : 20.4",
		"Fridge : 1500",
		"TV : 1499",
		"Deodorant : 10",
		"Boiler : 300",
		"Apple : 1.25",
		"Anti-Bug Spray : 15",
		"T-Shirt : 10"
	]);
