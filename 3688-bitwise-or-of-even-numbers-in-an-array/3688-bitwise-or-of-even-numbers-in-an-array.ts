function evenNumberBitwiseORs(nums: number[]): number {
    let es = 0

    let a = nums.filter((x) => x % 2 == 0)

    for (let e of a) {
        es = es | e
    }

    return es
};