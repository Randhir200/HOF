// functional javascript

var radius = [2,4,6,8];

// callback function
function area(radius) {
    return Math.PI*radius**2;
}
function circumference(radius) {
    return 2*Math.PI*radius;
}
function diameter(radius) {
    return 2*radius;
}

// HOF
function calculting(radius,logic) {
    var arr=[];
    for(var i=0;i<radius.length;i++)
    arr.push(logic(radius[i]));
    return arr;
}

// Invoke
console.log(calculting(radius,area));
console.log(radius.map(area));


