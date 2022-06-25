var wd = require("wd"),
  driver = wd.promiseChainRemote({
    host: "0.0.0.0",
    // host: "127.0.0.1",
    port: 4723,
    path: "/wd/hub",
  });

const capabilities = {
  platformName: "Android",
  platformVersion: "12",
  deviceName: "Android Emulator",
  app: "/Users/YOUR USER/Documents/GitHub/appium-webdriver/resources/debug.apk", // path to the app
  automationName: "UiAutomator2", // Name of automation driver, essential parameter for webdriverio locators to work.
}
const DEFAULT_TIME_TO_WAIT_MS = 500;
class Base {
  driverSetup() {
     /** !To test in Devicefarm remove the capabilities parameter */
    return driver.init(capabilities);
  }

  driverQuit() {
    driver.quit();
  }

  // Press the 'Back' button.
  async goBack() {
    await driver.back();
  }

  // Wait a certain amount of time for an element to be visible.
  async spendTime(time = DEFAULT_TIME_TO_WAIT_MS) {
    await new Promise((res) => setTimeout(res, time));
  }

  // Get an element by its xpath.
  async getElementByXPath(xpath) {
    const item = await driver.elementByXPath(xpath);
    return item;
  }

  // Get an element by its id.
  async getElementByAccessibilityId(id) {
    const item = await driver.elementByAccessibilityId(id);
    return item;
  }
}

module.exports = new Base();
