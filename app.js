function displayCurrentDateTime() {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    document.write("Current Date & Time: " + dateTimeString);function addNumbers(num1, num2) {
        return num1 + num2;
      }
      const sum = addNumbers(5, 7);
      console.log("Sum:", sum);
      
  }
  displayCurrentDateTime();
  function greetUser(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
  }
  greetUser("John", "Doe");
  function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = "Invalid operator";
    }
    return result;
  }
  const result = calculate(10, 5, '+');
  console.log("Result:", result);
  function squareNumber(number) {
    return number * number;
  }
  const squared = squareNumber(4);
  console.log("Squared:", squared);
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  const fact = factorial(5);
  console.log("Factorial:", fact);
  function countNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
  }
  countNumbers(1, 5);
  function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
      return x * x;
    }
    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);
    const hypotenuseSquare = baseSquare + perpendicularSquare;
    const hypotenuse = Math.sqrt(hypotenuseSquare);
    return hypotenuse;
  }
  const hypotenuseResult = calculateHypotenuse(3, 4);
  console.log("Hypotenuse:", hypotenuseResult);
  function calculateRectangleAreaWithValues(width, height) {
    return width * height;
  }
  const area1 = calculateRectangleAreaWithValues(5, 8);
  console.log("Area 1:", area1);
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  const isPalin = isPalindrome("madam");
  console.log("Is Palindrome:", isPalin);
  function capitalizeWords(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  }
  const inputStr = "the quick brown fox";
  const capitalizedStr = capitalizeWords(inputStr);
  console.log("Capitalized:", capitalizedStr);
  function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = "";
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  const longest = findLongestWord("Web Development Tutorial");
  console.log("Longest Word:", longest);
  function countLetterOccurrences(str, letter) {
    let count = 0;
    for (const char of str) {
      if (char === letter) {
        count++;
      }
    }
    return count;
  }
  const count = countLetterOccurrences("JSResourceS.com", "o");
  console.log("Occurrences:", count);
  function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
  }
  
  function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area.toFixed(2));
  }
  
  const radius = 5;
  calcCircumference(radius);
  calcArea(radius);
                      
    