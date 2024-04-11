export const generateRates = () => {
  const numbers: number[] = [];
  let currentNumber = 20;

  while (currentNumber <= 5000) {
    numbers.push(currentNumber);

    if (currentNumber < 100) {
      currentNumber += 1;
    } else if (currentNumber < 1000) {
      currentNumber += 10;
    } else {
      currentNumber += 100;
    }
  }

  return numbers;
};
