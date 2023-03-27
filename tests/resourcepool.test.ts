import { ResourcePool } from '../src/ResourcePool';

test('acquire and release', () => {
    const pool = new ResourcePool([1, 2, 3]);

    expect(pool.acquire()).resolves.toBe(3);
    expect(pool.acquire()).resolves.toBe(2);
    expect(pool.acquire()).resolves.toBe(1);

    pool.release(4);
    pool.release(5);

    expect(pool.acquire()).resolves.toBe(5);
    expect(pool.acquire()).resolves.toBe(4);
});

test('acquire and release in order with one waiter', () => {
    const pool = new ResourcePool([1, 2, 3]);

    const first =  pool.acquire();
    const second = pool.acquire();
    const third =  pool.acquire();
    const fourth = pool.acquire();

    pool.release(1);

    expect(fourth).resolves.toBe(1);
});

test('acquire and release in order with multiple waiters', () => {
    const pool = new ResourcePool([1, 2, 3]);

    const first =  pool.acquire();
    const second = pool.acquire();
    const third =  pool.acquire();
    const fourth = pool.acquire();
    const fifth =  pool.acquire();

    pool.release(1);
    pool.release(2);

    // whoever resolves first, gets the last released resource
    expect(fourth).resolves.toBe(2);
    expect(fifth).resolves.toBe(1);
});