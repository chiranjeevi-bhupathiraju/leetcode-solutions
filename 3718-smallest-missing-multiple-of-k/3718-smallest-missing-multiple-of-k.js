var missingMultiple = function (a, k) {
    let set = new Set(a)

    for (let f = 1; ; f++) {
        if (!set.has(k * f)) {
            return k * f
        }
    }
};
