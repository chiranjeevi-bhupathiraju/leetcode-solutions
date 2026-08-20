function reverseVowels(s: string): string {
    let r = ''

   const vowels = s.split('').filter(ch=> /[aeiouAEIOU]/.test(ch)).reverse()
    
    let i = 0
   for(let ch of s){
      if(/[aeiouAEIOU]/.test(ch)){
        r += vowels[i]
        i++
      }else {
    r += ch
   }

   }
   return r
};