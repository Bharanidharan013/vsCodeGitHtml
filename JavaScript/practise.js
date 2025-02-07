/*Assignment
Assignment #: 17
Topic : HTML ,CSS

7. Logical Operators
a. Let's say Sarah is looking for a new country to live in. She wants to live in
a country that speaks english, has less than 50 million people and is not
an island.
b. Write an if statement to help Sarah figure out if your country is right for
her. You will need to write a condition that accounts for all of Sarah's
criteria.
c. If yours is the right country, log a string like this: 'You should live in
Portugal :)'. If not, log 'Portugal does not meet your criteria :('
d. Probably your country does not meet all the criteria. So go back and
temporarily change some variables in order to make the condition true
(unless you live in Canada :D).

8. The switch Statement
Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'

9. The Conditional (Ternary) Operator
a. If your country's population is greater than 33 million, use the ternary
operator to log a string like this to the console: 'Portugal's population is
above average'. Otherwise, simply log 'Portugal's population is below
average'.

10. Functions
a. Write a function called 'describeCountry' which takes three parameters: 'country',
'population' and 'capitalCity'. Based on this input, the function returns a string with
this format: 'Finland has 6 million people and its capital city is Helsinki'
b. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console.
c. The world population is 7900 million people. Create a function declaration called
'percentageOfWorld1' which receives a 'population' value, and returns the
percentage of the world population that the given population represents. For
example, China has 1441 million people, so it's about 18.2% of the world
population. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100.

11.Arrays
a. Create an array containing 4 population values of 4 countries of your choice. You
may use the values you have been using previously. Store this array into a variable
called 'populations'
b. Log to the console whether the array has 4 elements or not (true or false)
c. Create an array called 'percentages' containing the percentages of the world
population for these 4 population values. Use the function 'percentageOfWorld1'
that you created earlier to compute the 4 percentage values.

12. Basic Array Operations (Methods)
a. Create an array containing all the neighbouring countries of a country of
your choice. Choose a country which has at least 2 or 3 neighbours. Store
the array into a variable called 'neighbours'
b. At some point, a new country called 'Utopia' is created in the
neighbourhood of your selected country. So add it to the end of the
'neighbours' array Unfortunately, after some time, the new country is
dissolved. So remove it from the end of the array
c. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
d. Change the name of one of your neighbouring countries. To do that, find
the index of the country in the 'neighbours' array, and then use that index
to change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'. */

// 13. Introduction to Objects
// a. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and 'neighbours'.
// b. Using the above object , log a string like this to the console: 'Finland has 6
// million finnish-speaking people, 3 neighbouring countries and a capital called
// Helsinki.'
// c. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.,log the values to the
// console.
// d. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// one , but this time using the 'this' keyword.
// e. Call the 'describe' method
// f. Add a method called 'checkIsland' to the 'myCountry' object. This method will
// set a new property on the object, called 'isIsland'.'isIsland' will be true if there
// are no neighbouring countries, and false if there are. Use the ternary operator
// to set the property.

// 14. Iteration: The for Loop
// a. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.
// b. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier. Confirm that
// 'percentages2' contains exactly the same values as the 'percentages' array as
// defined in the arrays section.
// c. Store this array of arrays into a variable called 'listOfNeighbours' [['Canada',
// 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// d. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country.

// 15. Date
// a. A user enters their date of birth while signing up for a service. Write a
// JavaScript program to calculate and display their current age.
// b. A scheduling application needs to display the day of the week for selected
// dates. Write a JavaScript program that takes a date as input and returns the
// corresponding day of the week.
// c. A calendar application needs to determine how many days are in a specific
// month of a particular year. Write a JavaScript program to return the number of
// days in a given month and year.
// d. In a financial application, reports are generated for the start and end of the
// month. Write a JavaScript program to get the first and last day of the current
// month.
// e. A web application needs to display dates in different formats (e.g.,
// MM/DD/YYYY, YYYY-MM-DD, DD-MM-YYYY). Write a JavaScript function to
// format a given date in multiple styles.

