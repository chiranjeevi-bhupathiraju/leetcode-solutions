function maxWidthOfVerticalArea(points: number[][]): number {
    let xvals = points.map(([x, y]) => x)
    xvals.sort((a, b) => a - b)

    let n = xvals.length
    let maxw = 0
    for (let i = 1; i < n; i++) {
        let prev = xvals[i - 1]
        let curr = xvals[i]

        let w = curr - prev
        maxw = Math.max(maxw, w)
    }

    return maxw
};
