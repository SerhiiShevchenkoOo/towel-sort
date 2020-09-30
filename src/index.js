
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (typeof (matrix) == 'undefined') return []
    else if (matrix.length == 0) return []
    else matrix.forEach((element, index) => {
        if (index % 2 == 0 && typeof (element) != 'undefined') element.sort((a, b) => a - b).forEach(item => arr.push(item) && typeof (element) != 'undefined')
        if (index % 2 != 0 && typeof (element) != 'undefined') element.sort((a, b) => b - a).forEach(item => arr.push(item))
    })
    return arr
}
