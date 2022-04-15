const calc = createCalculator(12);

function createCalculator(a) {
  let result = a;
  return {
    sum: (b) => result += b,
    sub: (b) => result -= b,
    mult: (b) => result *= b,
    div: (b) => result /= b,
    set: (b) => result = b
  }
}

console.log(calc.sum(7)); // 19
console.log(calc.mult(4)); // 76
console.log(calc.sub(6)); // 70
console.log(calc.div(10)); // 7
console.log(calc.set(73)); // 20