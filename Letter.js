// var char = "h"
var inquirer = require("inquirer")

function Letter(character, bool){
    this.character = character;
    this.bool = bool;
    this.guess = function(){
        if (this.bool === "false"){
            var char = " _"
            console.log(char)
        }else{
            var char = this.character
            console.log(char)
        }
    }
    // this.correctGuess = function(){
    //     if()
    // }
}

// var a = new Letter("a", false);
// a.guess();
// console.log(a);
// console.log(char);
module.exports = Letter


//need to create a function to take the chosen word and then turn it into undersocres with spaces in between, use recursion
// var checkLetter = function(){
//     inquirer.prompt([
//         {
//             name: "character",
//             message: "Please enter a letter",
//             default: " _ "
//         }

//     ])
// }

// checkLetter()