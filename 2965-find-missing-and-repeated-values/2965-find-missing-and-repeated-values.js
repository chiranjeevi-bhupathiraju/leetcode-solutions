/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid[0].length
    let fl = grid.flat()

    let set = new Set(fl)
      let f ={}
    for(let el of fl){
        f[el] = (f[el] || 0) + 1
    }


 let r =[]
    for(let el in f){
        if(+f[el] == 2){
            r.push(+el)
            break
        }
    }

    let i = 1

    while(i<= (n*n)){
       if(!set.has(i)){
        r.push(i)
        break
       }
       i++
    }

return r
};