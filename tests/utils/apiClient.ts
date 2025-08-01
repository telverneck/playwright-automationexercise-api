import { APIRequestContext, request } from '@playwright/test';

export class ApiClient {
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async get(endpoint: string, params?: Record<string, string>) {
        const response = await this.request.get(endpoint, { params });
        return response;
    }

    async post(endpoint: string, data: any) {
        const response = await this.request.post(endpoint, {
        data,
        });
        return response;
    }

    async delete(endpoint: string) {
        const response = await this.request.delete(endpoint);
        return response;
    }
}
