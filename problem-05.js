function waitingTime(waitingTimes , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }
    let sum = 0;
    for(const waitingTime of waitingTimes) {
        sum += waitingTime;
    }
    let averageTime = Math.round(sum / waitingTimes.length);
    let withOutMe = serialNumber - 1;
    let moreSerial = withOutMe - waitingTimes.length;
    let remainingInterviews = moreSerial * averageTime;
    return remainingInterviews;
}


console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
