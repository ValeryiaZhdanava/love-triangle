/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
const log4js = require("log4js");
const logger = log4js.getLogger('Service logger');

module.exports = function getLoveTrianglesCount(preferences = []) {
    let array = [];
    for (let i = 0; i < preferences.length; i++) {
        let first = preferences[i - 1];
        let second = preferences[first - 1];
        let third = preferences[second - 1];
        if (third === i && first !== second && !array.includes(second)) {
            // logger.info(first, second, third);
            array.push(first, second, third);
         }
    }
    logger.info(array.length/3);
    return array.length/3;
};
