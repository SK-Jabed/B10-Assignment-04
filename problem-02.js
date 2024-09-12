// Problem 2

function sendNotification(email) {
    if(!email.includes("@")) {
        return "Invalid Email";
    }
    let emailParts = email.split("@");
    let userName = emailParts[0];
    let domainName = emailParts[1];
    
    return userName.concat(" sent you an email from ", domainName);
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
console.log(sendNotification("fahim.234@hotmail.com"));