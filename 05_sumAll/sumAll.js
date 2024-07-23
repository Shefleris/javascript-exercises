const sumAll = function(minNum, maxNum) {
    if (!Number.isInteger(minNum) || !Number.isInteger(maxNum)) {return "ERROR"};
    if (minNum < 0 || maxNum < 0) {return "ERROR";};
    if (minNum > maxNum ){
        let tempNum = minNum;
        minNum = maxNum;
        maxNum = tempNum;
    };

    let sumNum = 0;
    for (let i = minNum; i <= maxNum; i++) {
        sumNum += i;
    };
    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
