let shoppingItems = [];
shoppingItems[0] = "Orangensaft";
shoppingItems[1] = "Tomaten";
shoppingItems[2] = "Pizza";
shoppingItems[4] = "Nudeln";

for(let i = 0; i< shoppingItems.length; i++){
    console.log(shoppingItems[i]);
}
//Outputs: "Orangensaft", "Tomaten", "Pizza”, undefined, "Nudeln"

let shoppingItems = [];
shoppingItems.push("Orangensaft");
shoppingItems.push("Cola");

for(let i = 0; i< shoppingItems.length; i++){
    console.log(shoppingItems[i]);
}
//outputs: "Orangensaft", "Cola"
