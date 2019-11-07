function writeOutputToDocument( result ) {
  document.getElementById(`output`).innerHTML += `<li>${result}</li>`;
}

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

//Solution
function squareNumber(numToSquare) {
  return numToSquare ** 2;
  }
//Test
let theSquareResult = squareNumber(3);
  

//Output
writeOutputToDocument(`The result of squaring the number 3 is ${theSquareResult}.`)

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(half) {
  return half /2;
}

let halfresult = halfNumber(5);

writeOutputToDocument(`Half of 5 is ${halfresult}.`)

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

/** 
function percentOf(percent) {
  
}

let percentresult = 

writeOutputToDocument(`2 is ${percentage}.`)
**/

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(radiusToArea) {
  return radiusToArea **2 *3.14;
}

let raduisresult = areaOfCircle(2);

writeOutputToDocument(`The area for a circle with radius 2 is ${raduisresult}.`)

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).

let step1 = halfNumber(6);
let step2 = squareNumber(step1);
let step3 = areaOfCircle(step2);


writeOutputToDocument(`${step1} ${step2} ${step3}`)