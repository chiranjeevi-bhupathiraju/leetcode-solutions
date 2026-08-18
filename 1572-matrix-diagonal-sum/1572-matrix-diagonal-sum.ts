function diagonalSum(g: number[][]): number {
    let m = g.length
    let n = g[0].length
    let set = new Set()

    let s1 = 0
    for (let i = 0, j = 0; i < m && j < n; i++, j++) {
        set.add(i + ',' + j)
        s1 += g[i][j]
    }

    let s2 = 0
    for (let i = n-1, j = 0; i >= 0 && j >= 0; i--, j++) {
        if (set.has(i + ',' + j)) {
        } else {
            s2 += g[i][j]
        }
    }

    return s1 + s2
};
