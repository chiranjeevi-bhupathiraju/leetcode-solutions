/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function (startTime, endTime) {
    let st = startTime.split(':').map(Number);
    let et = endTime.split(':').map(Number);

    let es = 3600 * et[0] + 60 * et[1] + et[2]
    let ss = 3600 * st[0] + 60 * st[1] + st[2]

    return es - ss
};