/// Manages a pool of resources, allowing them to be acquired and released.
/// If no resources are available, the acquire method will wait until one is released.
/// If a resource is released when there are no waiters, it will be cleaned up
/// using the cleanup callback and then returned to the pool.
export class ResourcePool<T>
{
    private readonly resources: T[] = [];
    private readonly waiters: ((resource: T) => void)[] = [];
    private readonly cleanup: (resource:T) => void;

    constructor(initialResources: T[], cleanup: (resource:T) => void)
    {
        this.resources = initialResources;
        this.cleanup = cleanup;
    }

    public async acquire(): Promise<T>
    {
        if (this.resources.length > 0) {
            return this.resources.pop()!;
        }

        return new Promise((resolve) => {
            this.waiters.push(resolve);
        }).then(() => this.resources.pop()!);
    }

    public release(resource: T)
    {
        this.cleanup(resource);
        this.resources.push(resource);

        if (this.waiters.length > 0) {
            const waiter = this.waiters.shift()!;
            waiter(resource);
        }
    }
}
