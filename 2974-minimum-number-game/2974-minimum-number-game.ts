function numberGame(a: number[]): number[] {
    a.sort((a, b) => a - b)
    let res = []

    while (a.length) {
        let al = a.shift()
        let bo = a.shift()
        res.push(bo, al)
    }

    return res
};
