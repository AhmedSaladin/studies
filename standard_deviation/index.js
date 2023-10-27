// n and x should be inserted by user
const n = 5;
const x = [1, 2, 3, 4, 5];
let a = 0;

x.forEach((e) => (a += e));

const m = a / n;
let s = 0;

x.forEach((e) => (s += (e - m) ** 2));

const b = s / n;
const r = Math.sqrt(b);

console.log(r);