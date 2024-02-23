const numbers = [23, 45, 64, 34, 69, 54, 90];
const total = numbers.reduce((previous,current) => previous + current,0);
console.log(total);

const sum = numbers.reduce((p, c) => p + c, 100);
console.log(sum);