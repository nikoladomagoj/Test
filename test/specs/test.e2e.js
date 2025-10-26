const notchPage = require('../pageobjects/notch.page');

const loginURL = 'https://wearenotch.com/qa_task/'; 

describe('Notch qa task', () => {

    let firstName;
    let lastName;
    let email;
    let phoneNumber;
    let company;

    before('Daj vrijednost ovim iznad varijablama', async () => {
        firstName = 'pero';
        lastName = 'peric';
        email = 'pero.peric@gmail.com';
        phoneNumber = '0973205627';
        company = "Apple"
        await browser.url(loginURL);
/*
        const cookieAccept = await $('button.cky-btn-accept');
        if (await cookieAccept.isDisplayed()) {
        await cookieAccept.click();
        
    }*/
    });
    /*
    it('Popunjavanje polja bez email-a', async () => {
        //await notchPage.cookie.click();
        await notchPage.firstName.setValue(firstName);
        await notchPage.lastName.setValue(lastName);
        //await notchPage.email.setValue(email);
        await notchPage.phoneNumber.setValue(phoneNumber);
        await notchPage.privacyPolicy.click();
        await notchPage.sendMessage.click();
        await expect(notchPage.emailError).toBeDisplayedInViewport();
    })

    it('Popunjavanje polja sa vrijednostima iznad', async () => {
        await notchPage.firstName.setValue(firstName);
        await notchPage.lastName.setValue(lastName);
        await notchPage.email.setValue(email);
        await notchPage.phoneNumber.setValue(phoneNumber);

    });
*/
    it('Popunjavanje sa više polja', async () => {
        await notchPage.cookie.waitForDisplayed({timeout:1000});
        await notchPage.cookie.click();

        await notchPage.firstName.setValue(firstName);
        await notchPage.lastName.setValue(lastName);
        await notchPage.email.setValue(email);
        await notchPage.phoneNumber.setValue(phoneNumber);

        
        //await notchPage.hdyhau.scrollIntoView();
        //await notchPage.hdyhau.waitForDisplayed({ timeout: 5000 });
        await notchPage.hdyhau.selectByVisibleText("Facebook");

        await notchPage.company.setValue(company);

        await notchPage.budget.selectByVisibleText('Up to €50.000');

    });
});
