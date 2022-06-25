const base = require('../base');
const expect = require("chai").expect;
const homePage = require("../pageobjects/home.page");
const productViewPage = require("../pageobjects/productView.page");
const cartPage = require("../pageobjects/cart.page");

describe("Verify Add to cart scenarios on Apptim app", function () {
    before(function () {
        this.timeout(300 * 1000);
        return base.driverSetup();
    });

    after(function () {
        base.driverQuit();
    });

    it("should add product to cart", async function () {
        await base.spendTime();
        await homePage.selectNokiaLumia();
        await base.spendTime();
        await productViewPage.addToCart();
        await base.spendTime();
        await base.goBack();
        await base.spendTime();
        await homePage.goToCart();
        await base.spendTime();
        const nokiaLumiaItem = await cartPage.lookForNokiaLumia(); 
        expect(nokiaLumiaItem).to.exist;
    });
});
