function scoreOfString(s: string): number {
    let score = 0

    for(let i=0; i<s.length-1;i++){
        let cc = s[i].toLowerCase()
        let nc = s[i+1].toLowerCase()
        score += Math.abs(cc.charCodeAt(0)-nc.charCodeAt(0))
    }

  return score
};