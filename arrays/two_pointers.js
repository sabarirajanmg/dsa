function findPairSum(arr, target) {
    let left = 0, right = arr.length -1;
    
    while (right > left) {
        const sum = arr[left] + arr[right];
        // console.log(sum)
        if (sum === target) {
            console.log(arr[left], arr[right])
            left++;
            right--;
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return null;
}

const arr = [-2, 3, 6, 8, 11];

findPairSum(arr, 9)