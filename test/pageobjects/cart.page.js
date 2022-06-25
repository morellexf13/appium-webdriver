const base = require('../base');
//** Accessibility Id & xpath obtained using Appium Inspector */
//const NOKIA_LUMIA_ITEM = 'Nokia lumnia 1520';
const NOKIA_LUMIA_ITEM = '//android.widget.LinearLayout[@content-desc="Nokia lumnia 1520"]';

class cartPage {   
    async lookForNokiaLumia() { 
        const nokiaLumiaItem = await base.getElementByXPath(NOKIA_LUMIA_ITEM);
        return nokiaLumiaItem;
    }
}

module.exports = new cartPage();