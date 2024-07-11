const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function input(prompt) {
    return new Promise(resolve => readline.question(prompt, resolve));
  }
  
  // Functions
  function calculateExpression(expression) {
      expression = expression.replace(/\s/g, '');
      const numbers = expression.split(/[+-]/).map(Number);
      const operators = expression.split(/\d+/).filter(op => op !== '');
      
      let result = numbers[0];
      
      for (let i = 0; i < operators.length; i++) {
          if (operators[i] === '+') {
              result += numbers[i + 1];
          } else if (operators[i] === '-') {
              result -= numbers[i + 1];
          }
      }
      
      return result;
  }
  
  function flattenArray(arr) {
      return arr.reduce((flat, toFlatten) => 
          flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
  }
  
  function areAnagrams(str1, str2) {
      return str1.toLowerCase().split('').sort().join('') === 
             str2.toLowerCase().split('').sort().join('');
  }
  
  function removeDuplicates(arr) {
      return [...new Set(arr)];
  }
  
  function capitalizeWords(str) {
      return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  function fibonacci(n) {
      const sequence = [0, 1];
      while (sequence.length < n) {
          sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
      }
      return sequence;
  }
  
  class HashMap {
      constructor() {
          this.map = {};
      }
      
      put(key, value) {
          this.map[key] = value;
      }
      
      get(key) {
          return this.map[key];
      }
      
      remove(key) {
          delete this.map[key];
      }
  }
  
  function filterEvenNumbers(arr) {
      return arr.filter(num => num % 2 !== 0);
  }
  
  function toTitleCase(str) {
      return str.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
  }
  
  async function runAllFunctions() {
    // Question 1
    console.log("\nQuestion 1: FizzBuzz");
    const n = await input("Enter the number to FizzBuzz up to: ");
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
      else if (i % 3 === 0) console.log("Fizz");
      else if (i % 5 === 0) console.log("Buzz");
      else console.log(i);
    }
  
    // Question 2
    console.log("\nQuestion 2: Calculate Expression");
    const expression = await input("Enter an arithmetic expression: ");
    console.log(`Result: ${calculateExpression(expression)}`);
  
    // Question 3
    console.log("\nQuestion 3: Flatten Array");
    const nestedArray = JSON.parse(await input("Enter a nested array: "));
    console.log(`Flattened array: ${JSON.stringify(flattenArray(nestedArray))}`);
  
    // Question 4
    console.log("\nQuestion 4: Check Anagrams");
    const str1 = await input("Enter first string: ");
    const str2 = await input("Enter second string: ");
    console.log(`Are anagrams: ${areAnagrams(str1, str2)}`);
  
    // Question 5
    console.log("\nQuestion 5: Remove Duplicates");
    const arrayWithDuplicates = JSON.parse(await input("Enter an array with duplicates: "));
    console.log(`Array without duplicates: ${JSON.stringify(removeDuplicates(arrayWithDuplicates))}`);
  
    // Question 6
    console.log("\nQuestion 6: Capitalize Words");
    const sentence = await input("Enter a sentence: ");
    console.log(`Capitalized: ${capitalizeWords(sentence)}`);
  
    // Question 7
    console.log("\nQuestion 7: Fibonacci Sequence");
    const fibN = await input("Enter the number: ");
    console.log(`Fibonacci sequence: ${fibonacci(fibN)}`);
  
    // Question 8
    console.log("\nQuestion 8: HashMap");
    const hashMap = new HashMap();
    const key = await input("Enter a key to store: ");
    const value = await input("Enter a value to store: ");
    hashMap.put(key, value);
    console.log(`Stored value: ${hashMap.get(key)}`);
    hashMap.remove(key);
    console.log(`Value after removal: ${hashMap.get(key)}`);
  
    // Question 9
    console.log("\nQuestion 9: Filter Even Numbers");
    const numberArray = JSON.parse(await input("Enter an array of numbers : "));
    console.log(`Odd numbers: ${filterEvenNumbers(numberArray)}`);
  
    // Question 10
    console.log("\nQuestion 10: Title Case");
    const titleString = await input("Enter a string : ");
    console.log(`Title case: ${toTitleCase(titleString)}`);
  
    readline.close();
  }
  
  runAllFunctions();