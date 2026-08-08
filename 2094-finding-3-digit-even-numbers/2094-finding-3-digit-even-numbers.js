/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let res = []

    for(i=0;i<digits.length;i++){
        let di =digits[i]
        if(di == 0) continue
        for(j=0;j<digits.length;j++){
            if(i === j) continue
            let dj = digits[j]
        for(k=0;k<digits.length;k++){
            let dk = digits[k]
              if(j === k || k === i || dk % 2 !== 0) continue
            let num = 100 * di + 10 * dj + 1 * dk

            if(res.indexOf(num) === -1){
                res.push(num)

            }
              
    }
    }
    }

    return res.sort((a,b)=>a-b)
};