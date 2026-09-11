function minOperations(a: number[], k: number): number {
    let t = a.reduce((s, e) => s + e, 0)
    return t % k
};

function minOperations222(a: number[], k: number): number {
    let s = 0

    for (let e of a) {
        s += e
    }

    return s % k
};
