const { baseClass } = require('./baseClass.js');

class loginPage extends baseClass {
    constructor(page) {
        super(page);

        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
        this.errMsg = "[data-test='error']";
    }

    async openLoginPage() {
        await super.goto("https://www.saucedemo.com/");
    }

    async formFill(username, password) {
        await this.fill(this.username, username);
        await this.fill(this.password, password);
        await this.click(this.loginBtn);
    }

    async getErrMsg() {
        return await this.getText(this.errMsg);
    }
}

module.exports = { loginPage };