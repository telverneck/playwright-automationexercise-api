import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 60000,
    use: {
        baseURL: 'https://automationexercise.com/api',
        ignoreHTTPSErrors: true,
    },
    projects: [
        {
            name: 'API Tests',
            use: {},
            testMatch: /.*\.api\.spec\.ts/,
        },
    ],
});
