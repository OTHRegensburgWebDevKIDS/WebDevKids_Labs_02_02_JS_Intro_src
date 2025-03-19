for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

let shoppingItems = [];
shoppingItems[0] = "Orangensaft";
shoppingItems[1] = "Tomaten";
shoppingItems[2] = "Pizza";

for (let shoppingItem in shoppingItems) {
  console.log(shoppingItem);
}
//outputs: "0", "1", "2"

for (let shoppingItem of shoppingItems) {
  console.log(shoppingItem);
}
//outputs: "Orangensaft", "Tomaten", "Pizza"

while (x < 10) {
  x++;
}
