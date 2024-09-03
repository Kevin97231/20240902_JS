function example() {
  if (true) {
    let myLet = 5;
    const MY_CONST = 4;
    var myVar = 9;

    console.log("a L'intérieur du 'if'");
    console.log("myLet", myLet);
    console.log("myVar", myVar);
    console.log("MY_CONST", MY_CONST);
  }

  console.log("a L'extérieur du 'if'");
  //   console.log("myLet", myLet);
  console.log("myVar", myVar);
  //   console.log("MY_CONST", MY_CONST);
}

example();

var x = 10;

console.log("1", x); // 10
{
  let x = 2;
  console.log("2", x); // 2

  var y = 5;
  const Z = 6;
}

console.log("3", x); //   10 /  Nan
console.log("4", y); //  5
console.log("5", Z); // Err
