function primeNumber(number) {
  let arr = [];
  let infoNumber;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      arr.push(i);
    }
  }

  if (arr.length === 2) {
    infoNumber = `${number} - ваше число простое`;
  } else {
    infoNumber = `${number} - ваше число составное`;
  }
  return infoNumber;
}

console.log(primeNumber(1));
console.log(primeNumber(2));
console.log(primeNumber(3));
console.log(primeNumber(10));
console.log(primeNumber(11));
console.log(primeNumber(6));
console.log(primeNumber(73));
console.log(primeNumber(81));
