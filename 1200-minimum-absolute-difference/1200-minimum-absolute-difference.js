/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);

    let min = Infinity;
    let res = [];

    for (let i = 1; i < arr.length; i++) {
        let d = arr[i] - arr[i - 1];

        if (d < min) {
            min = d;
            res = [[arr[i - 1], arr[i]]];
        } else if (d === min) {
            res.push([arr[i - 1], arr[i]]);
        }
    }

    return res;
};