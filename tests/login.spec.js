const { test, expect } = require('@playwright/test');
const { loginPage } = require('../PageClass/loginPage');

test.describe("Validation with Valid crudentails",()=>{
    test("Login Correct Crudentails", async ({ page }) => {
        const login = new loginPage(page);
    
        await login.openLoginPage();
        await login.formFill('standard_user', 'secret_sauce');
    
        await expect(page).toHaveURL(/inventory/);
    });
})


test.describe("Validation with InValid crudentails",()=>{
test('Login with Locked user',async({page})=>{
    const login = new loginPage(page);

    await login.openLoginPage();
    await login.formFill('locked_out_user', 'secret_sauce');

    const error = await login.getErrMsg();
    await expect(error).toContain('user has been locked out.');
})

test("Login with inValid Credentials", async ({ page }) => {
    const login = new loginPage(page);

    await login.openLoginPage();
    await login.formFill('Wrong_user', 'Wrong_Pass');

    const error = await login.getErrMsg();
    await expect(error).toContain('Username and password do not match');
});
})