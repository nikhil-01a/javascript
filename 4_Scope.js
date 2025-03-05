// There are 3 scopes in Javascript:

////////////////////////////////////////////////////////// 1. Global scope //////////////////////////////////////////////////////////

var a = "testVarAsGlobalScope";
const b = "tryConstAsGlobalScope";
let c = "tryLetAsGlobalScope";

// In a function
function testGlobalScope() {
  // All work
  console.log(a);
  console.log(b);
  console.log(c);
}

testGlobalScope();

// In a block
{
  let blockStatement = ": From Block";
  // All work
  console.log(a + blockStatement);
  console.log(b + blockStatement);
  console.log(c + blockStatement);
}

////////////////////////////////////////////////////////// 2. Function scope  //////////////////////////////////////////////////////////

function testFunctionScope() {
  var d = "testVarFromFunctionScope";
  let e = "testLetFromFunctionScope";
  const f = "testConstFromFunctionScope";
}

// console.log(d); // doesn't work
// console.log(e); // doesn't work
// console.log(f); // doesn't work

////////////////////////////////////////////////////////// 2. Block scope  //////////////////////////////////////////////////////////

{
  var g = "testVarFromBlockScope";
  let h = "testLetFromBlockScope";
  const i = "testConstFromBlockScope";
}

console.log(g); // Works
// console.log(h); // doesn't work
// console.log(i); // doesn't work

function testBlockScope() {
  console.log(g); // Works
  //console.log(h); // doesn't work
  //console.log(i); // doesn't work
}

testBlockScope();
