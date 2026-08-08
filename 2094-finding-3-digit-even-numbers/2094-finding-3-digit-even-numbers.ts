function findEvenNumbers(a: number[]): number[] {
    let n = a.length
    let res = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j === i) continue
            for (let k = 0; k < n; k++) {
                if (k === i) continue
                if (k === j) continue

                if (a[i] === 0) continue
                if (a[k] % 2 === 1) continue

                let num = 100 * a[i] + 10 * a[j] + 1 * a[k]
                res.push(num)
            }
        }
    }

    res = [...  new Set(res)]
    return res.sort((a, b) => a - b)
};
