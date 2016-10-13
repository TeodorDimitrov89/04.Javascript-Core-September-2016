function JSONTable (input) {

	let html='<table>\n';
	for (let line of input) {
		let str = JSON.parse(line);

		html+='    <tr>\n';
		html+=`        <td>${escapeHTML(str.name)}</td>\n`;
		html+=`        <td>${escapeHTML(str.position)}</td>\n`;
		html+=`        <td>${escapeHTML(str.salary)}</td>\n`;
		html+='    <tr>\n';
	}
	html+='</table>\n';
	function escapeHTML (htmlTag) {
		let escape=new String(htmlTag);
		return escape.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');

		// escape.replace()
	}
	console.log (html);
}
JSONTable(
	[
		'{"name":"Pesho","position":"&&&&Promenliva","salary":100000}',
		'{"name":"Teo","position":"Lecturer","salary":1000}',
		'{"name":"Georgi","position":"Lecturer","salary":1000}'
	]
);
