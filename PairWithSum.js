// Given an array of integers, find if any two elements in the array adds up to the provided sum.
// Tasks:
// [1,2,3,9] Sum = 8
// [1,2,4,4] Sum = 8
// Source: https://www.youtube.com/watch?v=wwIysnVmAUg&t=

function hasPairWithSum(arr, sum) {
    let high = arr.length - 1;
    let low = 0;
    for (let i = 0; i < arr.length; i++) {
        let workingSum = arr[high] + arr[low];
        if (workingSum > sum) high -= 1;
        else if (workingSum < sum) low += 1;
        else return true;
    }
    return false;
}

console.log(hasPairWithSum([1, 2, 3, 9], 8));
console.log(hasPairWithSum([1, 2, 4, 4], 8));

function hasPairWithSum2(arr, sum) {
    let seen = {};

    for (const i of arr) {
        let needed = sum - i;
        if (seen[needed])
            return true;

        if (!seen[i])
            seen[i] = true;
    }
    return false;
}

console.log(hasPairWithSum2([1, 2, 3, 9], 8));
console.log(hasPairWithSum2([1, 2, 4, 4], 8));
