//Q1.

// var num = parseInt(prompt("Enter number: "))
// if (num % 3 ==0){
//     alert("Number is divisible by 3")
// }
// else{
//     alert("Number is NOT divisible by 3")
// }

//Q2.

// var num = parseInt(prompt("Enter number: "))
// if (num%2 == 0 ){
//     alert("It is an even number ")
// }
// else if(num%2 != 0){
//     alert("It is an odd number")
// }

//Q3.

// var age = parseInt(prompt("Enter your age: "))

// if (age > 18){
//     alert("Old enough")
// }
// else{
//     alert("Too young")
// }

//Q4.
// var userName = prompt("Enter your full name: ")
// var myName = "Zohaib Faisal"

// if (userName == myName){
//     alert("Oh hy! You and I have the same name")
// }

//Q5.
// var num = parseInt(prompt("Enter number: "))
// if (num % 3 ==0){
//     alert("Number is divisible by 3")
// }
// else{
//     alert("Number is NOT divisible by 3")
// }

//Q6.

// var input = prompt("Enter a character:");

// var asciiCode = input.charCodeAt(0);

// if (asciiCode >= 48 && asciiCode <= 57) {
//     alert("Input is a number");
// }
// else if (asciiCode >= 65 && asciiCode <= 90) {
//     alert("Input is an uppercase letter");
// }
// else if (asciiCode >= 97 && asciiCode <= 122) {
//     alert("Input is a lowercase letter");
// }
// else {
//     alert("Input is neither a number nor a letter");
// }

//Q7.
// var num1 = parseFloat(prompt("Enter larger number: "))
// var num2 = parseFloat(prompt("Enter smaller number: ")) 
// var operation = prompt("Enter operation to continue: ")

// if (operation == "+"){
//     result = num1 + num2
//     alert(num1 + " "+ operation + " " + num2 + " " + "=" + " " + result )
// }
// else if(operation == "-"){
//     result = num1 - num2
//     alert(num1 + " "+ operation + " " + num2 + " " + "=" + " " + result )
// }
// else if (operation == "*"){
//     result = num1 * num2
//     alert(num1 + " "+ operation + " " + num2 + " " + "=" + " " + result )
// }
// else if (operation == "/"){
//     result = num1 / num2
//     alert(num1 + " "+ operation + " " + num2 + " " + "=" + " " + result )
// }
// else if (operation == "%" ){
//     result = num1 % num2 
//     alert(num1 + " "+ operation + " " + num2 + " " + "=" + " " + result )
// }

//Q8.

// var time = prompt("Enter time in 24 hours format: ")

// if (time>="0000" && time<"1200" ){
//     alert("Good morning!")
// }
// else if (time>="1200" && time<"1700" ){
//     alert("Good afternoon!")
// }
// else if (time>="1700" && time<"2100" ){
//     alert("Good evening!")
// }
// else if (time>="2100" && time<="2359" ){
//     alert("Good night!")
// }

//Q9.
// var year = parseInt(prompt("Enter a year in YYYY format:"));

// if ((year % 4 == 0 && year % 100 != 0) || (year % 400 === 0)) {
//     alert(year + " is a leap year!");
// } else {
//     alert(year + " is not a leap year.");
// }

//Q10.

// var password = prompt("Enter your password for register")

// var password2 = prompt("Enter your password for login")

// if (password2 ==""){
//     alert("Please enter your password")
// }
// else if(password2 == password){
//     alert("Correct! The password you entered matches the orignal password")
// }
// else if(password2 != password){
//     alert("Incorrect password")
// }

//Q11.
// var firstName = "Ali";

// if (firstName === "Fahad") {
//     document.write("Hello Fahad!");
// } else {
//     document.write("You are not Fahad");
// }

//Q12.

// var greeting; 
// var hour = 13;
// if (hour < 18) { 
//         greeting = "Good day";
//         alert(greeting)
// } 
// else{ 
//         greeting = "Good evening";
//         alert(greeting) 
//     }  

//Q13.
// var num1 = parseInt(prompt("Enter first number: "))
// var num2 = parseInt(prompt("Enter second number: "))

// if (num1 > num2){
//     alert("The larger number is: " + " " + num1)
// }
// else if (num2 > num1){
//     alert("The larger number is:" + " "+ num2)
// }
// else if (num1 == num2){
//     alert("Both numbers are equal")
// }
// else{
//     alert("Please enter a number")
// }

//Q14.
//  var num = parseFloat(prompt("Enter number: "))

// if (num == 0){
//     alert("Entered number is zero")
// }
// else if (num >0){
//     alert("Entered number is a positive number")
// }
// else if (num <0){
//     alert("Entered number is a negative num")
// }

//Q15.
// var currentHour = parseInt(prompt("Enter the current hour in 24-hour format: "));

// if (currentHour >= 6 && currentHour < 9) {
//     alert("Breakfast is served.");
// } else if (currentHour >= 11 && currentHour < 13) {
//     alert("Time for lunch.");
// } else if (currentHour >= 17 && currentHour < 20) {
//     alert("It's dinner time.");
// } else {
//     alert("Sorry, you'll have to wait, or go get a snack.");
// }

//Q16.
// var myVariable = 4;

// var variableType = typeof myVariable;

// if (variableType =="number") {
//         alert("The variable is of type number.");
// }
// else if (variableType == "string") {
//         alert("The variable is of type string.");
// }
// else if (variableType == "boolean") {
//         alert("The variable is of type boolean.");
// }
// else{
//     alert("The variable is of type undefined.");
// }

// Q17.

// var character = prompt("Enter a character:");
// var length = character.length;

// if (length > 1) {
//     alert("Enter a single character!!");
// } else if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//     alert("True");
// } else {
//     alert("False");
// }

//Q18.

// var num1 = parseFloat(prompt("Enter a number: "))
// var num2 = parseFloat(prompt("Enter second number: "))

// if (num1 > num2){
//     alert("True")
// }
// else if (num1 <= num2){
//     alert("False")
// }

//20.

// var age = parseInt(prompt("Enter your age: "))

// if (age < 18){
//     alert("Too young")
// }
// else{
//     alert("Old enough")
// }