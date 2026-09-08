function checkDivisibility(n: number): boolean {
    let ds = String(n).split('').reduce((s, e) => s + (+e), 0)
    let dp = String(n).split('').reduce((s, e) => s * (+e), 1)

    let s = ds + dp

    return n % s == 0
};