function countPartitions(a: number[]): number {
    let n = a.length
    let s = a.reduce((s, e) => s + e, 0)

    let ps = 0
    let ss = s
    let ct = 0

    for (let i = 0; i < n - 1; i++) {
        let e = a[i]

        ps += e
        ss -= e

        if ((ps - ss) % 2 === 0) {
            ct++
        }
    }

    return ct
};
