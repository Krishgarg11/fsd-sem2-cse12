let num = [1,2,3,4,5];
let filterevennum = num.filter(num =>num%2==0);
console.log(filterevennum);

let sum = [1,2,3,4,5];
let total = sum.reduce((accumulator, currentValue)=> accumulator + currentValue,2);
console.log(total);