
# 🔐 RTi Auto Locksmith – Cypress Test Suite

This project is an **End-to-End (E2E)** test suite for the website [rtiautolocksmith.co.uk](https://rtiautolocksmith.co.uk), built using [Cypress](https://www.cypress.io/). It covers navigation, form validation, i18n localization, responsive layout behavior, SEO attributes, and edge cases.

---

## 📦 Technologies Used

- ✅ Cypress 12+
- ✅ Mochawesome reporter (for JSON test reports)
- ✅ GitHub Actions (CI/CD)
- ✅ Jira (for test case registration and tracking)

> All test cases are registered manually in the **Jira** system under the project `rti_web_test`. Test progress is tracked using Backlog and Sprints.

---

## 🚀 How to Run Tests Locally

```bash
# 1. Install dependencies
npm install

# 2. Run Cypress in interactive mode
npx cypress open

# 3. Run all tests in headless mode
npx cypress run --reporter mochawesome
```

---

## 📁 Test Structure

```
cypress/
├── e2e/
│   ├── 01_navigation.cy.js
│   ├── 02_form.cy.js
│   ├── 03_content.cy.js
│   ├── 04_social-contact.cy.js
│   ├── 05_edge-bug-tests.cy.js
│   └── 06_visual-i18n.cy.js
├── support/
│   └── commands.js
├── reports/
│   └── mochawesome.json (automatically generated)
```

---

## 🔁 GitHub Actions CI

Tests run automatically on every push to the `main` or `test` branch.

### `.github/workflows/cypress.yml` (example workflow)

```yaml
name: Cypress Tests

on:
  push:
    branches: [ main, test ]
  pull_request:

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests with Mochawesome
        run: npx cypress run --reporter mochawesome

      - name: Upload test report
        uses: actions/upload-artifact@v3
        with:
          name: mochawesome-report
          path: cypress/reports/mochawesome.json
```

---

## 👩‍💻 Author

Kristina Masiulytė Tomkienė  
Project: [RTi Auto Locksmith UK](https://rtiautolocksmith.co.uk)  
Testing: Cypress + GitHub Actions + Jira (manual registration)
