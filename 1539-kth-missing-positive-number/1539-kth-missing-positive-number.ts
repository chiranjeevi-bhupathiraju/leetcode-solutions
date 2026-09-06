function findKthPositive(a: number[], k: number): number {
    let set = new Set(a)
    let c = 0

    for (let x = 1; ; x++) {
        if (!set.has(x)) {
            c++
            if (c === k) {
                return x
            }
        }
    }
};
