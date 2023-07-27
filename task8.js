// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondSmallestNumber = (arr) => {
    let smallestNumber = Infinity;
    let secondSmallestNumber = Infinity;
    for (number of arr) {
        if (number < smallestNumber) {
            secondSmallestNumber = smallestNumber;
            smallestNumber = number;
        } else if (number < secondSmallestNumber) {
            secondSmallestNumber = number;
        }
    }
    return secondSmallestNumber;
}

console.log(secondSmallestNumber([, 5, 1, 3, 4, 7, 6, 8, 9, 10])); // 2