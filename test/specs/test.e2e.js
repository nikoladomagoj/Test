const notchPage = require('../pageobjects/notch.page');

const loginURL = 'https://wearenotch.com/qa_task/';

describe('Notch qa task', () => {

    let firstName;
    let lastName;
    let email;
    let phoneNumber;

    before('Daj vrijednost ovim iznad varijablama', async () => {
        firstName = 'pero';
        lastName = 'peric';
        email = 'pero.peric@gmail.com';
        phoneNumber = '0973205627';

        await browser.url(loginURL);

        // Klik na Accept Cookies
        const acceptCookiesBtn = await $('button.cky-btn-accept');
        if (await acceptCookiesBtn.isDisplayed()) {
            await acceptCookiesBtn.click();
        }
    });

    it('Popunjavanje polja sa vrijednostima iznad', async () => {
        await notchPage.firstName.setValue(firstName);
        await notchPage.lastName.setValue(lastName);
        await notchPage.email.setValue(email);
        await notchPage.phoneNumber.setValue(phoneNumber);
    });
});
