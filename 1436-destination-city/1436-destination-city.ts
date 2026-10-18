function destCity(paths: string[][]): string {
    let set = new Set()

    for (let [a, b] of paths) {
        set.add(a)
    }

    for (let [a, b] of paths) {
        if (!set.has(b)) {
            return b
        }
    }
};