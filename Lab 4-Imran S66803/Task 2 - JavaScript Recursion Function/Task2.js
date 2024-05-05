// Find the sum of digits of a number using recursion
function findSumOfDigits() {
    const number = document.getElementById("digits").value;
    
    // Basic check for empty input
    if (number === "") {
      document.getElementById("answer1").innerHTML = "Error: Please enter a number.";
      return;
    }
    
    // Check for non-numeric input
    if (isNaN(number)) {
        document.getElementById("answer1").innerHTML = "Error: Please enter a valid number.";
        return;
    }
  
    const sum = calculateSumOfDigits(number);
    document.getElementById("answer1").innerHTML = "Answer: " + sum;
}
  
// Calculate the sum of digits recursively
function calculateSumOfDigits(num) {
    // Base case: If the number is less than 10, return the number itself (single digit)
    if (num < 10) {
      return num;
    }
  
    // Get the last digit using modulo operator (%)
    const lastDigit = num % 10;
  
    // Recursively call the function with the remaining digits (excluding the last digit)
    const remainingDigitsSum = calculateSumOfDigits(Math.floor(num / 10));
  
    // Calculate the sum of the last digit and the sum from remaining digits
    const totalSum = lastDigit + remainingDigitsSum;
  
    return totalSum;
}

// Calculate x raised to the power y using recursion
function calculatePower() {
    const base = parseInt(document.getElementById("base").value);
    const power = parseInt(document.getElementById("power").value);
  
    // Basic check for invalid input (non-numeric or negative power)
    if (isNaN(base) || isNaN(power) || power < 0) {
        document.getElementById("answer2").innerHTML = "Error: Please enter valid numbers for base and non-negative power.";
        return;
    }
  
    const result = calculatePowerRecursive(base, power);
    document.getElementById("answer2").innerHTML = "Answer: " + result;
}
  
// Recursive function to calculate x raised to the power y
function calculatePowerRecursive(base, power) {
    // Base case: power is 0, anything raised to the power 0 is 1
    if (power === 0) {
      return 1;
    }
  
    // Recursive case: x raised to the power y is x multiplied by itself (y-1) times
    return base * calculatePowerRecursive(base, power - 1);
}