// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generatePassword = (length) => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomUppercaseLetters = Math.floor(Math.random() * 26);
        const randomLowercaseLetters = Math.floor(Math.random() * 26);
        const randomNumbers = Math.floor(Math.random() * 10);
        const randomSpecialCharacters = Math.floor(Math.random() * 29);
        if (password.length <= length) {
            password += uppercaseLetters[randomUppercaseLetters] + lowercaseLetters[randomLowercaseLetters] + numbers[randomNumbers] + specialCharacters[randomSpecialCharacters];
        }
    }
    return password;
}
console.log(generatePassword(10)); 