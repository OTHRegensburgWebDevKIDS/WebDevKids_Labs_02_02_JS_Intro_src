var firstNameOne = "Bill";

var firstNameTwo = "Bill";
var lastName = "Gates";

var completeName = firstNameOne + " " + lastName;

//outputs: true
console.log(firstNameOne == firstNameTwo);

//outputs: Bill Gates
console.log(completeName);

var lastName = "Gates";
for (let i = 0; i < lastName.length; i++) {
    console.log(lastName.charAt(i));
}
//outputs: "G","a","t","e","s"

let firstString = 1 + 2 + 3 + "hello";
let secondString = "hello" + 1 + 2 + 3;
let thisAlsoWorks = "" + 1 + 2 + 3;

console.log(firstString); // outputs: 6hello
console.log(secondString); // outputs: hello123
console.log(thisAlsoWorks); // outputs: 123
