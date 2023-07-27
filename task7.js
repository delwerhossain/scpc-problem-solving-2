// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger = (romanNum) => {
    const romanNums = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50
    }
    let sum = 0;
    for (let i = 0; i < romanNum.length; i++) {
        const currentNum = romanNums[romanNum[i]];
        const nextNum = romanNums[romanNum[i + 1]];

        if (currentNum < nextNum) {
            sum -= currentNum;
        } else {
            sum += currentNum;
        }
    }
    return sum;
}

console.log(romanToInteger("VII")); // 7