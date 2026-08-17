/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let s = ''+n

  let sum = s.split('').reduce((a,c)=>a+ (+c),0)
  let pro = s.split('').reduce((a,c)=>a*(+c),1)


return pro-sum
};