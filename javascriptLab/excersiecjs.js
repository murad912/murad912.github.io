function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

//max number function max(firstNum, secondNum){
  function max(firstNum, secondNum){
    if (firstNum > secondNum) {
       console.log(firstNum + " is larger than " + secondNum);
    } else {
        console.log(firstNum + " is less than " + secondNum);
    }
    return;

}
max(142,234);

//maxOfThree number
function maxOfThree(num1, num2, num3)
{
    var max = Math.max(num1, num2, num3);
    return max;
}
console.log("Expected output of maxOfThree : " + maxOfThree( + " " + 15,2,7));

//function vowel
function isVowel(argument){

    var text;
    var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}
// See if "A" is a vowel
var char = "b";

if (isVowel(char)) {
    console.log(char + " is a vowel");
} else {
    console.log(char + " is not a vowel");
}

// function to sum
function sum(arr) {
    var sm = 0
    for(const  i of arr){
        sm +=i;
    }
    return sm;
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));

// function to sum
function multiply(arr) {
    m = 1;
    for(const i in arr){
        m *= arr[i];
    }
    return m;
}
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));

// function to reverse string
function reverse(s) {
    var arr =s.split('');
    arr.indexOf();
    return arr.map(s=>arr[arr.length - arr.indexOf(s)-1]).reduce((t,s)=> t + '' + s,'');

}
console.log("Expected output of reverse('fikir') is rikif  " + myFunctionTest('rikif', function () {
    return reverse('rikif');
}));


// function to find the longest word
function findLongestWords(arr,i) {
    let arr2 = [];
    let j = 0;
    for(let e of arr){
        if (e.length > i) {
            arr2[j++] = e;
        }
    }
    return arr2;

}
console.log("Expected output of findLongestWord(['ab','abc','abcd','abcdef']) is ['abcdef']  " + myFunctionTest(['abcdef'], function () {
    return findLongestWords(['ab','abc','abcd','abcdef'],5);
}));

//multiply each element by 10;
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator *
    10;
console.log("Expected value for multiply by 10 is: "+ array1.reduce(reducer));

//Equal three
const array2 = [1, 2, 3, 4];
const reducers = (accumulator, currentValue) => accumulator =
    3;
console.log("Expected value for equal 3 is: "+ array1.reduce(reducers));


const arr1 = [13, 32, 3, 4];
const redu = (accumulator, currentValue) => accumulator +
    currentValue;
console.log("Expected product of all elements: " + arr1.reduce(redu));