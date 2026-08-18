/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(' ')
   let os = Array(words.length).fill('')

   for(i=0;i<words.length;i++){
       let order = words[i].at(-1)
       let word = words[i].slice(0,words[i].length-1)

       os[order-1] = word
   }

   return os.join(' ')

};