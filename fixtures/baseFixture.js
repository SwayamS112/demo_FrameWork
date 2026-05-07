const base = require('@playwright/test');
const { loginPage } = require('../PageClass/loginPage');

exports.test = base.test.extend({

    loginPage: async ({ page }, use) => {
        const login = new loginPage(page);
        await use(login);
    },

    loggedInPage: async ({ page }, use) => {
        const login = new loginPage(page);

        await login.openLoginPage();
        await login.formFill('standard_user', 'secret_sauce');

        await use(page);
    }

});

exports.expect = base.expect;