// Problem-4 

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

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 30, isFFamily : false }));