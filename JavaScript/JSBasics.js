// Javascript is loosely typed and will try and guess what the data type is of your variables

// let has a smaller/ better defined scope
// var is not a good choice for variiable declaration than let
// let is better at adbiding by variable scope limitations
var FirstName = "Charlie";
let LastName = "Cook";

// use constant variables - set the value and the value cannot change throughout the program
// best practice is to name constant variables in capitals as a visual cue
const PI = 3.14;

// functions 
// functions are bascially a chunk of reusable code that can be used anywhere in a program

function DisplayGreeting(){
    // any code here belongs to the DisplayGreeting function

    // easy way to test and display a function 
    // alert("Hi");

    // console.log my beloved
    console.log("Hello");
}



// call in the function to run the code
DisplayGreeting();

// to pass a parameter put into parenthesis seperated by commaa
function ShowGreeting(greeting){
    console.log(greeting);
}

// pass in a variable as the function parameter
ShowGreeting(FirstName);
// or hard-code the value to pass in
ShowGreeting("hiya");

// fuctions can also return a value
function AddNumbers(number1, number2){
    // adding numbers together and returning the sum back to the calling code
    return number1 + number2;
}

// call the function, set a variable to the result of the function since it returns a value
let Sum = AddNumbers(4, 5);
// display value in console
console.log(Sum);


// decision logic - if/else statements - different code paths that porgram can take
// variable to hold an age
let age = 19;

// you can have just an if statement
// if the statement in the paranthesis is true, then the code in the braces will execute
if (age < 0){
    console.log('Invalid age.');
}
else if (age >= 18 && age < 65){
    console.log('User is an adult.');
}
// add as many if else statements as you need. Though you probably don't need that many
else if(age < 1){
    console.log("User is a baby. How are you here?");
}
else if(age >= 65){
    console.log("User is a senior.");
}
// else is the catch all, if none of the other of/ of else statements are true, run the else statement.
else{
    console.log('User is a child.');
}
// be careful adding numbers in Javascript due to it being loosely typed.
console.log(age + "" + age);

let num1 = 5;
let num2 = "5";

// this is basically comparing if the characters are the same
// not caring about the behind the scenes data types
if (num1 == num2){
    console.log("numm1 and num2 are equal.")
}
// this is comparing data type and value
// strict equality
if (num1 === num2){
    console.log("=== num1 and num2 are equal")
}

/*
 6/2/2025
 6/9/2025
 */