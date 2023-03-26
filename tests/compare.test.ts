const d = require('../src/compare.js');

test('a is same as b', () => {
    const a = { a: 1, b: 2 };
    const b = { a: 1, b: 2 };

    const deltas = d.compare(a, b);

    expect(deltas).toEqual([]);
});

test('a is different from b', () => {
    const a = { a: 1, b: 2 };
    const b = { a: 1, b: 3 };

    const deltas = d.compare(a, b);

    expect(deltas[0]).toEqual("obj.b: ---2 +++3");
});

test('a.c is different from b.c', () => {
    const a = { a: 1, b: { c: 2 } };
    const b = { a: 1, b: { c: 3 } };

    const deltas = d.compare(a, b);

    expect(deltas[0]).toEqual("obj.b.c: ---2 +++3");
});

test('a.a and a.b are different from b.a and b.b', () => {
    const a = { a: 1, b: 2 };
    const b = { a: 3, b: 4 };

    const deltas = d.compare(a, b);

    expect(deltas).toEqual(["obj.a: ---1 +++3", "obj.b: ---2 +++4"]);
});