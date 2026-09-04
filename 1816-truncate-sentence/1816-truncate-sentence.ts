function truncateSentence(s: string, k: number): string {
    let indexes = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            indexes.push(i)
        }
    }

    return s.slice(0, indexes[k - 1])
};