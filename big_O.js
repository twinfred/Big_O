// O(n) - Linear Time
function linear(arr) {
  arr.forEach(element => {
    console.log(element);
  })
}

// O(1) - Constant Time

function constant(arr) {
  return arr[0]; 
}

// const arr = [1,2,3,4,5,6,7,8,9];

// linear(arr);
// console.log(constant(arr));


// Calculate Big O of...

// #1
function test(input) {
  let result = []; // O(1)
  const sorted = true; // O(1)
  input = input.split(''); // O(1)
  let current; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    let current = input[i]; // O(n) 
    result.push(current); // O(n)
  }

  return result; // O(1)
}
// Answer: O(5 + 3n) --> O(n)

// #2 
function test2(input) {
  const pi = 3.14; // O(1)
  let found = false; // O(1)
  let sorted = null; // O(1)
  let testCase = 0; // O(1)
  let secondCase = 1; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    test(input[i]); // O(n)
    sorted = false; // O(n)
    testCase++; // O(n)
    secondCase--; // O(n)
  }

  return testCase - secondCase; // O(1)
}
// Answer: O(6 + 5n) --> O(n)


// O(n^2)

const myArr = ['a', 'b', 'c', 'd'];

function countCombos(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log([arr[i], arr[j]]);
      count++;
    }
  }

  return count;
}

console.log(countCombos(myArr));


// 