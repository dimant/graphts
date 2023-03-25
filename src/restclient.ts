import axios from 'axios';

export class RestClient
{
  private endpoint: string;
  private accessToken: string;

  constructor(endpoint: string, accessToken: string) {
    this.endpoint = endpoint;
    this.accessToken = accessToken;
  }

  async get<T>(query: string) : Promise<T> {
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
    const url = `${this.endpoint}${query}`;
    const response = await axios.get(url, { headers });
    return response.data.value as T;
  }

  async post<T, U>(query: string, data: U) : Promise<T> {
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(data);
    const url = `${this.endpoint}${query}`;
    const response = await axios.post(url, body, { headers });
    return response.data.value as T;
  }

  async patch<T, U>(query: string, data: U) : Promise<T> {
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(data);
    const url = `${this.endpoint}${query}`;
    const response = await axios.patch(url, body, { headers });
    return response.data.value as T;
  }
}