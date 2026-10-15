/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {

    let res = ''

    let uni = paths.flat().filter((it) => paths.flat().indexOf(it) === paths.flat().lastIndexOf(it))

    for (let e of paths) {
        for (let i = 0; i < e.length; i++) {
            if (i % 2 == 1 && uni.includes(e[i])) {
                res = e[i]
                break;
            }
        }
    }

    return res
};