var isTriangle = (a, b, c) => {
    return (a + b > c) &&
        (b + c > a) &&
        (c + a > b)
}

var triangleType = function (nums) {
    const [a, b, c] = nums;

    if (!isTriangle(a, b, c)) return "none";

    let set = new Set(nums)

    if (set.size === 1) return "equilateral";
    if (set.size === 2) return "isosceles";

    return "scalene";
};
