# Saucedemo Playwright Automation Framework

A clean and scalable Playwright + TypeScript automation framework using Page Object Model (POM), fixtures, reusable utilities, API tests, and GitHub Actions CI.

---

## Tech Stack
- Playwright (TypeScript)
- Page Object Model (POM)
- Fixtures & Test Data
- Environment Configs (dev/stage/prod)
- API Testing
- GitHub Actions CI
- HTML & Allure Reports

---

## Folder Structure

```
saucedemo-playwright/
│
├── config/                 # dev.json, stage.json, prod.json
├── fixtures/               # login fixture + test data
├── pages/                  # Page Object Model classes
├── tests/                  # UI + API tests
├── utils/                  # Helpers
├── playwright.config.ts    # Global config
├── playwright.config.*.ts  # Environment configs
└── README.md
```

---

## Test Coverage

### UI Tests
- Login (valid, invalid, locked user)
- Inventory (sorting, add/remove items)
- Cart (badge, add/remove)
- Checkout (info, summary, completion)
- Smoke suite

### API Tests
- Fetch users
- Create user

---

## Fixtures & Test Data

**testdata.ts**
```
export const users = {
  standard: { username: 'standard_user', password: 'secret_sauce' },
  locked: { username: 'locked_out_user', password: 'secret_sauce' }
};
```

**baseTest.ts**
- Reusable login fixture  
- `await loginAs('standard')`

---

## How to Run Tests

Install dependencies:
```
npm install
```

Run all tests:
```
npx playwright test
```

Run headed mode:
```
npx playwright test --headed
```

Run environment-specific:
```
npm run test:dev
npm run test:stage
npm run test:prod
```

View HTML report:
```
npx playwright show-report
```

---

## CI/CD (GitHub Actions)

- Installs dependencies  
- Installs Playwright browsers  
- Runs UI + API tests  
- Uploads HTML report  

Workflow file:  
`.github/workflows/playwright-ci.yml`

---

## Architecture Diagram
    A[Tests (UI + API)] --> B[Playwright Runner]
    B --> C[Fixtures]
    B --> D[POM Pages]
    B --> E[Environment Configs]
    B --> F[Reports]
```

---

## Author
**Richa — Test Automation Engineer / SDET**  
Playwright | TypeScript | CI/CD | Automation Frameworks
"# PlaywrightTypeScripteFramework" 
"# PlaywrightTypeScripteFramework" 
