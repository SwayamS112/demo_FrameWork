# SauceDemo Playwright Automation Framework

This project contains automated UI test scripts for the SauceDemo application using Playwright with JavaScript.
The framework follows the Page Object Model (POM) design pattern for better readability, reusability, and maintainability.

---

# Application Under Test

* Website: https://www.saucedemo.com/
* Username: `standard_user`
* Password: `secret_sauce`

---

# Tech Stack

* Playwright
* JavaScript
* Node.js
* Git & GitHub
* GitHub Actions

---

# Framework Features

* Page Object Model (POM)
* Reusable Base Class Methods
* Custom Fixtures
* Assertions with Playwright Expect
* Modular Test Structure
* Easy Maintenance & Scalability
* GitHub Actions Integration
* Screenshot/Report Support

---

# Project Structure

```bash
project/
│
├── PageClass/
│   ├── addCartPage.js
│   ├── baseClass.js
│   ├── homePage.js
│   └── loginPage.js
│
├── fixtures/
│   └── baseFixture.js
│
├── tests/
│   ├── addtocart.spec.js
│   ├── home.spec.js
│   └── login.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Test Scenarios Covered

## Login Module

* Login with valid credentials
* Login with invalid credentials
* Locked user validation
* Error message validation

## Home Page Module

* Verify Products title
* Verify total product count

## Add To Cart Module

* Add first product to cart
* Verify cart badge count
* Validate product name in cart
* Validate product price in cart

---

# Page Classes Overview

## loginPage.js

Handles:

* Login page navigation
* Form filling
* Error message validations

Methods:

* `openLoginPage()`
* `formFill(username, password)`
* `getErrMsg()`

---

## homePage.js

Handles:

* Home page validations
* Product count validations

Methods:

* `verifyLeftCornerText()`
* `getProductCount()`

---

## addCartPage.js

Handles:

* Product details
* Add to cart functionality
* Cart validations

Methods:

* `getFirstProductName()`
* `getFirstProductPrice()`
* `addFirstProductToCart()`
* `verifyCartBadge()`
* `openCartPage()`
* `getCartProductName()`
* `getCartProductPrice()`

---

## baseClass.js

Reusable common methods:

* `goto()`
* `fill()`
* `click()`
* `getText()`

---

# Fixture Support

Custom fixture created in:

```bash
fixtures/baseFixture.js
```

Features:

* Reusable login setup
* Logged-in page fixture
* Cleaner test implementation

---

# Installation & Setup

## Install Dependencies

```bash
npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

---

# Run Tests

## Run All Tests

```bash
npx playwright test
```

---

## Run Specific Test File

```bash
npx playwright test tests/login.spec.js
```

```bash
npx playwright test tests/home.spec.js
```

```bash
npx playwright test tests/addtocart.spec.js
```

---

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

# GitHub Actions Integration

This framework is integrated with GitHub Actions for Continuous Integration (CI).

Features:

* Automated test execution
* GitHub workflow support
* CI validation on push

Add your workflow link here:

```text
https://github.com/SwayamS112/demo_FrameWork/actions
```

---

# Reports & Debugging

Playwright supports:

* HTML Reports
* Screenshots on failure
* Video recording
* Trace viewer

Open HTML report:

```bash
npx playwright show-report
```

---

# GitHub Repository

Add your repository link here:

```text
https://github.com/SwayamS112/demo_FrameWork
```

---

# Future Enhancements

* Checkout flow automation
* Remove from cart validation
* Cross-browser execution
* Data-driven testing
* API testing integration
* Allure reporting

---

## Connect With Me

* GitHub: https://github.com/SwayamS112
* LinkedIn: https://www.linkedin.com/in/swayam-sood-b76855252/
