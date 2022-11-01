const findTheOldest = function(array) {
    const oldest = array.reduce(function(prevOldest, currPerson, index) {

        let prevOldestAge = prevOldest.yearOfDeath - prevOldest.yearOfBirth;
        let currPersonAge = currPerson.yearOfDeath - currPerson.yearOfBirth;

        const currentYear = new Date().getFullYear();

        if (prevOldest.hasOwnProperty('yearOfDeath') !== true) {
            prevOldestAge = currentYear - prevOldest.yearOfBirth;
        }

        if (currPerson.hasOwnProperty('yearOfDeath') !== true) {
            currPersonAge = currentYear - currPerson.yearOfBirth;
        }   

        if (currPersonAge > prevOldestAge) {
            return currPerson;
        } else {
            return prevOldest;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
