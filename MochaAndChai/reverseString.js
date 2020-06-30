let a = "murad"

function reverse(s){
    var arr =s.split('');
    arr.indexOf();
    return arr.map(s=>arr[arr.length - arr.indexOf(s)-1]).reduce((t,s)=> t + '' + s,'');
}