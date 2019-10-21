// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/

//it's a factory function that return a computer object every time is called
function makeComputer(type, color, weight) {
  // TODO: Your code here
  return {
    type: type,
    color: color,
    weight: weight
  }
}
// array variable that holds 2 computer objects
var computers = [makeComputer("gaming", "blue", 2.25), makeComputer("laptop", "red", 1.9)];

// Write a function displayComputer that can be used to display one computer.
//it accept an array of computers and return 1 computer
function displayComputer(computer) {
  // TODO: Your code here
  return computer[0];
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/

//we used each to iterating the array and we created a function to upper case the strings
function uppercaseAll(arrayOfStrings) {
  // TODO: your code here
  each(arrayOfStrings, function(element, i){
    arrayOfStrings[i] = element.toUpperCase();
  });
  return arrayOfStrings;
}

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

//it invokes each and pass an array to iterate it and a function that checks if population 
//is lower than 500 million then it will delte the object
// and when we finish we will return our arrayOfObjects
function highestPopulation(arrayOfObjects) {
  // TODO: your code here
  // return map(arrayOfObjects, function(element){
  //   if(element['population'] > 500000000){
  //     return element;
  //   }
  // });
  each(arrayOfObjects, function(object, i){
    if(object["population"] < 500000001){
      delete arrayOfObjects[i];
    }
  })
  return arrayOfObjects;
}

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/

//it call each and pass the array to iterart it and the function to devide
//every number by 2
function halveAll(numbers) {
  // your code is here
  each(numbers, function(number, i){
    numbers[i] = number / 2;
  });
  return numbers;
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/

//it calls map to return an array of the object values
function values(obj) {
  // TODO: your code here
  return map(obj, function(element){
    return element;
  });
}

//Good Luck :))
