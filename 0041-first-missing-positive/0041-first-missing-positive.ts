function firstMissingPositive(nums: number[]): number {
    let set = new Set(nums)

    for (let i = 1; ; i++) {
        if (set.has(i)) {
            //
        } else {
            return i
        }
    }
};
