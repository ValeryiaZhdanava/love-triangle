/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
    let array = [];
    for (let i = 0; i < preferences.length; i++) {
        let first = preferences[i - 1];
        let second = preferences[first - 1];
        let third = preferences[second - 1];
        if (third === i && first !== second && !array.includes(second)) {
            array.push(first, second, third);
         }
    }
    return array.length/3;
};
