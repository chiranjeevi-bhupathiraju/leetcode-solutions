/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let totalApples = apple.reduce((a,c)=>a+c,0)
    capacity.sort((a,b)=>b-a)

    let i = 0

    while(totalApples > 0){
       totalApples -= capacity[i]
       i++
    }

    return i

};