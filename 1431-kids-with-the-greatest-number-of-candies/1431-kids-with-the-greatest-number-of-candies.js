/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxV = Math.max(...candies)
      
    return candies.map((can)=> can+extraCandies >= maxV)   
};