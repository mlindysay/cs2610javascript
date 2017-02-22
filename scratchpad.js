/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
function fibHelper(n) {
  var value;
  var div = document.createElement('div');
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
    var right = fibHelper(n - 2);
   
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
  var tree = fibHelper(n)
  node.appendChild(tree.html)
}
fib(6, document.querySelector('.red'))
