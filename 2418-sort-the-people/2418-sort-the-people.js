/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let obj = {}

    for(i=0;i<heights.length;i++){
        obj[heights[i]] = names[i]
    }

    heights.sort((a,b)=>b-a)
    let res = []

    for(let h of heights){
        res.push(obj[h])
    }

    return res
};