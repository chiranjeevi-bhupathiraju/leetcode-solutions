function isAcronym(a: string[], target: string): boolean {
    let s = ''

    for (let w of a) {
        s += w[0]
    }

    return s === target
};
