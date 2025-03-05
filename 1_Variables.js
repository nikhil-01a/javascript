/*

We have these 3 variables:
1. Const: Block scope, cannot be reassigned, doesn't support redeclaration
2. Let: Block scope, can be reassigned, doesn't support redeclaration
3. Var: Function or Global scoper, can be reassigned, supports redeclaration

*/

//////////////////////////////////////////////////// const /////////////////////////////////////////////////

const x = 7;
if (x < 7) {
  const y = 9;
}

console.log(x);

// console.log(y); y not defined error
// x = 6; x cannot be reassigned error
// const x = 6; x cannot be redclared error

//////////////////////////////////////////////////// let /////////////////////////////////////////////////

let m = 7;
if (m < 7) {
  let n = 6;
}

m = 6;

console.log(m);

// console.log(n); n is not defined error
// const m = 5; m cannot be redeclared error

//////////////////////////////////////////////////// var /////////////////////////////////////////////////

var r = 2;
function test() {
  var p = 1;

  if (p < 4) {
    var q = 3;
  }
  console.log(q);
  console.log(r);
  var p = 10;
  console.log(p);

  z = 1123; // Implicit global variable, it is not let, const or var
  console.log(z);

  s = 12;
  var s;
  console.log(s);
}

test();
// console.log(p); p is not defined (Functional scope)
