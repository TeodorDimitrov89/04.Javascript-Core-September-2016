function findOccOfWordInSentence ([text,word]) {
	[text, word] = [text, word];
	let regex = new RegExp ('\\b' + word + '\\b', 'ig');
	let match = text.match (regex) || [];
	return match.length;

	// if (match != null) {
	// 	console.log (match.length);
	// }
	// else {
	// 	console.log ("0");
	// }
}
console.log (findOccOfWordInSentence (
	[
		"How do you plan on achieving that? How? How can you even think of that?",
		"how"

	]));
// findOccOfWordInSentence (
// 	[
// 		"There was one. Therefore I bought it. I wouldn’t buy it otherwise.",
// 		"there"
// 	])

