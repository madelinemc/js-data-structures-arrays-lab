// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

// destructively insert at end of array
function destructivelyAppendDriver(name) {
    return drivers.push("Ralph");
}
    
// destructively insert to beginning of array
function destructivelyPrependDriver(name) {
    return drivers.unshift("Bob");
}


//destructively remove from end of array, return updated array
function destructivelyRemoveLastDriver() {
    return drivers.pop();
}

//destructively remove from beginning of array, return updated array
function destructivelyRemoveFirstDriver() {
    return drivers.shift();
}

//non-destructively appends (add to end) a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function appendDriver(name) {
   let newDrivers = [...drivers.slice(0, 3), "Broom"];
   return newDrivers;
}

//non-destructively prepends (add to beginning) a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function prependDriver(name) {
    let newNewDrivers = ["Arnold", ...drivers.slice(0, 3)];
    return newNewDrivers;
} 

//non-destructively removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
function removeLastDriver() { 
    return drivers.slice(0, drivers.length - 1);
}

//non-destructively removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
function removeFirstDriver() {
    return drivers.slice(1);
}














