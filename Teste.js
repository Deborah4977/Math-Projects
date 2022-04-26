const list = Array.from({ length: 100 }).map((val, index) => index);

function FizzBuzz() {
  list.forEach((value, index) => {
    if (value > 0) {
      if (Number.isInteger(value / 3) && Number.isInteger(value / 5)) {
        console.log("FizzBuzz", value);
      } else if (Number.isInteger(value / 3)) {
        console.log(`Fizz`, value);
      } else if (Number.isInteger(value / 5)) {
        console.log("Buzz", value);
      } else {
        console.log("Nada", value);
      }
    }
  });
}

FizzBuzz();

const fizzbuzz = () => {
  for (const item of list) {
    item % 3 === 0 && item % 5 == 0
      ? console.log(`fizzbuzz`)
      : item % 3 === 0
      ? console.log(`fizz`)
      : item % 5 === 0
      ? console.log(`buzz`)
      : console.log();
  }
};
