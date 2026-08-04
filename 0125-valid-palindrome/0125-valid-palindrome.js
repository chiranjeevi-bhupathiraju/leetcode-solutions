/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    let ReveseCleanS = cleanS.toLowerCase().split('').reverse().join('')

   return cleanS === ReveseCleanS
};
