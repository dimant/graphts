export class ResourcePool<T>
{
    private readonly resources: T[] = [];
    private readonly waiters: ((resource: T) => void)[] = [];

    constructor(initialResources: T[])
    {
        this.resources = initialResources;
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
        this.resources.push(resource);

        if (this.waiters.length > 0) {
            const waiter = this.waiters.shift()!;
            waiter(resource);
        }
    }
}
