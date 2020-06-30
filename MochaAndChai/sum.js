let a = [1,4,5,2,8,6,9,2]

console.log("The sum of the array is " + a.reduce(sum));
console.log("The product of the array is " + a.reduce(multiply));

function sum(t,a) {
    return t + a;
}
function multiply(t,a){
    return t * a;
}