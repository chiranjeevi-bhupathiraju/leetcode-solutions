function sumIndicesWithKSetBits(a: number[], k: number): number {
    let numberOfSetBits = (n) => n
        .toString(2)
        .replaceAll('0', '')
        .length
    return a
        .reduce((s, e, i) =>
            s + (numberOfSetBits(i) === k ? e : 0),
            0)
};
