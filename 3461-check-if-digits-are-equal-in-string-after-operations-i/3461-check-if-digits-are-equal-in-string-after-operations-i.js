/**
 * @param {string} s
 * @return {boolean}
 */

var hasSameDigits = function (s) {
    let a = s;

    while (a.length > 2) {
        let next = "";

        for (let i = 0; i < a.length - 1; i++) {
            next += (+a[i] + +a[i + 1]) % 10;
        }

        a = next;
    }

    return a[0] === a[1];
};
