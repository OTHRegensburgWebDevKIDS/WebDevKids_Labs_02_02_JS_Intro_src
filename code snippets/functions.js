let errorMsg = "DB connection failed";
logError(errorMsg);

function logError(errorMsg) {
    console.log("Error: " + errorMsg);
}


let numToSquare = 3;
let squareResult = square(numToSquare);    
console.log(squareResult);

function square(numToSquare) {
  return numToSquare * numToSquare;
}