let fruittypes = ["Apples", "Mangoes", "Kiwi"];
let fruittype = fruittypes[0];

switch (fruittype) {
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + fruittype + ".");
}
console.log("Is there anything else you'd like?");
