const { baseClass } = require('./baseClass.js');
const {expect} = require('@playwright/test')
class homePage extends baseClass {
    constructor(page) {
        super(page);
        this.LeftCornerText = '.title';
        this.productsCard = '.inventory_item';
    }
    async verifyLeftCornerText() {
        await expect(this.page.locator(this.LeftCornerText)).toContainText("Products");
    }
    async getProductCount() {
        await expect(this.page.locator(this.productsCard)).toHaveCount(6); 
    }
}

module.exports = { homePage };