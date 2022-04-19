var arr = [1, 2, 3, 4, 5];

// using foreach
// var square = []
// arr.forEach(function(ele){
//     square.push(ele**2)
// })
// console.log(square);

//using map
var square = arr.map(function (ele) {
  return ele ** 2;
});
console.log(square);
