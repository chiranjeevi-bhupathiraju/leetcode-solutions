var minimumDifference = function (a, k) {
    let n = a.length;
    a.sort((a, b) => a - b);

    let min = Infinity;

    for (let i = 0, j = k - 1; j < n; i++, j++) {
        min = Math.min(min, a[j] - a[i]);
    }

    return min;
};
