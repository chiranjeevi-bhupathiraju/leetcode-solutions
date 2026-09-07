function findIntersectionValues(a: number[], b: number[]): number[] {
    let seta = new Set(a)
    let setb = new Set(b)

    let c1 = 0
    for (let e of a) {
        if (setb.has(e)) {
            c1++
        }
    }

    let c2 = 0
    for (let e of b) {
        if (seta.has(e)) {
            c2++
        }
    }
    return [c1, c2]
};
