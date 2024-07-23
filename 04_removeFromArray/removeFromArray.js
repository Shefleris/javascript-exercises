const removeFromArray = function(array, ...removeValueArray) {
    let newArray = array;
    for (let removeValue of removeValueArray) {
        while (newArray.includes(removeValue)) {
            newArray.splice(newArray.indexOf(removeValue),1);
        };
    };
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
