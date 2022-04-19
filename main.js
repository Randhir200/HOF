function eatbreakfast(item, dofirst){
    dofirst();
    console.log(`eat ${item}`)
}
eatbreakfast("dosha", brush);
function brush(){
    console.log("take brush first");
} 

// execution order => 5 > 1 > 2 > 6 > 7 > 3