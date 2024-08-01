function generateID() {
    let firstPart = Math.random().toString(36).substring(2, 15).toUpperCase();
    let secondPart = Math.random().toString(36).substring(2, 15).toUpperCase();
    return firstPart + secondPart;
}

module.exports = {
    generateID
};