var arr = [1, 2, 3, 4, 5];

// map is returning boolean value for this case
// var out = arr.map(function(ele){
//     return ele%2==0;
// })

// console.log(out);  //returning boolean Value


// filter is returning value which are true
var out = arr.filter(function(ele,index){
    return index%2==0;
})

console.log(out);

