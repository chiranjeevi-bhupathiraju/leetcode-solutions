function missingMultiple(a: number[], k: number): number {
    let set = new Set(a)

    for (let m = k; ; m += k) {
        if (!set.has(m)) {
            return m
        }
    }
};

function missingMultiple222(a: number[], k: number): number {
    let set = new Set(a)

    for (let f = 1; ; f++) {
        if (!set.has(k * f)) {
            return k * f
        }
    }
};

