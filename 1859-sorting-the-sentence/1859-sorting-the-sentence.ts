function sortSentence(s: string): string {
    let words = s.split(' ')
    let n = words.length
    let res = Array(n).fill('')

  for(let i=0; i<n; i++){
       let order = words[i].at(-1)
       let word = words[i].slice(0,words[i].length -1)

       res[(+order)-1] = word
  }

  return res.join(' ')
};