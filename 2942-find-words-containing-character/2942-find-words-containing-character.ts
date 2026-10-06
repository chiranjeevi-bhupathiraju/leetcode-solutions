function findWordsContaining(w: string[], x: string): number[] {
    let i = 0
    let res = []
    while (i < w.length) {
        if (w[i].includes(x)) {
            res.push(i)
        }
        i++

    }
    return res
};