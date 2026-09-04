function minOperations(nums: number[], k: number): number {
    return nums.filter((e) => e < k).length
};