/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function (events) {
    let score = 0
    let ct = 0

    for (let i = 0; i < events.length; i++) {
        if ('0123456'.includes(events[i])) {
            score += +events[i]
        } else if (events[i] == 'WD' || events[i] == 'NB') {
            score += 1
        } else {
            ct += 1
        }

        if (ct == 10) break
    }

    return [score, ct]
};