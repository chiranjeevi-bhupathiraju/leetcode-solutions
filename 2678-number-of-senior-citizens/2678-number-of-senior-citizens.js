/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let ct = 0

    for(let i=0; i<details.length; i++){
        let age = +(details[i].slice(11,13))

        if(age > 60){
            ct ++
        }
    }

    return ct
};