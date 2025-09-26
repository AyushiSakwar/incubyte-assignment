# Parabank Automation

A modern test automation framework for the Parabank demo application using Playwright, TypeScript, and Cucumber.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run tests
npm test

# Generate HTML report
npm run test:report
```

## 📋 Test Scenarios

### Login (3 scenarios)
- ✅ Successful login with valid credentials
- ✅ Login validation with empty fields
- ✅ Login error handling with invalid credentials

### Registration (3 scenarios)
- ✅ Successful account creation
- ✅ Registration validation with empty fields
- ✅ Password mismatch validation

## 🏗️ Architecture

```
parabank-automation/
├── features/          # BDD feature files
├── pages/            # Page Object Model
├── steps/            # Step definitions
├── support/          # Test support files
├── utils/            # Configuration & locators
└── reports/          # Test reports
```

## ⚙️ Configuration

- **Locators**: `utils/locators.ts` - All element selectors
- **Config**: `utils/configs.ts` - Test data and settings
- **Timeouts**: 30 seconds global, 30 seconds per step

## 🛠️ Commands

```bash
npm test              # Run all tests
npm run test:headed   # Run with visible browser
npm run test:debug    # Run in debug mode
npm run test:report   # Run tests + generate HTML report
npm run report        # Generate HTML report only
npm run open-report   # Open HTML report in browser
```

## 📊 Reports

- **Console**: Real-time progress dots
- **JSON**: `reports/cucumber_report.json`
- **HTML**: `reports/cucumber-html-report.html` (Bootstrap theme)

## 🔧 Tech Stack

- **Playwright** - Browser automation
- **TypeScript** - Type-safe JavaScript
- **Cucumber** - BDD framework
- **ES6 Modules** - Modern JavaScript
- **Page Object Model** - Maintainable structure
