class teste2e {
    get cookie() {
        return $('button[class="cky-btn cky-btn-accept"]');
    }
    get firstName() {
        return $('input[id="input_7_5"]');
    }
    get lastName() {
        return $('input[id="input_7_18"]');
    }
    get email() {
        return $('input[id="input_7_17"]');
    }
    get phoneNumber() {
        return $('input[id="input_7_8"]');
    }
    get hdyhau() {
        return $('div[id="field_7_9"]');
    }
    get company() {
        return $('div[id="field_7_11"]');
    }
    get budget() {
        return $('div[id="field_7_12"]');
    }
    get privacyPolicy() {
        return $('input[id="input_7_16_1"]');
    }
    get sendMessage() {
        return $('button[id="gform_submit_button_7"]');
    }
    get emailError() {
        return $('div[id="validation_message_7_17"]');
    }
    get checkbox() {
        return $('input[id="input_7_16_1"]');
    }
    get sendMessage() {
        return $('button[data-text="Send message"]');
    }

    get upload() {
        return $('button[id="gform_browse_button_7_3"]');
    }



    // ovo je funkcija, async znači asynkrono, to jest stalno se poziva dok se ne zovne
    // imaš async funckije i sync funkcije, kod testiranja se stalno koriste async
    // <li class="active-result" data-option-array-index="2">Google</li> ovo je element od google da kliknemo
    // mi smo ispod dolje napraviti da mi funckiju koja uđe u ove elemente i traži tekst, teks smo koristili u testu
    //istu stvar smo napravili za budget

    async selectHowDidYouHear(option) {
        const optionToSelect = $(`//li[contains(@class,'active-result') and text()='${option}']`);
        await optionToSelect.waitForClickable();
        await optionToSelect.click();
    }

    async selectBudgetOption(optionText) {
        const option = $(`//li[contains(@class,"active-result") and normalize-space()="${optionText}"]`);
        await option.waitForDisplayed({ timeout: 4000});
        await option.click();
    }

}

module.exports = new teste2e();
