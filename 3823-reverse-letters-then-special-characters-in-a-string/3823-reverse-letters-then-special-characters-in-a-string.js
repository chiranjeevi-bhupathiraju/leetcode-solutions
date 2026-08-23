/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    let ca = []
    let la = []
  for(i=0; i<s.length; i++){
        if(/^[a-zA-Z]$/.test(s[i])){
            la.unshift(s[i])
        }else{
            ca.unshift(s[i])
        }
    }


    let r = ''
    let li = 0
    let ci = 0

    for(i=0; i<s.length; i++){
        if(/^[a-zA-Z]$/.test(s[i])){
            r += la[li]
            li ++
        }else{
            r += ca[ci]
            ci++
        }
    }

    return r
};