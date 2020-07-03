const CHAR = "X"
const BANNED = ["nice", "is", "foo", "potato"]
const sentence = "This is banned sentence is a nice and foo word are not allow";

const censor = (sentence) =>
    sentence.split(" ").reduce((acc, word) =>
        acc + ' ' + (BANNED.includes(word) ? CHAR.repeat(word.length) : word), "")

const censored = censor(sentence).trim()

console.log(censored)

/***************************************** */

 function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

 function bubble_Sort(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}
 console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));