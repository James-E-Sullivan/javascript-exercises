const palindromes = function (string) {
    const lowerStr = string.toLowerCase();
    const lowerStrArray = Array.from(lowerStr);
    const characterArray = lowerStrArray.filter(char => 
        char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);

    for (let i = 0, j = characterArray.length - 1; i < j; i++, j--) {
        if (characterArray[i] !== characterArray[j]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
