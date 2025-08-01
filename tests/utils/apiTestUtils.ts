import { APIResponse } from '@playwright/test';
import { expect } from '@playwright/test';

export async function validateStatus(response: APIResponse, expectedStatus: number) {
    expect(response.status()).toBe(expectedStatus);
}

export async function validateResponseTime(startTime: number, endTime: number, maxTimeMs = 500) {
    const duration = endTime - startTime;
    expect(duration).toBeLessThanOrEqual(maxTimeMs);
    return duration;
}

export async function validateBodyContains(response: APIResponse, expected: string | string[]) {
    const body = await response.text();
    const checks = Array.isArray(expected) ? expected : [expected];

    for (const item of checks) {
        expect(body).toContain(item);
    }
}
