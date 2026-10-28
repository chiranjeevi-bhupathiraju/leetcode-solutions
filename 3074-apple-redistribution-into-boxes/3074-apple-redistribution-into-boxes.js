/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    let appleSum = apple.reduce((a, c) => a + c)

    capacity.sort((a, b) => b - a)

    for (let i = 0; i < capacity.length; i++) {
        appleSum -= capacity[i]
        if (appleSum <= 0) {
            return i + 1
        }
    }

};