// 16. Strings
// a. You are developing a web application where users input their phone numbers, but
// some users mistakenly include special characters like dashes (-) or parentheses
// (()). Write a JavaScript code to clean up the phone number by removing these
// unwanted characters from the string.
// b. You are building a search feature for an e-commerce website, and you need to sort
// product names alphabetically to improve user experience. Write a JavaScript
// program to sort the characters of a given string in ascending order.
// c. You are developing a product catalog for an e-commerce website, and you need
// to organize product names in alphabetical order for better search and display.
// Write a JavaScript program to sort an array of strings in ascending order.
// d. You are building a username validation feature for a website and want to check if
// a user's chosen username is a palindrome for uniqueness. Write a JavaScript
// program to verify whether a given string is a palindrome.
// e. Given a string that contains multiple words separated by non-alphabetic
// characters, split the string into individual words.
// f. Convert a string to camelCase, where the first word is lowercase and the following
// words have the first letter capitalized.
// g. Check if a string contains all the words in a list of words, returning true if all are
// present.
// h. Given an array of strings, concatenate them in all possible orders, returning the
// lexicographically smallest order.
// i. Given an array of strings, concatenate them in all possible orders, returning the
// lexicographically smallest order.
// j. Find all occurrences of a substring within a larger string and return the starting
// positions of each occurrence.
// k. Given a string, replace all occurrences of a word with another, but only if the word
// is not surrounded by alphabetic characters.
// l. Given a string containing words separated by varying amounts of spaces,
// normalize the string by removing extra spaces between the words and any leading
// or trailing spaces.

// 1. Declare variables called 'country', 'continent' and 'population' and assign their values
// according to your own country (population in millions). Log their values to the console.

var country="India";
var continent="Asia";
var population=140;
console.log(country);
console.log(continent);
console.log(population+"million");

// 2. Declare a variable called 'isIsland' and set its value according to your country. The
// variable should hold a Boolean value. Also declare a variable 'language', but don't
// assign it any value yet.Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console.

var isIsland=true;
var language;

console.log("---------------");
console.log(typeof(isIsland));
console.log(typeof(population));
console.log(typeof(country));
console.log(typeof(language));

// 3. Set the value of 'language' to the language spoken where you live (some countries
//     have multiple languages, but just choose one). Consider which variables should be
//     const variables (which values will never change, and which might change?). Then,
//     change these variables to const. Try to change one of the changed variables now, and
//     observe what happens.

console.log("---------------");

language="Tamil";
// language="hindi";

console.log(language);
console.log("---------------");

// 4. Basic Operators:
// a. If your country split in half, and each half would contain half the population,
//  then how many people would live in each half?
// b. Increase the population of your country by 1 and log the result to the console
// c. Finland has a population of 6 million. Does your country have more people than
//  Finland?
// d. The average population of a country is 33 million people. Does your country
//  have less people than the average country?
// e. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'.
// f. Recreate the 'description' variable as above , this time using the template literal
// syntax.

var countryPopulation=1458377223;
var finland=6000000;
var avg=3000000;
var description="Portugal is in Europe, and its 11 million people speak portuguese";
console.log(countryPopulation/2);
console.log(countryPopulation+1);
console.log(countryPopulation>finland);
console.log(countryPopulation<avg);
console.log(description);
description=""
console.log("---------------");

// 5. Predict the result of these 5 operations without executing them:
// a. '9' - '5';
// b. '19' - '13' + '17';
// c. '19' - '13' + 17;
// d. '123' < 57;
// e. 5 + 6 + '4' + 9 - 4 - 2;

console.log('9'-'5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
console.log("---------------");

// 6. Equality Operators: == vs. ===
// a. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country have?');
// b. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// c. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater
// than 1
// d. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// e. Test the code with different values of 'numNeighbours', including 1 and 0.
// f. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// g. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// h. Reflect on why we should use the === operator and type conversion in this
// Situation.

var numNeighbours=(prompt("How many neighbour countries does your country have?"));

if(numNeighbours==1)
    console.log("Only 1 border");
else
    if(numNeighbours>1)
        console.log("More than 1 borders")
else
    console.log("No borders")

if (numNeighbours === 1) {
    console.log('Only 1 border!');
  } else if (numNeighbours > 1) {
    console.log('More than 1 border');
  } else {
    console.log('No borders');
  }
   
numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}


console.log("---------------");
