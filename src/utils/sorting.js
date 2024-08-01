function stringSort(a, b) {
    return a.localeCompare(b);
}

function numberSort(a, b) {
    let numA = parseFloat(a);
    let numB = parseFloat(b);
    
    return numA - numB;
}

let sorting = {
    stringSort,
    numberSort
};

module.exports = sorting;