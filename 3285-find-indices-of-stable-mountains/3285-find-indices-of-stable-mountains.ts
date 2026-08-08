function stableMountains(a: number[], k: number): number[] {
    let n = a.length
    let res = []

    for (let i = 1; i < n; i++) {
        if (a[i - 1] > k) {
            res.push(i)
        }
    }

    return res
};