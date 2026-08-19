function mergeAlternately(word1: string, word2: string): string {
   let res = ''

   for(let i=0, j=0; i<word1.length || j<word2.length; i++,j++){
      if(word1[i]){
        res += word1[i]
      }
      if(word2[j]){
        res += word2[j]
      }
   }

   return res
};