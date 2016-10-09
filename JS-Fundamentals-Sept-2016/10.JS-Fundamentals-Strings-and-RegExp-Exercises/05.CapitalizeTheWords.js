function capitalizeTheWords (input) {
	let text = input.join (' ');

	function toTitleCase (str) {
		return str.replace (/\w\S*/g, function (txt) {
			return txt.charAt (0).toUpperCase () + txt.substr (1).toLowerCase ();
		});
	}

	console.log (toTitleCase (text));


}
capitalizeTheWords (
	[
		"was that Easy? tRY thIs onE for SiZe!"
	]);

// function toTitleCase(str) {
// 	let convertToLower = str.replace(/\w+/g, lower)
// 	let result = convertToLower.replace(/\b\w/g, upper);
// 	console.log(result);
// 	function lower(str) {
// 		return str.toLowerCase();
// 	}
// 	function upper(str) {
// 		return str.toUpperCase();
// 	}
// }