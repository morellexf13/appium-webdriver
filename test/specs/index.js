const base = require('../base');
//const expect = require("chai").expect;
const homePage = require("../pageobjects/home.page");

describe("Verify Login Scenarios on Facebook Mobile App", function () {
    before(function () {
        this.timeout(300 * 1000);
        return base.driverSetup();
    });

    after(function () {
        base.driverQuit();
    });

    it("should be able to login using valid credentials", async function () {
        // await homePage.setUsername("My username");
        // await homePage.setPassword("My password");
        // await homePage.login();
        // ...
    });
});
