// Task 1.

const isValidInput = (str) => str.trim().length && !isNaN(str);

const isValidBase = (base) => isValidInput(base) && base >= 2 && base <= 36;

const convertToBase = (decimalNumber, base) => {
  if (!isValidInput(decimalNumber) || !isValidBase(base)) {
    return "Invalid input!";
  }

  const result = Number(decimalNumber).toString(base);

  return result;
};

const firstInput1 = prompt("Enter the first number:");
const firstInput2 = prompt("Enter the base for conversion:");

const decimalNumber = firstInput1.trim();
const base = firstInput2.trim();

const result = convertToBase(decimalNumber, base);

console.log(result);

// Task 2.

const secondInput1 = prompt("Enter the first number:");
const secondInput2 = prompt("Enter the second number:");

const calculateSumAndQuotient = (num1, num2) => {
  if (!isValidInput(num1) || !isValidInput(num2)) {
    return "Invalid input!";
  }

  const sumResult = Number(num1) + Number(num2);
  const quitentResult = num1 / num2;

  return `Answer: ${sumResult}, ${quitentResult}`;
};

const number1 = secondInput1.trim();
const number2 = secondInput2.trim();
console.log(calculateSumAndQuotient(number1, number2));
