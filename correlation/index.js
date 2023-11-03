const x = [14.2, 16.4, 11.9, 15.2, 18.5, 22.1, 19.4, 25.1, 23.4, 18.1, 22.6, 17.2];
const y = [215, 325, 185, 332, 406, 522, 412, 614, 544, 421, 445, 408];
const n = 12;

const meanX = x.reduce((a, b) => a + b) / x.length;
const meanY = y.reduce((a, b) => a + b) / y.length;

let numerator = 0;
let denominator1 = 0;
let denominator2 = 0;

for (let i = 0; i < x.length; i++) {
    numerator += (x[i] - meanX) * (y[i] - meanY);
    denominator1 += Math.pow(x[i] - meanX, 2);
    denominator2 += Math.pow(y[i] - meanY, 2);
}

const r = numerator / Math.sqrt(denominator1 * denominator2);
console.log(r);
