function largestOddNumber(s: string): string {
    let a = s.split("").map(e => +e)

    while (a.at(-1) % 2 === 0) {
        a.pop()
    }

    return a.join("")
};
