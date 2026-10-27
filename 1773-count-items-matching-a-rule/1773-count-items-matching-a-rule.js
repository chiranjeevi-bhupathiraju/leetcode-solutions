/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let mi = items.map((it) => ({
        type: it[0],
        color: it[1],
        name: it[2]
    }))

    return mi.filter((it) => it[ruleKey] == ruleValue).length
};