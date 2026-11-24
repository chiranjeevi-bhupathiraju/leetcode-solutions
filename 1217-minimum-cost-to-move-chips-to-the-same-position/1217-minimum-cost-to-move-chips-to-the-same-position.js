var minCostToMoveChips = function (position) {
    // all evens come to 0th position (or any even position) => sum of all even positions
    // all odds come to 1st position (or any odd position) => sum of all odd positions

    // they are side by side
    // to get min, small heap moves to larger heap => min of both above

    let evens = 0
    let odds = 0

    for (let p of position) {
        if (p % 2 === 0) evens++
        else odds++
    }

    return Math.min(evens, odds)
};
