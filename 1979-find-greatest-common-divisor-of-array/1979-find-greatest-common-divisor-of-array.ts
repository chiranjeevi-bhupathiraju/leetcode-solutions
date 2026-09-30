function findGCD(nums: number[]): number {
    nums.sort((a, b) => a - b)
    return gcd(nums[0], nums[nums.length - 1])
};

function gcd(a, b) {
    if (!b) return a
    return gcd(b, a % b)
}
