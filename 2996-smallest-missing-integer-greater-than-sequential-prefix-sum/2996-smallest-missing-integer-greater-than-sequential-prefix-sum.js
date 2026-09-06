var missingInteger = function (a) {
    let n = a.length
    let set = new Set(a)
    let s = a[0]

    for (let i = 1; i < n; i++) {
        let curr = a[i]
        let prev = a[i - 1]
        if (prev + 1 === curr) {
            // seq
            s += curr
        } else {
            break
        }
    }

    for (; ; s++) {
        if (!set.has(s)) {
            return s
        }
    }
};
