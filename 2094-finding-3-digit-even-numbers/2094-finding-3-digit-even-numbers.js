/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let res = []

    for(i=0;i<digits.length;i++){
        if(digits[i] == 0) continue
        for(j=0;j<digits.length;j++){
            if(i === j) continue
        for(k=0;k<digits.length;k++){
              if(j === k || k === i || digits[k] % 2 !== 0) continue
              if(!res.includes(+`${digits[i]}${digits[j]}${digits[k]}`)){
           res.push(+`${digits[i]}${digits[j]}${digits[k]}`)

              }
              
    }
    }
    }

    return res.sort((a,b)=>a-b)
};