function mapWordWeights(words: string[], weights: number[]): string {
    const n = words.length
    let s = ''
    for(let i=0; i<n; i++){
         let sum = 0
         let letters = words[i].split('')
         for(let le of letters){
            let index = le.charCodeAt(0)-'a'.charCodeAt(0)
            sum += weights[index]
     
         }
            s += String.fromCharCode('z'.charCodeAt(0)-(sum%26))

    }

    return s
};