/// Compares two objects and returns an array of differences.
/// The array of differences is in the format of 'path.to.key: ---oldValue +++newValue'
/// If an element is present in one object but not the other, it will be ignored.
/// @param {Object} a - The first object to compare
/// @param {Object} b - The second object to compare
/// @param {Array} deltas - The array of differences
/// @param {String} current - The current path
/// @returns {Array} - The array of differences
function compare(a, b, deltas = [], current = 'obj') {
    const aKeys = Object.keys(a);

    for (const key of aKeys) {
        if (a[key] !== b[key]) {
            if (typeof a[key] === 'object' && typeof b[key] === 'object') {
                deltas = compare(a[key], b[key], deltas, `${current}.${key}`);
            } else {
                deltas.push(`${current}.${key}: ---${a[key]} +++${b[key]}`);
            }
        }
    }

    return deltas;
}

module.exports = {
    compare
};