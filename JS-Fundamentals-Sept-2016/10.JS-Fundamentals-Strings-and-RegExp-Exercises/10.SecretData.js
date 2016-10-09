function secretData (inputData) {
	let text = inputData.join ('\n');
	let namePattern = /\*[A-Z][A-Za-z]*(?=\s|$)/;
	// let phonePattern = /\+[\d\-]{10}/;
	let phonePattern = /\+[0-9\-]{10}(?=\s|$)/;
	let idPattern = /![A-Za-z0-9]+(?=\s|$)/;
	let nameOfBasesPattern = /_[A-Za-z0-9]+(?=\s|$)/;

	// text.replace(namePattern,(x,g)=>"|".repeat (g.length))

	let execName = namePattern.exec (text);
	let execPhone = phonePattern.exec (text);
	let execId = idPattern.exec (text);
	let execBase = nameOfBasesPattern.exec (text);


	while (execName) {
		if (execName) {
			text = text.replace (namePattern, "|".repeat (execName[0].length));
		}
		execName = namePattern.exec (text)
	}
	while (execBase) {
		if (execBase) {
			text = text.replace (nameOfBasesPattern, "|".repeat (execBase[0].length));
		}
		execBase = nameOfBasesPattern.exec (text)
	}
	while (execId) {
		if (execId) {
			text = text.replace (idPattern, "|".repeat (execId[0].length));
		}
		execId = idPattern.exec (text)
	}
	while (execPhone) {
		if (execPhone) {
			text = text.replace (phonePattern, "|".repeat (execPhone[0].length));
		}
		execPhone = phonePattern.exec (text)
	}

	console.log (text);
}

secretData (
	[
		"Agent *Ivankov was in the room when it all happened.",
		"The person in the room was heavily armed.",
		"Agent *Iva had to act quick in order.",
		"He picked up his phone and called some unknown number.",
		"I think it was +555-49-796",
		"I can't really remember...",
		"He said something about finishing work with subject !2491a23BVB34Q and returning to Base _Aurora21",
		"Then after that he disappeared from my sight.",
		"As if he vanished in the shadows. _Aur",
		"A moment, !249 shorter than a second, later, I saw the person flying off the top floor.",
		"I really don't know what happened there.",
		"This is all  +555-49-796 I saw, that night.",
		"I cannot explain it myself..."
	]
);
