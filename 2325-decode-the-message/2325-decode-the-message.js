/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let keys = [...new Set(key.replaceAll(' ',''))]

    let pairs = {}

    for(let i =0;i<keys.length;i++){
         pairs[keys[i]] = String.fromCharCode(i+97)
    }

    let res = ''
    for(i=0;i<message.length;i++){
        res += pairs[message[i]] ?? ' '
    }

    return res
};