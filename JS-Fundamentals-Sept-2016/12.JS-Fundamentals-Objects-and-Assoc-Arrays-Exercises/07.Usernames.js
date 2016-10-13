function usernames (inputs) {
	let unique = inputs
		.sort (sortByAlphabetically)
		.filter ((v, i, a) => a.indexOf (v) === i);
	function sortByAlphabetically (a, b) {
		return (a.length - b.length) || a.localeCompare (b);
	}
	console.log (unique.join ('\n'));
}
usernames (
	[
		"Ashton",
		"Kutcher",
		"Kutcher",
		"Ariel",
		"Lilly",
		"Keyden",
		"Aizen",
		"Billy",
		"Billy",
		"Braston",
		"Braston",
		"Braston"
	]);
