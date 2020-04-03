//Request a length of a side of a square from a user and display the perimeter of the square in the console.

let side = prompt('write a length');
let perimeter = side * 4;
console.log(perimeter);

//Request a user’s year of birth, count their age, and display the result to the console. Store the current year as a constant.

let birth_year = prompt('Enter your birth year');
const curr_year = 2020;
let age = curr_year - birth_year;
console.log(age);

//Request a distance in kilometers between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.

let distance = prompt('Enter distance (km)');
let time = prompt('Enter time you want to cover this distance within (hours)');
let speed = distance / time;
console.log(speed);

// Create a simple currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant. Then display the result in the console.

let converter = prompt('type in USD');
const EUR = 0.92;
let exchange_rate = EUR * converter;
console.log(exchange_rate);

//Request current time from a user in format HH:mm (HH is hour in a day from 00 to 23, mm are minutes in hour) and display how many hours and minutes are left until tomorrow.

// let time = prompt('Enter current time in format HH:mm');
// let time = '21:45';
console.log(time);
let hour = time.split(":")[0];
let minute = time.split(":")[1];
let remaininghour = 24 - hour - 1;
let remainingminutes = 60 - minute;
let timeleft = remaininghour + ' hours and ' + remainingminutes + ' minutes remaining.';
console.log(timeleft);

//A user types in the values of a and b for the formula a * x + b = 0 . The program has to calculate the x and display it in the console.

// let value = prompt('Enter a and b for formula a * x + b = 0');
// let x = value;
// console.log(x);

// note! you need + infront of prompt to turn the string to a number
let a = +prompt ('Enter a');
let b = +prompt ('Enter b');
let x = -b / a;
console.log(x);

