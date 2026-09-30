function smallestIndex(nums: number[]): number {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let sod = String(nums[i]).split('').reduce((a, c) => a + (+c), 0)
        if (sod == i) {
            res.push(i)
        }
    }

    return Math.min(...res) != Infinity ? Math.min(...res) : -1
};