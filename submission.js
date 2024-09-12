function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    } 
    let tax = ((income - expenses) * .20);
    return tax;
}


function sendNotification(email) {
    if(!email.includes("@")) {
        return "Invalid Email";
    }
    let emailParts = email.split("@");
    let userName = emailParts[0];
    let domainName = emailParts[1];
    
    return userName.concat(" sent you an email from ", domainName);
}


function checkDigitsInName(name) {
    if(typeof name !== "string") {
        return "Invalid Input";
    }
    for(let i = 0; i < name.length; i++) {
        if(!isNaN(name[i]) && name[i] !== " ") {
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj) {
    if(typeof obj !== "object") {
        return "Invalid Input";
    }
    let totalMarks = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily) {
        totalMarks += 20;
    }
    if(totalMarks >= 80) {
        return true;
    }
    return false;
}


function waitingTime(waitingTimes , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }
    let totalInterviewTime = 0;
    for(let i = 0; i < waitingTimes.length; i++) {
        totalInterviewTime += waitingTimes[i];
    }
    let averageInterviewTime = Math.round(totalInterviewTime / waitingTimes.length);
    let remainingInterviews = serialNumber - waitingTimes.length - 1;
    if(remainingInterviews <= 0) {
        return 0;
    }
    let waitingTimeForSerial = remainingInterviews * averageInterviewTime;
    return waitingTimeForSerial;
}
