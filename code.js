// Task 1.

const firstInput1 = prompt("Enter the first number:");
const firstInput2 = prompt("Enter the base for conversion:");

const convertToBase = (decimalNumber, base) => {
  if (isNaN(decimalNumber) || isNaN(base)) {
    return "Invalid input!";
  }

  const result = decimalNumber.toString(base);

  return result;
};

const decimalNumber = parseFloat(firstInput1);
const base = parseInt(firstInput2);

const result = convertToBase(decimalNumber, base);

console.log(result);

// Task 2.

const secondInput1 = prompt("Enter the first number:");
const secondInput2 = prompt("Enter the second number:");

const sumAndQuotient = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return "Invalid input!";
  }
  const sumResult = num1 + num2;
  const quitentResult = num1 / num2;

  return `Answer: ${sumResult}, ${quitentResult}`;
};

const number1 = parseFloat(secondInput1);
const number2 = parseFloat(secondInput2);

console.log(sumAndQuotient(number1, number2));