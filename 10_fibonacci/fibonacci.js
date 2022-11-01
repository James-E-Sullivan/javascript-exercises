const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    let curr = 1;
    let prev = 0;
    for (let i = 0; i < n - 1; i++) {
        let temp = curr;
        curr = curr + prev;
        prev = temp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
