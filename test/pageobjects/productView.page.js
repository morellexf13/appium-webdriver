const base = require('../base');
//** Accessibility Id & xpath obtained using Appium Inspector */
// const ADD_TO_CART_BTN = 'cart_button';
const ADD_TO_CART_BTN = '//android.widget.Button[@content-desc="cart_button"]';

class ProductViewPage {   
    async addToCart() {
        const addToCartBtn = await base.getElementByXPath(ADD_TO_CART_BTN);
        await addToCartBtn.click();
    }
}

module.exports = new ProductViewPage();