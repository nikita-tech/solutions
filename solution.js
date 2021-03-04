let NumberOfPlanesNeeded = (arr) => {
    //declaring variables
    let fuelRequiredBase = arr.length-1;
    let minimumPlanesRequired = 0;

    // hadling edge case where array size is 0
    if(arr.length === 0)
        return -1;

    // handling edge case where array size is 1
    if(arr.length === 1)
        return 0;

    while(arr.length>1){        // cases where minimum array size is 2

        let arrayIndex = 0;     // update the array index to 0 for every loop
        

        // while you do not reach the array index where units of fuel available is equal to 
        // or greater than the fuel units required to visit next airport
        while(fuelRequiredBase-arrayIndex > arr[arrayIndex] && arrayIndex <= arr.length){
            arrayIndex++;
        }

        // when array index is greater than the second last airport index then return -1
        // because we havn't got enough fuel to reach the next/last airpot
        if (arrayIndex>arr.length-2){
            minimumPlanesRequired = -1;
            break;
        }

        // after finding the airport index where units of fuel available is equal to 
        // or greater than the fuel units required to visit next airport, the required 
        // fuel will be the units to reach the airport at array index.
        fuelRequiredBase = arrayIndex; 

        // add 1 to minimumPlanesRequired
        minimumPlanesRequired++;

        // update the array as we need to find the airport from second last airport 
        // which has fuel greater than required to visit the next airport
        arr = arr.slice(0,arrayIndex+1);
    }    

    return minimumPlanesRequired;
}

let a = [1,6,3,4,5,0,0,0,6];
let b = [2,1,2,3,1];
let c = [4,3,2,1,0,1,2,4,3,5];

console.log(NumberOfPlanesNeeded(c));