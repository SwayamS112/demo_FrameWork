const { test, expect } = require('../fixtures/baseFixture');
const { baseFixture } = require('../fixtures/baseFixture');
const { homePage } = require('../PageClass/homePage');
const {loginPage} = require('../PageClass/loginPage');

test("Validate Home Page after Login", async ({ page }) => {

    const login = new loginPage(page);
    await login.openLoginPage();
    await login.formFill('standard_user','secret_sauce');
    
    const home = new homePage(page)
    await home.verifyLeftCornerText();
    await home.getProductCount();
});