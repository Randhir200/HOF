var arr = [1, 2, 3, 4, 5];

// calculting using for loop
// var sum = 0;
// for(var i = 0; i < arr.length; i++){
//   sum += arr[i];
// }
// console.log(sum);

// calculting using for loop
var out = arr.reduce(function(acc,ele,i){
    return acc+ele;
}, 5);
console.log(out);