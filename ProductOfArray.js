var arr = [3,2,7];

var left=[1];
var right=[1];

function leftProd(acc, ele,i){
    if(i==arr.length-1){
        return null;
    }
    left.push(acc=acc*ele);
    return acc;
}
function rightProd(acc, ele,i){
    if(i==arr.length-1){
        return null;
    }
    right.unshift(acc=acc*ele);
    return acc;
}

arr.reduce(leftProd,1);
arr.reverse().reduce(rightProd,1);
var bag="";
for(var i=0;i<left.length;i++){
  bag += left[i]*right[i] + " ";
}
console.log(bag);