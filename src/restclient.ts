import axios from 'axios';

export interface IRestClient {
  get<T>(path: string): Promise<T>;

  search<T>(path: string): Promise<T>;

  post<T, U>(collection: string, data: U): Promise<T>;

  patch<T, U>(collection: string, data: U): Promise<T>;

  delete(collection: string, id: string): Promise<void>;
}

export class RestClient implements IRestClient {
  private endpoint: string;
  private accessToken: string;
  private nextLink: string;

  constructor(endpoint: string, accessToken: string) {
    this.endpoint = endpoint;
    this.accessToken = accessToken;
    this.nextLink = '';
  }

  public hasNext(): boolean {
    return this.nextLink !== '';
  }

  async get<T>(path: string): Promise<T> {
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
    const url = `${this.endpoint}/${path}`;
    const response = await axios.get(url, { headers });
    return response.data.value as T;
  }

  public async next<T>(): Promise<T> {
    if (!this.hasNext()) {
      throw new Error('No next link');
    }

    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
    const response = await axios.get(this.nextLink, { headers });
    return response.data.value as T;
  }

  async search<T>(path: string): Promise<T> {
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
      'ConsistencyLevel': 'eventual'
    };
    const url = `${this.endpoint}/${path}`;
    const response = await axios.get(url, { headers });
    return response.data.value as T;
  }

  async post<T, U>(path: string, data: U): Promise<T> {
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(data);
    const url = `${this.endpoint}/${path}`;
    const response = await axios.post(url, body, { headers });
    return response.data.value as T;
  }

  async patch<T, U>(path: string, data: U): Promise<T> {
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(data);
    const url = `${this.endpoint}/${path}`;
    const response = await axios.patch(url, body, { headers });
    return response.data.value as T;
  }

  async delete(path: string, id: string): Promise<void> {
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
    const url = `${this.endpoint}/${path}`;
    await axios.delete(url, { headers });
  }
}