function compare(a, b, deltas = [], current = 'obj') {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    const allKeys = new Set([...aKeys, ...bKeys]);

    for (const key of allKeys) {
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