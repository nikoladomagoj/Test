class teste2e {
    
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
}

module.exports = new teste2e();