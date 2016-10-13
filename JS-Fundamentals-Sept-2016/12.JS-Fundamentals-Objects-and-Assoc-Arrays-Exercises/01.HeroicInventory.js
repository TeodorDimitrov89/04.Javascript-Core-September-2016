function heroicInventory (input) {
	let heroData = [];
	for (let inventory = 0; inventory < input.length; inventory++) {
		let currentHeroArguments = input[inventory].split(/\s*\/\s*/);

		let heroName = currentHeroArguments[0];
		let heroLevel = Number(currentHeroArguments[1]);

		let currentHeroItems=[];
		if (currentHeroArguments.length > 2) {

			currentHeroItems = currentHeroArguments[2].split (", ");
			let hero = (
			{
				name: heroName,
				level: heroLevel,
				items: currentHeroItems
			});
			heroData.push(hero)
		}
	}
	console.log (JSON.stringify(heroData));
}
heroicInventory (
	[
		"Isacc / 25 / Apple, GravityGun",
		"Derek / 12 / BarrelVest, DestructionSword",
		"Hes / 1 / Desolator, Sentinel, Antara"
	]);
