const base = require('../base');
//** Accessibility Ids obtained using Appium Inspector */
const usernameTxt = 'Username';
const passwordTxt = 'Password';
const loginBtn = 'Log In';

class HomePage {   

    async setUsername(value) {
        const usernameItem = await base.getElementByAccessibilityId(usernameTxt);
        await usernameItem.click();
        await usernameItem.sendKeys(value);
    }

    async setPassword(value) {
        const passwordItem = await base.getElementByAccessibilityId(passwordTxt);
        await passwordItem.click();
        await passwordItem.sendKeys(value);
    }

    async login() {
        const loginBtnItem = await base.getElementByAccessibilityId(loginBtn);
        await loginBtnItem.click();
    }
}

module.exports = new HomePage();