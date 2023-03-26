import axios from 'axios';

export interface IRestClient
{
  get<T>(collection: string) : Promise<T>;

  search<T>(collection: string, property: string, value: string) : Promise<T>;

  post<T, U>(collection: string, data: U) : Promise<T>;

  patch<T, U>(collection: string, data: U) : Promise<T>;
}

export class RestClient implements IRestClient
{
  private endpoint: string;
  private accessToken: string;

  constructor(endpoint: string, accessToken: string) {
    this.endpoint = endpoint;
    this.accessToken = accessToken;
  }

  constructSearchFilter(property: string, value: string) : string {
    return `$search="${property}:${value}"`;
  }

  constructHeaders() {
    return {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    }
  }

  async get<T>(collection: string) : Promise<T> {
    const headers = this.constructHeaders();
    const url = `${this.endpoint}/${collection}`;
    const response = await axios.get(url, { headers });
    return response.data.value as T;
  }

  async post<T, U>(collection: string, data: U) : Promise<T> {
    const headers = this.constructHeaders();
    const body = JSON.stringify(data);
    const url = `${this.endpoint}/${collection}`;
    const response = await axios.post(url, body, { headers });
    return response.data.value as T;
  }

  async patch<T, U>(collection: string, data: U) : Promise<T> {
    const headers = this.constructHeaders();
    const body = JSON.stringify(data);
    const url = `${this.endpoint}/${collection}`;
    const response = await axios.patch(url, body, { headers });
    return response.data.value as T;
  }

  async delete(collection: string, id: string) {
    const headers = this.constructHeaders();
    const url = `${this.endpoint}/${collection}/${id}`;
    await axios.delete(url, { headers });
  }

  async search<T>(collection: string, property: string, value: string) : Promise<T> {
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
      'ConsistencyLevel': 'eventual'
    };

    const filter = this.constructSearchFilter(property, value);
    const url = `${this.endpoint}/${collection}?${filter}`;
    const response = await axios.get(url, { headers });
    return response.data.value as T;
  }
}