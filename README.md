# 🧪 Playwright API Automation Framework

This project is a structured and scalable test automation framework using [Playwright](https://playwright.dev) focused on **API testing**.

## 🚀 Features

- ✅ Automated API tests using Playwright Test Runner  
- 🔧 Modular architecture with reusable utilities and API client  
- 📦 Organized test structure per endpoint  
- ⏱️ Response time validation  
- 🔁 Reuse of common test validations  
- 🌐 Base URL: `https://automationexercise.com/api`

## 🧱 Project Structure

```
playwright-api-framework/
│
├── tests/                    # API test cases
│   ├── users/
│   │   └── getUsers.spec.ts
│   └── products/
│       └── getProducts.spec.ts
│
├── utils/
│   ├── apiClient.ts         # API request abstraction
│   └── apiTestUtils.ts      # Common validations (status, time, body)
│
├── playwright.config.ts     # Playwright configuration
└── README.md
```

## 🧪 Sample Test

```ts
test('GET /productsList', async () => {
    const response = await client.get('/productsList');
    validateStatus(response, 200);
    validateResponseTime(response, 500);
    validateBodyContains(await response.text(), 'products');
});
```

## 📦 Setup Instructions

1. Clone the repository  
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Run tests:  
   ```bash
   npx playwright test
   ```

## ✅ Validations

Each test includes:

- ✅ Status Code Validation  
- ⏱️ Response Time Validation  
- 🔍 Expected Content in Response Body  

## 📁 Reusable Utilities

You can reuse the helpers inside `utils/apiTestUtils.ts` across all test files to avoid duplication.

## 📬 Contribution

Feel free to fork this project and open pull requests!

---
**Created with ❤️ using Playwright**
