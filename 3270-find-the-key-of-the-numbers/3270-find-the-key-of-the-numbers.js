/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
    num1 = String(num1).padStart(4, "0");
    num2 = String(num2).padStart(4, "0");
    num3 = String(num3).padStart(4, "0");

    let key = '';

    for (let i = 0; i < 4; i++) {
        key += Math.min(num1[i], num2[i], num3[i]);
    }

    return Number(key);
};