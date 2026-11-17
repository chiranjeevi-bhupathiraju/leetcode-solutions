function rearrangeArray(a: number[]): number[] {
    a.sort((a, b) => a - b)

    let map = new Map()

    for (let e of a) {
        map.set(e, (map.get(e) ?? 0) + 1)
    }

    let res = []
    while (map.size) {

        for (let [e, f] of map) {
            res.push(e)
            map.set(e, map.get(e) - 1)
            if (map.get(e) === 0) {
                map.delete(e)
            }
        }
    }

    return res
}

function rearrangeArray22222(a: number[]): number[] {
    let n = a.length
    let MAX_VAL = 100
    let freq = new Array(MAX_VAL + 1).fill(0)

    for (let e of a) {
        freq[e]++
    }

    let max = Math.max(...a)
    let min = Math.min(...a)
    let prevLen = -Infinity
    let res = []

    while (prevLen !== res.length) {
        if (prevLen === res.length) break
        prevLen = res.length

        for (let e = min; e <= max; e++) {
            if (!freq[e]) continue

            res.push(e)
            freq[e]--

            if (freq[e] === 0) {

                while (freq[min] === 0) {
                    min++
                }
                while (freq[max] === 0) {
                    max--
                }
            }
        }
    }

    return res
};
