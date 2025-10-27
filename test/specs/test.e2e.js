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

        const cookieAccept = await $('button.cky-btn-accept');
        if (await cookieAccept.isDisplayed()) {
        await cookieAccept.click();

    });

    it('Popunjavanje polja bez email-a', async () => {
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

    it('Popunjavanje sa više polja', async () => {
        await notchPage.firstName.setValue(firstName);
        await notchPage.lastName.setValue(lastName);
        await notchPage.email.setValue(email);
        await notchPage.phoneNumber.setValue(phoneNumber);
        await notchPage.hdyhau.click(); //klikni na How did you hear about us da dobijemo padajući izbornik
        await notchPage.selectHowDidYouHear("Google"); // nađi mi lement koji sandrži u sebi riječ Google
        await notchPage.company.click(); //klikni na company
        await browser.keys("Test"); //pošalji neka slova u ovom slučaju popunit će se kao riječ Test
        await notchPage.budget.click(); //klikni na budget
        await notchPage.selectBudgetOption("Up to €50.000"); // nađi element koji u sebi sadrži ovo (pogledaj pageobjects kak osam definirao)
        await notchPage.checkbox.click(); //klikni na checkbox
        await notchPage.sendMessage.click(); //klikni na sendmessage
        });
 //elemente nisi dobro našao, krivo si gledao to te je zbunilo
     });

 // kad sve dobro proučiš možeš izbrisati sve ove komentare ovdje i u pageobjects
});
