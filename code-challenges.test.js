// ASSESSMENT 3: Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.


// a) Create a test with expect statements for each of the variables provided.
// pseudo code: 
// Use the jest syntax to create the test structure.
// Describe()- aplly the function in paranthesis named "fibonacci"
// it() - describe the intent of the test in plain words
// expect()-add the function name with the argument name
//.toEqual()-expected output: [1, 1, 2, 3, 5, 8]; [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacci", () => {
    it("Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
        expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// ReferenceError: greaterThan2 is not defined

// 29 | describe("fibonacci", () => {
// 30 |     it("Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
// > 31 |         expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])

// b) Create the function that makes the test pass.
// Pseudo: Create a function that takes the value of fibLength1 = 6 as the length of the array containing values of the fibonacci sequence.
// declare a function called fibonacci
//create an array with the value of 0 , 1
// use a for loop to create an iteration and use the given variable to be used as the length for the for loop
// within the for loop begin the iteration from 2
// the iteration should only last until it meets the given length number.

const fibonacci = (number) =>{
    let fibArray = [0, 1]
    for(let i = 2; i <= number; i++){
        fibArray.push(fibArray[i -2] + fibArray[i -1])
    } return fibArray.slice(1)
}

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// pseudo code: 
// Use the jest syntax to create the test structure.
// Describe()- aplly the function in paranthesis named: "leastToGreatest"
// it() - describe the intent of the test in plain words: Copy the instructions.
// expect()-add the function name with the argument: leastToGreatest(fullArr1) and leastToGreatest(fullArr2)
//.toEqual()-expected output: .toEqual([-9, 7, 9, 199]) and .toEqual([-823, 7, 23])

describe("leastToGreatest", () => {
    it("Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
        expect(leastToGreatest(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(leastToGreatest(fullArr2)).toEqual([-823, 7, 23])
    })
})

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// ReferenceError: leastToGreatest is not defined

// 68 | describe("leastToGreatest", () => {
// 69 |     it("Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
// > 70 |         expect(leastToGreatest(fullArr1)).toEqual([-9, 7, 9, 199])


// b) Create the function that makes the test pass.
//Pseudo:
// declare function variable named "leastToGreates"
// method- use the HOF .filter() to filter the values 
// use the relational and logical operators to set the condition of the iteration accepting the following: values must strictly equal to numbers only and(&&) values must not be divisble by 2 (% 2 !== 0) 
//

const leastToGreatest = (array) => {
    return array.sort((a, b)=> a - b).filter(value => typeof value === "number" && value % 2 !==0)

}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

describe("sumOfNumbers", () => {
    it("Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
        expect(sumOfNumbers(numbersToAdd1 )).toEqual([2, 6, 51, 60])
        expect(sumOfNumbers(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sumOfNumbers(numbersToAdd3)).toEqual([])
    })
})

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []
// ReferenceError: fnumbersToAdd1 is not defined

//       105 | describe("sumOfNumber", () => {
//       106 |     it("Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
//     > 107 |         expect(sumOfNumbers(fnumbersToAdd1 )).toEqual([2, 6, 51, 60])
          |              

// b) Create the function that makes the test pass.
//Pseudo:
//declare a function variable named sumOfNumbers
// declare the parameter array in the function
//method - use the high order function .map() to iterate the arguments/arrays
//withing the high order function we will apply the acumilating sum as the function: (sum => value => sum += value)(0)

const sumOfNumbers = (array) => {
    return array.map((sum => value => sum += value)(0))
}

 