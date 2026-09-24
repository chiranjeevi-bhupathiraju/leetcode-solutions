/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let s = [...String(num)];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '6') {
            s[i] = '9';
            return Number(s.join(''));
        }
    }

    return num;
};