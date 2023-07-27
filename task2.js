// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19


const positiveNumbersSum = (arr) => {
    let sum = 0;
    for(number of arr){
        if(number >= 0){
            sum += number;
        }
    }
    return sum;
}

console.log(positiveNumbersSum([2, -5, 10, -3, 7])); // 19
