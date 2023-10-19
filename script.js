// function generateRandomPassword(length) {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
//     let password = "";

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset[randomIndex];
//     }

//     return password;
// }

// // Example: Generate a random password with a length of 12 characters
// const randomPassword = generateRandomPassword(12);
// console.log(randomPassword);



const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const specialChars = "!@#$%^&*()_+";
const number = "0123456789";
const allChars = upperCase + lowerCase + specialChars + number;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}


function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}