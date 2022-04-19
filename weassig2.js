// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4
var arr = [1, 2, 3, 4];

var odd = function(ele){
    return ele%2!=0; // [1,3]
}

var sum = function(acc,ele){
    return acc+ele; //1+1=2, 2+3=7
}

var out = arr.filter(odd).reduce(sum);

console.log(out);