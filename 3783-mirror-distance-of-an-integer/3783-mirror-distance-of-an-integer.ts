function mirrorDistance(n: number): number {
    return Math.abs(n - reverseDigits(n))
};

function reverseDigits(n) {
    let rev = 0

    while (n > 0) {
        let lastDigit = n % 10
        rev = rev * 10 + lastDigit
        n = Math.trunc(n / 10)
    }
    return rev
}
