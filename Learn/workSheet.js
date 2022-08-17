let arrays = [[1, 2, 3], [4, 5], [6]];
arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue));
// → [1, 2, 3, 4, 5, 6]

///////////////////////////////////////////////////

function loop(value, testFunc, upFunc) {
    if (!testFunc(value)) {
        return;
    }
    console.log(value);
    loop(upFunc(value), testFunc, upFunc);
}

loop(3, n => n > 0, n => n - 1);
// → 3
// → 2
// → 1

////////////////////////////////////////////////////////////////

function every(array, test) {
    let tFalse;
    array.forEach((element) => {
        if (!test(element)) {
            tFalse = false;
        }
    });
    if (tFalse !== undefined) {
        return false;
    } else {
        return true;
    }
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
console.log(every([4, 5, 67, 3, 78], n => n < 10));

console.log(every([3, 4, 5], n => n > 10));

console.log(every([74, 85, 93], n => n > 10));

//////////////////////////////////////////////////////////
