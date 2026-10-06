/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
    let r = {}

    for (let i = 0; i < rings.length; i += 2) {
        let color = rings[i]
        let rod = rings[i + 1]

        if (r[rod]) {
            r[rod].add(color)
        } else {
            r[rod] = new Set([color])
        }
    }

    let ct = 0

    for (let a in r) {
        if (
            r[a].has('B') &&
            r[a].has('G') &&
            r[a].has('R')
        ) {
            ct++
        }
    }

    return ct
}