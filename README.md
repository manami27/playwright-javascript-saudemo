# Playwright Automation for Sauce Demo
## 📌 Overview
This repository contains automated Playwright tests for the Sauce Demo web application.
The test suite demonstrates functionalities such as logging in, adding multiple items to the cart, and simulating a full purchase flow.

### Application Under Test
I am using https://www.saucedemo.com/ as the Application Under Test. This App is a React.js Frontend

- URL : https://www.saucedemo.com/
- OS : windows
- IDE : Visual Studio Code

## 🚀 Table of Contents
1. Prerequisites
2. Setup
3. Configuration
4. Running Tests
5. Test Cases Covered
6. Directory Structure
7. Common Issues
8. Contributing

## 🛠️ Prerequisites
Before running the tests, ensure you have the following set up:

1. Node.js (v16 or higher) installed on your system.
   You can download it from [official Node.js website](https://nodejs.org/en/).

2. Install Playwright:
- Playwright dependencies are managed locally. No need for global installation.
```bash
npm install
```

## ⚙️ Setup
Follow these steps to set up the project environment:

1. Clone the repository:

```bash
git clone https://github.com/manami27/playwright-javascript-saudemo.git
cd <repository-name>
```
2. Install dependencies: Run the following to install project dependencies:

```bash
npm install
```
3. Install Playwright dependencies: Playwright requires browser binaries and other resources. Install them by running:
```bash
npx playwright install
```

## 🛑 Configuration
Configuration for Playwright can be defined in the ```playwright.config.js``` file.
Here is an example configuration:

```javascript
module.exports = {
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
};
```

## 🚀 Running Tests
1. Run All Tests
Execute all tests located in the tests/ directory using:

```bash
npx playwright test
```
2. Run a Specific Test
To execute a specific test only:

```bash
npx playwright test tests/login.spec.js
```
3. Debugging with Visual Browser
For visual debugging (browser UI):

```bash
npx playwright test --headed
```
4. Run Tests with Device Simulation
You can run tests simulating different devices like this:

```bash
npx playwright test --device="iPhone 12"
```
## 🧪 Test Cases Covered
Below are the test scenarios:

1. Login Functionality
- Verify login with valid and invalid credentials.
2. Add to Cart
- Add 2 items to the cart.
- Add 3 items to the cart.
- Add 4 items to the cart.
3. Full Purchase Flow
- Simulate the full user flow from login to checkout and verify successful order placement.

## 📂 Directory Structure
Here’s the structure of the repository:

```bash
project-root/
│
├── tests/                     # Contains test scenarios
│   ├── fullFlow.spec.js
│   ├── login.spec.js
│   └── selectItems.spec.js
│
├── pages/                     # Page Object Model for better code reuse
|   ├── cartPage.js
|   ├── checkoutPage.js
│   ├── inventoryPage.js
│   └── loginPage.js
│
├── playwright.config.js       # Playwright configuration file
├── package.json               # Lists dependencies and scripts
└── README.md                  # Documentation for the project
```

## ❓ Common Issues
Here are some common problems and their solutions:

1. ```Error: Playwright not installed```
Run this to ensure all necessary dependencies are installed:

```bash
npx playwright install
```
2. Browser Not Launching in ```headed``` Mode
Ensure ```headless: false``` is set in the ```playwright.config.js``` file to visualize the browser while running.

3. Test Cases Not Executing
- Verify that you are referencing the correct file path.
- Ensure all dependencies are correctly installed by running:
```bash
npm install
```
## 🤝 Contributing
We welcome contributions to this project! If you would like to contribute:

1. Fork this repository.
2. Create a feature branch (```git checkout -b feature/your-feature-name```).
3. Commit your changes and push them to your branch.
4. Submit a pull request with a clear explanation of the changes.
