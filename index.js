// HOF
var sweets = ['laddu', 'rasgulla', 'barfi', 'kalakand'];

// ordinary method to acces the array

// var myfunc = function (arr,i,ele) {
//     console.log(ele);
//     console.log(i);
//     console.log(arr);
// };
// for(var i=0;i<sweets.length;i++) {
//     myfunc(sweets,i,sweets[i])
// }


sweets.forEach(function(ele, i, arr) {
  console.log(ele);
  console.log(i);
  console.log(arr);
});

