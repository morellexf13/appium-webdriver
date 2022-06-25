const base = require('../base');
//** xpaths obtained using Appium Inspector */
const NOKIA_LUMIA_ITEM = '(//android.widget.TextView[@content-desc="product_item_title"])[1]';
const CART_BTN = '(//android.widget.Button[@content-desc="cart_button"])[1]';


class HomePage {   

    async selectNokiaLumia() {
        const nokiaLumiaItem = await base.getElementByXPath(NOKIA_LUMIA_ITEM);
        await nokiaLumiaItem.click();
    }

    async goToCart() { 
        const cartBtn = await base.getElementByXPath(CART_BTN);
        await cartBtn.click();
    }
}

module.exports = new HomePage();