class baseClass {
    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async fill(selector, value) {
        await this.page.fill(selector, value);
    }

    async click(selector) {
        await this.page.click(selector);
    }

    async getText(selector) {
        return await this.page.textContent(selector);
    }
}

module.exports = { baseClass };