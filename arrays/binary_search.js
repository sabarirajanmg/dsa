
// 0 1 2 3 4 5 6

function binarySearch(sortedArr, target) {
    let left = 0, right = sortedArr.length - 1;

    while (right >= left) {
        let mid = left + Math.floor((right - left) / 2);

        if (target == sortedArr[mid]) {
            return mid;
        } else if (target < sortedArr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return null;
}

const arr = [23, 34, 54, 81, 1003]
console.log(binarySearch(arr, 1003))


