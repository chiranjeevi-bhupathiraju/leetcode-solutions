/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    if ((coordinates.charCodeAt(0) + Number(coordinates.at(1))) % 2 === 0) {
        return false; 
    }
    return true;
};