class teste2e {
    get cookie() {
        return $('button[id="cky-btn-accept"]');
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
    get privacyPolicy() {
        return $('input[id="input_7_16_1"]');
    }
    get sendMessage() {
        return $('button[id="gform_submit_button_7"]');
    }
    get emailError() {
    return $('div[id="validation_message_7_17"]');
    }
}

module.exports = new teste2e();
