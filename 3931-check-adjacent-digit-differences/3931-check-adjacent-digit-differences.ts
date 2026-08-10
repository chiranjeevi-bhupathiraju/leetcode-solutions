function isAdjacentDiffAtMostTwo(s: string): boolean {
    let n = s.length

    for (let i = 1; i < n; i++) {
        let p = +s[i - 1]
        let c = +s[i]

        if (Math.abs(c - p) <= 2) {
            // good
        } else {
            return false
        }
    }

    return true
};
