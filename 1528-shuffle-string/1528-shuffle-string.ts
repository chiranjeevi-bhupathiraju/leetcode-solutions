function restoreString(s: string, indices: number[]): string {
    let mapping = {}

    for(let i=0; i<indices.length; i++){
        let ch = s.charAt(i)
        let ind = indices[i]

        mapping[ind] = ch
    }

    indices.sort((a,b)=>a-b)
    let r = ''

    for(let ind of indices){
        r += mapping[ind]
    }

    return r
};