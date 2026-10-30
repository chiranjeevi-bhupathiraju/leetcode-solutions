/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let res = 0;
    let i = 1;
    let j = 1;
    let k = 0;

    while (j <= n) {
        res += i;
        i++;
        j++;

        if (j % 7 === 1) {
            k++;
            i = k + 1;
        }
    }

    return res;
};