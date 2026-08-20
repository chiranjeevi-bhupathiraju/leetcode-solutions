/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

    let set = new Set()
    for(let e of emails){
       let f = e.slice(0,e.includes('+')?e.indexOf('+'):e.indexOf('@')).replaceAll('.','')
        let s = e.slice(e.indexOf('@'))
        
        set.add(f+s)

    }

    return set.size
};