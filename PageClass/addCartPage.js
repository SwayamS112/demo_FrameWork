const { baseClass } = require('./baseClass.js');

class addCart extends baseClass {

    constructor(page) {
        super(page);

        this.firstProduct = '.inventory_item';
        this.productName = '.inventory_item_name';
        this.productPrice = '.inventory_item_price';
        this.addToCartBtn = 'button';
        this.cartIcon = '.shopping_cart_link';
        this.cartBadge = '.shopping_cart_badge';
    }

    // Get first product name from home page
    async getFirstProductName() {
        return await this.page.locator(this.firstProduct).first().locator(this.productName).textContent();
    }

    // Get first product price from home page
    async getFirstProductPrice() {
        return await this.page.locator(this.firstProduct).first().locator(this.productPrice).textContent();
    }

    // Click Add To Cart on first product
    async addFirstProductToCart() {
        await this.page.locator(this.firstProduct).first().locator(this.addToCartBtn).click();
    }

    // Verify cart badge count
    async verifyCartBadge() {
        return await this.page.locator(this.cartBadge).textContent();
    }

    // Open cart page
    async openCartPage() {
        await this.click(this.cartIcon);
    }

    // Cart Page Product Name
    async getCartProductName() {
        return await this.page.locator(this.productName).textContent();
    }

    // Cart Page Product Price
    async getCartProductPrice() {
        return await this.page.locator(this.productPrice).textContent();
    }
}

module.exports = { addCart };