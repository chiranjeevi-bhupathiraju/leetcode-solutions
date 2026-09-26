function maxFrequencyElements(a: number[]): number {
    let freq = {}
    let maxf = 0

    for (let e of a) {
        freq[e] = (freq[e] ?? 0) + 1
        maxf = Math.max(maxf, freq[e])
    }

    let s = 0
    for (let e in freq) {
        if (freq[e] === maxf) {
            s += freq[e]
        }
    }

    return s
};
