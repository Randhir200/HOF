// Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)

var arr = [1, 2, 3, 4, 5, 6];

var out = arr
  .filter(function (ele) {
    return ele % 3 == 0; // [3,6]
  })
  .reduce(function (acc, ele) {
    return acc + ele ** 3; // 0+3**3=27, 28+6**3=28
  }, 0);
console.log(out);
