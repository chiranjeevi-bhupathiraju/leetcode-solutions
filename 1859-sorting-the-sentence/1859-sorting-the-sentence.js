/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return s.split(' ').sort((a,b)=> Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0])).join(' ').replaceAll(/\d+/g,'')
};