const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

module.exports = new SecurePage();


//ovo nam ne treba možemo cijeli file izbrisati
//ovaj login.page.js nek stoji
