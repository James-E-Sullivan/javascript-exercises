const sumAll = function(num1, num2) {
    // check for errors
    if ((num1 < 0 || num2 < 0) ||
     (typeof num1 !== "number" || typeof num2 !== "number")) {
        return "ERROR";
    }

    const diff = num1 - num2;
    let largerNum;
    let smallerNum;
    let sum = 0;
    
    if (diff > 0) {
        largerNum = num1;
        smallerNum = num2;
    } else {
        largerNum = num2;
        smallerNum = num1;
    }

    for (i = smallerNum; i <= largerNum; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
