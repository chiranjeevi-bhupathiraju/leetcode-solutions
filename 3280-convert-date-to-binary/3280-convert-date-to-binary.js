/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
      return date.split('-').map(e=>(+e).toString(2)).join('-')
};