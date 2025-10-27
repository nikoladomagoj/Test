const notchPage = require('../pageobjects/notch.page');
import path from 'path';

const loginURL = 'https://wearenotch.com/qa_task/'; 

describe('Notch qa task', () => {

    let firstName;
    let lastName;
    let email;
    let phoneNumber;
    let company;
    let projectdetails;

    before('Daj vrijednost ovim iznad varijablama', async () => {
        firstName = 'pero';
        lastName = 'peric';
        email = 'pero.peric@gmail.com';
        phoneNumber = '0973205627';
        company = "Apple"
        projectdetails = "Project testing for work";
        await browser.url(loginURL);
        //cookie, ako se pojavi cookie klikni na cookie
        const cookieAccept = await $('button.cky-btn-accept');
        if (await cookieAccept.isDisplayed()) {
            await cookieAccept.click();
        }
    });

    it('Popunjavanje forme bez email-a', async () => {
        await notchPage.firstName.setValue(firstName);
        await notchPage.lastName.setValue(lastName);
        //await notchPage.email.setValue(email);
        await notchPage.phoneNumber.setValue(phoneNumber);
        await notchPage.privacyPolicy.click();
        await notchPage.sendMessage.click();
        await expect(notchPage.emailError).toBeDisplayedInViewport();
    });

    it('Popunjavanje forme sa definiranim vrijednostima', async () => {
        await notchPage.firstName.setValue(firstName);
        await notchPage.lastName.setValue(lastName);
        await notchPage.email.setValue(email);
        await notchPage.phoneNumber.setValue(phoneNumber);
    });

    it('Popunjavanje forme sa više inputa', async () => {
        await notchPage.firstName.setValue(firstName);
        await notchPage.lastName.setValue(lastName);
        await notchPage.email.setValue(email);
        await notchPage.phoneNumber.setValue(phoneNumber);
        await notchPage.hdyhau.click();
        await notchPage.selectHowDidYouHear("Google");
        await notchPage.company.click();
        await browser.keys("Test");
        await notchPage.budget.click();
        await notchPage.selectBudgetOption("Up to €50.000");
        await notchPage.checkbox.click();
        await notchPage.sendMessage.click();
        });

    it("Upload file-a", async () => {
        await browser.execute(() => {
            const inputEl = document.querySelector('[id="field_7_3"]');
            inputEl.removeAttribute('class');
        });
        await notchPage.upload.click();
        const filePath = path.join(__dirname, '../upload/test.pdf');
        const fileInput = await $('input[type="file"][id^="html5_"]');
        await fileInput.setValue(filePath);
    });

    it("Popunjavanje forme sa svim vrijednostima", async () => {
        await notchPage.firstName.setValue(firstName);
        await notchPage.lastName.setValue(lastName);
        await notchPage.email.setValue(email);
        await notchPage.phoneNumber.setValue(phoneNumber);
        await notchPage.hdyhau.click();
        await notchPage.selectHowDidYouHear("Google");
        await notchPage.company.click();
        await browser.keys("Test");
        await notchPage.budget.click();
        await notchPage.selectBudgetOption("Up to €50.000");
        await notchPage.teamextension.click();
        await notchPage.projectDetails.setValue(projectdetails);
        await browser.execute(() => {
            const inputEl = document.querySelector('[id="field_7_3"]');
            inputEl.removeAttribute('class');
        });
        await notchPage.upload.click();
        const filePath = path.join(__dirname, '../upload/test.pdf');
        const fileInput = await $('input[type="file"][id^="html5_"]');
        await fileInput.setValue(filePath);
        await notchPage.checkbox.click();
        await notchPage.sendMessage.click();
    });
});

