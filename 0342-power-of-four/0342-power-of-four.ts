function isPowerOfFour(n: number): boolean {
    while (n > 1) {
        n = n / 4
    }

    return n === 1
};
