var Letter = require("./Letter.js")
var test = new Letter(process.argv[2], process.argv[3]);
var word = []


// function Word(hiddenWord){
//     this.hiddenWord = process.argv[2]
//     this.wordString = function(){

//     }
//     this.charCheck = function(){

//     }
// }
// console.log(Word.hiddenWord)
test.guess()
console.log(test)