function findPermutationDifference(s: string, t: string): number {
    let diff = 0
    for(let i=0;i<s.length;i++){
         diff += Math.abs(s.indexOf(s[i]) - t.indexOf(s[i]))
    }

    return diff
};