function finalValueAfterOperations(operations: string[]): number {
    let x = 0

    for (let e of operations) {
        if (e.includes('++')) {
            x += 1
        } else {
            x -= 1
        }
    }

    return x
};