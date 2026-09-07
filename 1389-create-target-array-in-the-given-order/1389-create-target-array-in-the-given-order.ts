function createTargetArray(a: number[], is: number[]): number[] {
    let n = a.length
    let res = []

    for (let k = 0; k < n; k++) {
        let e = a[k]
        let i = is[k]
        res.splice(i, 0, e)
    }

    return res
};
