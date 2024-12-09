# Playwright Automation for Sauce Demo

## Prerequisites

1. Install Node.js (version 16 or above).
2. Install Playwright globally or locally in your project.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Ensure Playwright dependencies are installed by running `npx playwright install`.

## Running Tests

- To run all tests:
  ```bash
  npx playwright test
  ```
- To run spesific tests:
  npx playwright test tests/login.spec.js

## Test Cases Covered

Login functionality.
Adding 2, 3, and 4 items to the cart.
Full purchase flow including checkout and assertion for successful order placement.
