function trimTrailingVowels(s: string): string {
    let a = s.split("")

    while ('aeiou'.includes(a.at(-1))) {
        a.pop()
    }

    return a.join("")
};
