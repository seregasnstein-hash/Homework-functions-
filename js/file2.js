function exponentiation(number, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return number * exponentiation(number, exponent - 1);
  };
};

let result = exponentiation(2, 3);
let result2 = exponentiation(5, 5);
let result3 = exponentiation(3, 9);
let result4 = exponentiation(2, 5);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
