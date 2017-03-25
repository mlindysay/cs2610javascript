document.title = "Fib, Pell, Trib";

function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = fibHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = fibHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

var fib = function (n, node) {
	var fibTree = node.querySelector('div.fib');
	if (fibTree) {
		node.removeChild(fibTree);
	}
	
	var tree = fibHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}

function pellHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "pell");

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = pellHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " pell-left");
		
		var right = pellHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " pell-right");

		value = left.value + left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

var pell = function (n, node) {
	var pellTree = node.querySelector('div.pell');
	if (pellTree) {
		node.removeChild(pellTree);
	}
	
	var tree = pellHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "pell");
}

function tribHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "trib");

	// leaf nodes aka. base case
	if (n < 3) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 0;
		}
		else if (n === 2) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'trib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = tribHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " trib-left");
		
		var center = tribHelper(n - 2);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " trib-center");
		
		var right = tribHelper(n - 3);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " trib-right");

		value = left.value + center.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'trib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

var trib = function (n, node) {
	var tribTree = node.querySelector('div.trib');
	if (tribTree) {
		node.removeChild(tribTree);
	}
	
	var tree = tribHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "trib");
}

var createLink = function (text, link) {
		var linkContainer = document.createElement('div');
		linkContainer.setAttribute("class", "linkDiv");
	    var linkElement = document.createElement('a');
		linkElement.setAttribute("class", "linkElem");
		linkElement.setAttribute("href", link);
		linkElement.innerHTML = text;
		linkContainer.appendChild(linkElement);
		document.body.appendChild(linkContainer);
}

var style = document.createElement('style');
style.textContent = 
	"#fib {" +
	"	display: inline-block;" +
	"	width: 17000px;" +
	"}" +
	"" +
	".fib {" +
	"	background-color: rgba(0,0,255,0.1);" +
	"}" +
	"" +
	".fib-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".fib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	"#pell {" +
	"	display: inline-block;" +
	"	width: 17000px;" +
	"}" +
	"" +
	".pell {" +
	"	background-color: rgba(255,0,0,0.1);" +
	"}" +
	"" +
	".pell-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".pell-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	"#trib {" +
	"	display: inline-block;" +
	"	width: 17000px;" +
	"}" +
	"" +
	".trib {" +
	"	background-color: rgba(0,255,0,0.1);" +
	"}" +
	"" +
	".trib-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".trib-center {" +
	"	display: inline-block;" +
	"	margin: auto;" +
	"}" +
	"" +
	".trib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}" +
	".stuff-box {" +
	"	font-family: 'helvetica neue', helvetica, sans-serif;" +
	"	letter-spacing: 1px;" +
	"	text-transform: capitalize;" +
	"	text-align: center;" +
	"	padding: 3px 10px;" +
	"	margin: 10px;" +
	"	cursor: pointer;" +
	"	border-radius: 10px;" +
	"	border-width: 2px;" +
	"	border-style: solid;" +
	"}" +
	"" +
	".red {" +
	"	border-color: rgb(255,0,0);" +
	"	background:   rgb(180,60,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
	"}" +
	"" +
	".yellow {" +
	"	border-color: rgb(255,255,0);" +
	"	background:   rgb(180,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
	"}" +
	"" +
	".blue {" +
	"	border-color: rgb(0,0,255);" +
	"	background:   rgb(60,60,180);" +
	"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
	"}" +
	"" +
	".green {" +
	"	border-color: rgb(0,255,0);" +
	"	background:   rgb(60,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
	"}";

document.querySelector('body').appendChild(style);

// IIFE = Immediately-invoked function expression
// An anonymous function which we create, invoke, then throw away.
// It exists to meet these aims:
//   0) Avoid clobbering an existing variable named "div" in the global namespace. I don't have
//      another variable called "div" today, but this protects my webpage in the event that I
//      later incorporate other JavaScript programs from elsewhere.
//   1) Collect a few related program statements and keep them together in a single unit.
// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
//( function(color, id) {
//	var div = document.createElement('div');
//	div.setAttribute('class', color + ' shadowed stuff-box');
//	div.setAttribute('id', id);
//	document.body.appendChild(div);
//}('red', 'fib'));

//fib(11, document.querySelector('.red'))

//createLink("Click here to learn more about the Fibonacci numbers.", "https://oeis.org/A000045");

// divMakerMaker() is a function which returns a function
// divMakerMaker() takes two arguments and creates a function which requires
// no arguments of its own, but upon invocation "remembers" the functions it
// was created with
//var divMakerMaker = function(color, id) {
//	return function() {
//		var div = document.createElement('div');
//		div.setAttribute('class', color + ' shadowed stuff-box');
//		div.setAttribute('id', id);
//		document.body.appendChild(div);
//	}
//}

//var blueDiv = divMakerMaker('blue', 'pell');
//var yellowDiv = divMakerMaker('yellow', 'trib');

//blueDiv();
//createLink("Click here to learn more about the Pell numbers.", "https://oeis.org/A000129");
//yellowDiv();
//createLink("Click here to learn more about the Tribonacci numbers.", "https://oeis.org/A000073");
//pell(11, document.querySelector('.blue'))
//trib(11, document.querySelector('.yellow'))

var fibButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	fib(value, form.parentNode);
}

var fibSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Fib(' + me.value + ')';
}