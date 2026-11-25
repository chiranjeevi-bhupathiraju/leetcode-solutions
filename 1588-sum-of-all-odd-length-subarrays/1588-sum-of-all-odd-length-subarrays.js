var sumOddLengthSubarrays = function (a) {
    let n = a.length

    const prefixSums = [];
    let sum1 = 0;

    for (let e of a) {
        sum1 += e;
        prefixSums.push(sum1);
    }

    let sum = 0;

    for (let L = 0; L < n; L++) {
        for (let R = L; R < n; R += 2) {
            sum += prefixSums[R] - (prefixSums[L - 1] ?? 0);
        }
    }

    return sum;
};
