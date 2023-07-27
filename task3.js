// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const mostFrequentElement = (arr) => {
    let frequency = {};
    let maxFrequency = 0;
    let mostFrequentElement = 0;
    for (element of arr) {
        if (frequency[element]) {
            frequency[element] += 1;
        } else {
            frequency[element] = 1;
        }
    }
    for (element in frequency) {
        if (frequency[element] > maxFrequency) {
            maxFrequency = frequency[element];
            mostFrequentElement = element;
        }
    }
    return mostFrequentElement;
}

console.log(mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5])); // 3
