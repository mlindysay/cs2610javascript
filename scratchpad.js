/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


var addText = function (sel, text) {
	var el = document.querySelector(sel);
	if (el.childNodes.length === 0) {
		var p = document.createElement('p');
		p.textContent = text;
		el.appendChild(p)
	}
}
;['yellow', 'blue', 'green', 'red'].map(
	function (color) {
	console.log(color);
	addText("." + color, color + " box")
});

var fib = function fibHelper(n) {
	if (n === 0) {
		return 0
	}
	else if (n === 1) {
		return 1
	}
	else {
		var first = fibHelper(n - 2)
		var second = fibHelper(n - 1)
		console.log("first=" + first + " second=" + second)
		return 	first + second
		}
}

var red = document.querySelector('.red')

var p = document.createElement('p')
red.appendChild(p)

var array = []
for (var i = 0; i < 11; i++) {
	array[i] = fib(i)
}

p.textContent = array.join(", ")


/*
Exception: TypeError: el is null
addText@Scratchpad/1:13:1
@Scratchpad/1:22:2
@Scratchpad/1:19:2
*/
/*
undefined
*/