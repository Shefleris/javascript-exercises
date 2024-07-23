const reverseString = function(string) {
    let arrayString = string.split('');
    let reversedString = arrayString.reverse();
    return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
