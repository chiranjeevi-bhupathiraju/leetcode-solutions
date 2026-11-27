var firstStableIndex = function (a, k) {
    let n = a.length;

    let { prefixMaxs } = getPrefixSuffixMaxs(a)
    let { suffixMins } = getPrefixSuffixMins(a)

    for (let i = 0; i < n; i++) {
        if (prefixMaxs[i] - suffixMins[i] <= k) {
            return i;
        }
    }

    return -1;
};

function getPrefixSuffixMins(a) {
    let n = a.length
    let min

    let prefixMins = []
    min = Infinity;

    for (let i = 0; i < n; i++) {
        min = Math.min(min, a[i])
        prefixMins.push(min)
    }

    let suffixMins = []
    min = Infinity;

    for (let j = n - 1; j >= 0; j--) {
        min = Math.min(min, a[j])
        suffixMins.push(min)
    }
    suffixMins.reverse()

    return { prefixMins, suffixMins }
}
// let { prefixMins, suffixMins } = getPrefixSuffixMins(a)

function getPrefixSuffixMaxs(a) {
    let n = a.length
    let max

    let prefixMaxs = []
    max = -Infinity;

    for (let i = 0; i < n; i++) {
        max = Math.max(max, a[i])
        prefixMaxs.push(max)
    }

    let suffixMaxs = []
    max = -Infinity;

    for (let j = n - 1; j >= 0; j--) {
        max = Math.max(max, a[j])
        suffixMaxs.push(max)
    }
    suffixMaxs.reverse()

    return { prefixMaxs, suffixMaxs }
}
// let { prefixMaxs, suffixMaxs } = getPrefixSuffixMaxs(a)
