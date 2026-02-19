function maxNumber(number){
    let arr = [];

    arr.push(number);

    arr = String(arr[0]).split('').map(Number);

    let max_num = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(max_num < arr[i]) max_num = arr[i];
    }
    
    return max_num;
}

console.log(maxNumber(37829));
console.log(maxNumber(83274572341));
console.log(maxNumber(36525454324617));