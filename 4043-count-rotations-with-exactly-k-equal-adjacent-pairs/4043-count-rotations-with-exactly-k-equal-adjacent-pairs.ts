function countRotations(s: string, k: number): number {
    let n = s.length
    let res = 0

    let score = 0
    for (let i = 0; i + 1 < n; i++) {
        if (s[i] === s[i + 1]) {
            score++
        }
    }

    if (score === k) res++

    for (let i = 1; i + 1 <= n; i++) {
        if (s[i - 1] === s[i]) {
            score--
        }

        let j = i + n - 1
        if (s[(j - 1) % n] === s[j % n]) {
            score++
        }

        if (score === k) res++
    }

    return res
};
