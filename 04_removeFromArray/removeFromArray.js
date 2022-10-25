const removeFromArray = function(array) {
    const removalArray = [];
    for (i = 0; i < array.length; i++) {
        for (arg of arguments) { // loops through any number of given arguments
            if (array[i] === arg) {
                array.splice(i, 1);
                i--;
                break; // breaks inner loop only
            }

        } 
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
