import {test,expect} from '@playwright/test';
import { loginPage } from '../PageClass/loginPage';
import { addCart } from '../PageClass/addCartPage';

test('Validate the Add to Cart Functionality',async({page})=>{
    const login = new loginPage(page);
    
    await login.openLoginPage();
    await login.formFill('standard_user','secret_sauce');

    const cart = new addCart(page);
   
    const homeProductName = await cart.getFirstProductName();
    const homeProductPrice = await cart.getFirstProductPrice();

    await cart.addFirstProductToCart(); 

    const badge = await cart.verifyCartBadge();
    await expect(badge).toBe('1');

    await cart.openCartPage();

    const cartProductName = await cart.getCartProductName();
    const cartProductPrice = await cart.getCartProductPrice();

    await expect(homeProductName).toBe(cartProductName);
    await expect(homeProductPrice).toBe(cartProductPrice);

});