function greatesCommonDivisor (num1, num2){
    let greatesNum1 = [];
    let greatesNum2 = [];

    for(let i = 1; i <= num1; i++){
        if(num1 % i == 0) greatesNum1.push(i);
    };
    for(let i = 1; i <= num2; i++){
        if(num2 % i == 0) greatesNum2.push(i);
    };

    let number;

    for(let i = 0; i < greatesNum1.length; i++){
        for(let j = 0; j < greatesNum2.length; j++){
            if(greatesNum1[i] === greatesNum2[j]){
                number = greatesNum2[j];
            };
        };
    };

    return number;
};

console.log(greatesCommonDivisor(12, 18));
console.log(greatesCommonDivisor(100, 150));
console.log(greatesCommonDivisor(17, 37));
console.log(greatesCommonDivisor(22, 22));
