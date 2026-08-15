function differenceOfSum(a: number[]): number {
    function getDigitSum(n) {
        let s = 0
        while (n) {
            let d = n % 10
            s += d;
            n = Math.trunc(n / 10)
        }
        return s
    }

    let eleTotal = a.reduce((s, e) => s + e, 0);
    let digTotal = a.reduce((s, e) => s + getDigitSum(e), 0);
    return Math.abs(eleTotal - digTotal)
};
