// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];
//      0    1    2   3   4  5  6

// Write your solution below:

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    //console.log(array[i] + array[j]);
    if (array[i] + array[j] === 0) {
      console.log(true, array[i], array[j]);
    } else {
      console.log(false);
    }
  }
}
