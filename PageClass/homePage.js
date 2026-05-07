const { baseClass } = require('./baseClass.js');

class homePage extends baseClass {
    constructor(page) {
        super(page);
        this.LeftCornerText = '.title';
        this.productsCard = '.inventory_item';
    }
    async verifyLeftCornerText() {
        await this.page.locator(this.LeftCornerText).toContainText("Products");
    }
    async getProductCount() {
        return await this.page.locator(this.productsCard).count(); 
    }
}

module.exports = { homePage };