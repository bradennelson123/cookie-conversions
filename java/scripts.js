// addition calculator function //
function add(number1, number2) {
  return number1 + number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1,number2);
alert(result);

// Subtraction calculator function //
function subtract(number1,number2) {
  return number1 - number2;
  }
  const number1 = parseInt(prompt("enter number:"));
  const number2 = parseInt(prompt("enter number:"));
  
  alert(subtract(number1,number2)); 

  // multiplication calculator //
  function multiply(number1,number2) {
    return number1 * number2;
    }
    const number1 = parseInt(prompt("enter number:"));
    const number2 = parseInt(prompt("enter number:"));
    
    alert(multiply(number1,number2));

    // Division calculator //
    function divide(number1,number2) {
      return number1 / number2;
      }
      const number1 = parseInt(prompt("enter number:"));
      const number2 = parseInt(prompt("enter number:"));
      
      alert(divide(number1,number2));
