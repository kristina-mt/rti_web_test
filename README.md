
# 🔐 RTi Auto Locksmith – Cypress Test Suite

Šis projektas yra **End-to-End (E2E)** testų rinkinys svetainei [rtiautolocksmith.co.uk](https://rtiautolocksmith.co.uk), sukurtas naudojant [Cypress](https://www.cypress.io/). Testai apima navigaciją, formų validacijas, i18n lokalizaciją, responsive elgseną, SEO atributus ir edge atvejus.

---

## 📦 Naudojamos technologijos

- ✅ Cypress 12+
- ✅ Mochawesome reporteris (JSON ataskaitoms)
- ✅ GitHub Actions (CI/CD)
- ✅ Jira (per CSV arba Xray API)

---

## 🚀 Kaip paleisti testus lokaliai

```bash
# 1. Įsidiek priklausomybes
npm install

# 2. Paleisk Cypress UI režimu
npx cypress open

# 3. Paleisk visus testus headless režimu
npx cypress run --reporter mochawesome
```

---

## 📁 Testų struktūra

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
│   └── mochawesome.json (sugeneruota automatiškai)
```

---

## 🔁 GitHub Actions CI

Testai paleidžiami automatiškai kiekvieno `push` metu į `main` ar `test` šaką.

### `.github/workflows/cypress.yml` (failas bus sukurtas)

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

## 📤 Testų ataskaitų siuntimas į Jira (Xray)

1. Gauk Jira API token  
2. Paleisk rankinį importą:
```bash
curl -H "Content-Type: multipart/form-data" \
  -H "Authorization: Bearer <JIRA_API_TOKEN>" \
  -F "file=@cypress/reports/mochawesome.json" \
  https://xray.cloud.getxray.app/api/v2/import/execution/mochawesome
```

---

## 👩‍💻 Autorius

Kristina Masiulytė Tomkienė  
Projektas: [RTi Auto Locksmith UK](https://rtiautolocksmith.co.uk)  
Testai: Cypress + Jira + GitHub Actions
