var char = process.argv[2]

function Letter(character, yesNo){
    this.character = character;
    this.yesNo = yesNo;
    this.guess = function(){
        if (char === this.character){
            console.log("True")
            this.yesNo = true
        }else{
            console.log("False")
        }
    }
}

var a = new Letter("a", false);
a.guess();
console.log(a);
console.log(char);
// module.exports = Letter