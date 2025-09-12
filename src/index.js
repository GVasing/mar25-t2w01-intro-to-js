console.log("Hello World from the index.js file.");

// // #region Basic conditional logic and for loops

// let customPortNumber = null;

// // const PORT = customPortNumber || 5000;
// const PORT = customPortNumber ??= 5000;

// // console.log("Port is " + PORT);
// console.log("Custom port number is " + customPortNumber);

// let dinner = "butter chicken";

// // Loose equality, dinner will be coerced into a string.
// if (dinner == "butter chicken") {
//     console.log("I'm full")
// } else {
//     console.log("I'm ready for dessert")
// }

// let luckyNumber = 42;

// // Strict equality, comparison will not be true.
// if (luckyNumber === "42") {
//     console.log("Lucky number is the answer")
// } else {
//     console.log("Lucky number is nice, sure, but ehh...")
// }

// // if (dinner == "butter chicken") console.log("I'm full")

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

// let fruits = ["apple", "mango", "banana"]

// // FOR loops are best for performance
// for (let index = 0; index < fruits.length; index++) {
//     const fruit = fruits[index];
//     console.log(fruit);
// }

// // FOREACH is better for readability for devs, but it's a wrapper around FOR, so it's slower than FOR
// fruits.forEach(fruit => {
//     console.log(fruit);
// });

// //#endregion

// //#region Functions

// function examplefunction(){
//     console.log("Function code happens here");
// }

// examplefunction();

// function messageRepeater(messageToRepeat){
//     console.log(messageToRepeat + messageToRepeat + messageToRepeat);
//     console.log("Arrow function here.  Here is the value of this:" + this);
// }

// for (let index = 0; index < 2; index++) {
//     messageRepeater("Hello ");
// }

// let favouriteDinners = [
//     "palak paneer",
//     "katsu curry",
//     "dumplings",
//     "lagham",
//     "lentil bolognese"
// ]

// // favouriteDinners.forEach(dinner => {
// //     messageRepeater(dinner);
// // })

// favouriteDinners.forEach(dinner => messageRepeater(dinner));

// const messageRepeaterArrowFunction = (messageToRepeat) => {
//     console.log("Arrow function here.  Here is the value of this:" + this);
// }
// messageRepeaterArrowFunction("bananas")

// //#endregion


//#region Classes

class ExampleClass {
    constructor(){
        console.log("ExampleClass instance created.")
    }

    messageRepeater = (messageToRepeat) => {
        console.log(messageToRepeat + messageToRepeat + messageToRepeat)
        console.log("Arrow function of class instance has a value for this of: " + this);
    }
}

let exampleInstance = new ExampleClass();

console.log(exampleInstance);
console.log(typeof exampleInstance);
exampleInstance.messageRepeater("bananas");

function functionThatThrowsAnError() {
    throw new Error("example error")
}

try {
    let exampleError = functionThatThrowsAnError();
    console.log("Example error value" + exampleError);
} catch (error) {
    console.log("Caught error is: " + error);
}

// let exampleError = functionThatThrowsAnError()
// console.log("Example error value" + exampleError);

function adder(num1, num2) {
    return num1 + num2
}

let result = adder(1, 1)
console.log("Result is: " + result);
console.log(result == 2);

//#endregion 