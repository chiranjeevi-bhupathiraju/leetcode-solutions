function findErrorNums(a: number[]): number[] {
    let map = new Map()
    for (let e of a) {
        map.set(e, (map.get(e) ?? 0) + 1)
    }

    let dup = -Infinity
    let missing = -Infinity
    for (let i = 1;
        (dup === -Infinity) ||
        (missing === -Infinity)
        ; i++) {
        if (map.has(i)) {
            if (map.get(i) > 1) {
                // duplicate
                dup = i
            }
        } else {
            // missing
            missing = i
        }
    }

    return [dup, missing]
};
