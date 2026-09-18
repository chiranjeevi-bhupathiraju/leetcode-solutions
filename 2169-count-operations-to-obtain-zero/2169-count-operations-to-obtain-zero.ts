function countOperations(a: number, b: number): number {
    let ct = 0

    while (a && b) {
        if (a >= b) {
            a = a - b
        } else {
            b = b - a
        }

        ct++
    }

    return ct
};
