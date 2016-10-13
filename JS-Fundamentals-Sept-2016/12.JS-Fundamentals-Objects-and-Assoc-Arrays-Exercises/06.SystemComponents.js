function systemComponents (input) {
	let systemData = new Map ();

	for (let component of input) {
		let [systemName,componentName,subcomponentName] = component.split (" | ");

		if (!systemData.has (systemName)) {
			systemData.set (systemName, new Map ());
			systemData.get(systemName).set(componentName,[]);
			systemData.get(systemName).get(componentName).push(subcomponentName);
		}

		else if (!systemData.get (systemName).has(componentName)) {
			systemData.get (systemName).set(componentName,[]);
			systemData.get(systemName).get(componentName).push(subcomponentName);

		}
		else {
			systemData.get(systemName).get(componentName).push(subcomponentName);
		}
	}

	function sortedMap(a,b) {
		let sorted = systemData.get(b).size - systemData.get(a).size;
		if(sorted === 0) {
			sorted = a.toLowerCase().localeCompare(b.toLowerCase())
		}
		return sorted;
	}

	let sortedSystem = Array.from(systemData.keys()).sort((a,b) => sortedMap(a,b));

	for (let system of sortedSystem ){
		console.log (system);
		let componentsSorted = Array.from(systemData.get(system).keys())
			.sort((c1, c2) =>systemData.get(system)
				.get(c2).length - systemData.get(system).get(c1).length);
		for(let component of componentsSorted) {
			console.log(`|||${component}`);
			systemData.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
		}
	}
}
systemComponents (
	[
		"SULS | Main Site | Home Page",
		"SULS | Main Site | Login Page",
		"SULS | Main Site | Register Page",
		"SULS | Judge Site | Login Page",
		"SULS | Judge Site | Submittion Page",
		"Lambda | CoreA | A23",
		"SULS | Digital Site | Login Page",
		"Lambda | CoreB | B24",
		"Lambda | CoreA | A24",
		"Lambda | CoreA | A25",
		"Lambda | CoreC | C4",
		"Indice | Session | Default Storage",
		"Indice | Session | Default Security"
	]);

// systemComponents (
// 	[
// 		"Lambda | CoreA | A23",
// 		"Lambda | CoreA | A25",
// 		"SULS | Digital Site | Login Page"
//
// 	]);