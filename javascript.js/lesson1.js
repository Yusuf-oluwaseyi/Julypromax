// javascript lessons

// performing a function that interchange variables
function test () {
    var a = 3;
    var b = 8;

    // solution
    var c = a;
    a = b;
    b = c;

    console.log("a is " + a);
    console.log("b is " + b);
}
test ();

// Using .length to count the number of string or character

var tweet = prompt("Tweet");
var tweetCount = tweet.length
alert("You have written " + tweet.length + " character" + " You have " + (140-tweet.length) + " Remaining");

// another solution

alert("You have written " + tweet.length + " character" + " You have " + (140-tweet.length) + " Remaining");

// another task on slice 
var tweet = prompt("Tweet");
var tweetUnder10 = tweet.slice(0,10);
alert(tweet.slice(0,10));
alert ("You have written " + tweet.length + " character" + " You have " + (50-tweetUnder10) + " Remaining");

// another solution

var tweet = alert(prompt("Tweet").slice(0,10));


// using .toUpperCase and .toLowercase()
var name = prompt("What is your name");
firstLetter = name.slice(0,1);
rest = name.slice(1);
var newName = alert("Welcome " + firstLetter.toUpperCase() + rest.toLowerCase());

// calculating dog years(testing integers)

var dogAge = prompt("What is your dog age");
var humanAge = (dogAge - 2)*4 + 21;
alert("The human age is " + humanAge);

// learning functions and how to input in a function

var cost = 2;
function getMilk(money) {
  alert("I can buy " + Math.floor(money/cost) + " bottles" + " with " + money + " dollars");

//   adding return 
        return ("Your change is " + money%cost + " dollars");
  
}

getMilk(17);

// calculating bmi and inputting Math.round()

function ibmCalc(weight, height) {
    var weight = prompt("What's your weight?");
    var height = prompt("What's your height?");
    
    var imb = Math.round(weight/(height*height));
    alert("Your ibm is " + imb);
    
  }
  ibmCalc();