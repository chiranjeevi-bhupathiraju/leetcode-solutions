/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let sum = requests[0]
    for(i=1; i<requests.length; i++){
        let ce = requests[i]
        let pe = requests[i-1]

        sum += Math.abs(ce-pe)
    }
    return sum
};