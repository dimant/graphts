export class ODataQuery
{
    private collectionName: string;
    private terms: string[];

    constructor() {
        this.collectionName = '';
        this.terms = [];
    }

    public collection(collectionName: string): ODataQuery {
        this.collectionName = collectionName;
        return this;
    }

    public search(property: string, value: string): ODataQuery {
        const _search = `$search="${property}:${value}"`;
        this.terms.push(_search);
        return this;
    }

    public select(properties: string[]): ODataQuery {
        const _select = `$select=${properties.join(',')}`;
        this.terms.push(_select);
        return this;
    }

    public filter(filter: string): ODataQuery {
        const _filter = `$filter=${filter}`;
        this.terms.push(_filter);
        return this;
    }

    public top(n: number): ODataQuery {
        const _top = `$top=${n}`;
        this.terms.push(_top);
        return this;
    }

    public path() : string {
        if (this.collectionName === '')
            throw new Error('Collection name is required');
        return `/${this.collectionName}?${this.terms.join('&')}`;
    }
}