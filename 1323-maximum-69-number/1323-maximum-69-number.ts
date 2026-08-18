function maximum69Number (num: number): number {
    let maxV = num
    let s = String(num).split('')

    for(let i=0; i<s.length; i++){
        if(s[i] == '6'){
          let  r = s.toSpliced(i,1,'9').join('')
            maxV = Math.max(maxV,+r)
        }else{
          let  r = s.toSpliced(i,1,'6').join('')
             maxV = Math.max(maxV,+r)
        }
    }

    return maxV
};