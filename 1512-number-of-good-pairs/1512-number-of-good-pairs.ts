function numIdenticalPairs(a: number[]): number {
    let freq = {}
    for (let e of a) {
        freq[e] = (freq[e] ?? 0) + 1
    }

    let s = 0
    for (let e in freq) {
        let f = freq[e]
        f--
        s += (f * (f + 1)) / 2
    }

    return s
}
