import { test, expect, request } from '@playwright/test';
import { ApiClient, validateStatus, validateResponseTime, validateBodyContains } from '../utils';

test.describe('POST verify login', () => {
    let client: ApiClient;
    const iterations = 20;
    const responseTimes: number[] = [];
    const endpoint = '/verifyLogin';

    test.beforeAll(async ({}) => {
        const context = await request.newContext();
        client = new ApiClient(context);
    });

    test('Get All Producsts List', async () => {
        const context = await request.newContext();
        const payload = { email: 'user@example.com', password: '123456' };

        const start = Date.now();
        const response = await client.post(endpoint,{
            form: payload,
        });
        const end = Date.now();
    
        await validateStatus(response, 200);
        await validateResponseTime(start, end);
        await validateBodyContains(response, ['Login successful', 'token']); 
    });

        test('Measure response times and calculate metrics', async () => {
            const context = await request.newContext();

        for (let i = 0; i < iterations; i++) {
            const start = Date.now();
            const response = await client.get(endpoint);
            const end = Date.now();
            
            const time = end - start;
            responseTimes.push(time);
            
            expect(response.status()).toBe(200);
        }

        // Métricas
        const average = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
        const sorted = [...responseTimes].sort((a, b) => a - b);
        const p95 = sorted[Math.floor(sorted.length * 0.95) - 1];
        const min = Math.min(...responseTimes);
        const max = Math.max(...responseTimes);

        // Output
        console.log('\n📊 Performance Summary '+ endpoint);
        console.log(`➡️ Iterações: ${iterations}`);
        console.log(`⏱️ Tempo médio: ${average.toFixed(2)}ms`);
        console.log(`🚀 P95: ${p95}ms`);
        console.log(`🔻 Min: ${min}ms`);
        console.log(`🔺 Max: ${max}ms`);

        // Assertiva de performance (opcional)
        expect(p95).toBeLessThanOrEqual(2000); // Você pode ajustar esse limite
    });
});
