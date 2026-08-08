function numberOfPairs(a: number[], b: number[], k: number): number {
    let ct = 0

    for (let e of a) {
        for (let e2 of b) {
            if (e % (e2 * k) === 0) {
                ct++
            }
        }
    }

    return ct
};
