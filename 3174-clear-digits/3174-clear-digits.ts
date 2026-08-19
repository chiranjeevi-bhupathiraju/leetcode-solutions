function clearDigits(s: string): string {
    let r = ''

    for(let i=0; i<s.length; i++){
        if(!isNaN(+s[i])){
              r =  r.slice(0,r.length-1)
        }else{
            r += s[i]
        }
    }

    return r
};