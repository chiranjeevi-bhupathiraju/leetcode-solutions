function countAsterisks(s: string): number {
    let bc = 0
    let ac = 0

    for(let i=0; i<s.length; i++){
        if(s[i] == '|'){
            bc++
        }

        if(bc%2== 0 && s[i] == '*'){
            ac++
        }
    }

    return ac
};