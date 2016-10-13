function cappyJuice (input) {
	let juiceData = new Map ();
	let bottles = new Map ();
	for (let data of input) {
		let [juiceName,juiceQuantity] = data.split (" => ");
		let quantity = Number (juiceQuantity);
		if (!juiceData.has (juiceName)) {
			juiceData.set (juiceName, 0);
		}

		juiceData.set (juiceName, juiceData.get (juiceName) + quantity);

		if(juiceData.get (juiceName)>= 1000) {
			let quantity = juiceData.get (juiceName);
			bottles.set(juiceName,Math.floor(quantity / 1000))
		}
	}
	let allJuice = Array.from (bottles);
	for (let [key,value] of allJuice) {
			console.log (key + " => " + value);
	}
}


// cappyJuice (
// 	[
// 		"Orange => 2000",
// 		"Peach => 1432",
// 		"Banana => 450",
// 		"Peach => 600",
// 		"Strawberry => 549"
// 	]);

cappyJuice (
	[
		"Kiwi => 234",
		"Pear => 2345",
		"Watermelon => 3456",
		"Kiwi => 4567",
		"Pear => 5678",
		"Watermelon => 6789"
	]);
