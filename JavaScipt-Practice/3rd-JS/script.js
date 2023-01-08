// !--------Problem-1---------- //
// Number of vowels in a input string


let input = prompt("enter");
function getVowels(string){
    var Vowels = ('AaEeIiOoUu');
    var vowelsCount = 0;
    for (var i = 0; i < string.length; i++){
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

console.log(`The total vowels count in the input is: ${getVowels("Hello Brother")}`);

