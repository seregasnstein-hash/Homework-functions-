function greatesCommonDivisor (num1, num2){
    let greatesNum1 = [];
    let greatesNum2 = [];

    for(let i = 0; i < num1; i++){
        if(num1 % i == 0) greatesNum1.push(i);
    };
    for(let i = 0; i < num2; i++){
        if(num1 % i == 0) greatesNum2.push(i);
    };

    let number;

    for(let i = 0; i < greatesNum1.length; i++){
        if (greatesNum1[i] === greatesNum2[i]) number = greatesNum1[i];
    };

    return number;
};

console.log(greatesCommonDivisor(12, 18));
console.log(greatesCommonDivisor(100, 150));
console.log(greatesCommonDivisor(17, 37));
