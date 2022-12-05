// Code your solution here
// Returns all drivers that match the passed in name even if case does not match but letters do
let findMatching = (listOfDrivers, searchedDriver) => {
    return listOfDrivers.filter( driverName => {  return driverName.toLowerCase() === searchedDriver.toLowerCase() });
 }
 
 // Returns a driver if beginning provided charaters match with passed matchingLetters
 let fuzzyMatch = (listOfDrivers, matchingLetters) => {
    return listOfDrivers.filter( driverName => {  return driverName.substring(0, 2) === matchingLetters });
 }
 
 // Accesses a data structure to check if name matches.
 let matchName = (listOfDrivers, searchedDriver) => {
    return listOfDrivers.filter( driverName => { return driverName.name === searchedDriver })
 }