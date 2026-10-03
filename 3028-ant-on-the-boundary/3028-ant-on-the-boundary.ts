function returnToBoundaryCount(a: number[]): number {
    let s = 0
    let ct = 0

    for (let e of a) {
        s += e
        if (s === 0) {
            ct++
        }
    }

    return ct
};
