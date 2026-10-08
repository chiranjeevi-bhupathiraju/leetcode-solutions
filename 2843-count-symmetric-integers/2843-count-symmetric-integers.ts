function countSymmetricIntegers(low: number, high: number): number {
    let ct = 0

    for (let i = low; i <= high; i++) {
        let s = '' + i
        let n = s.length

        if (n % 2 === 0) {
            let leftss = s.slice(0, n / 2)
            let rightss = s.slice(n / 2)

            if (sod(leftss) == sod(rightss)) {
                ct++
            }
        }
    }

    return ct
};

function sod(s) {
    let sum = 0

    for (let e of s) {
        sum += +e
    }

    return sum
}
