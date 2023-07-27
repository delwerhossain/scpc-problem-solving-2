// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

const twoSum = (arr, targetValue) => {
    let indicesNum1 = 0;
    let indicesNum2 = arr.length - 1;

    while (indicesNum1 < indicesNum2) {
        const sum = arr[indicesNum1] + arr[indicesNum2];

        if (sum === targetValue) {
            return [indicesNum1, indicesNum2];
        } else if (sum < targetValue) {
            indicesNum1++;
        } else {
            indicesNum2--;
        }
    }
    return "No two numbers add up to the target value";
}

console.log(twoSum([1, 3, 6, 8, 11, 15], 9)); // [0, 3] (numbers at indices 0 and 3: 1 + 8 = 9) 