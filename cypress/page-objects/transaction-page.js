/// <reference types="Cypress" />

class Transaction {

    //Web Elements

    elements = {

        getUserListAvailable: () => cy.get('[data-test^=user-list-item]'),
        getSelectContactTitle: () => cy.contains('span.MuiTypography-root', 'Select Contact'),
        getPaymentTitle: () => cy.contains('span.MuiTypography-root', 'Payment'),
        getCompleteTitle: () => cy.contains('span.MuiTypography-root', 'Complete'),
        getAmountField: () => cy.get('#amount'),
        getTranxDescription: () => cy.get('#transaction-create-description-input'),
        getRequestButton: () => cy.get('[data-test="transaction-create-submit-request"]'),
        getPayButton: () => cy.get('[data-test="transaction-create-submit-payment"]'),
        getTranxSubmitted: () => cy.contains('div.MuiAlert-message', 'Transaction Submitted!')
    }

    //Methods

    clickOnFirstUserAvailable() {
        this.elements.getUserListAvailable().first().click();
    }

    titlesDisplayed() {
        return this.elements.getCompleteTitle()
            && this.elements.getSelectContactTitle()
            && this.elements.getPaymentTitle();
    }

    typeAmountAndDesc({ amount = ' ', desc = ' ' } = {}) {
        this.elements.getAmountField().clear().type(amount)
        this.elements.getTranxDescription().clear().type(desc)
    }

    buttonRequestEnabled() {
        return this.elements.getRequestButton();
    }

    buttonPayEnabled() {
        return this.elements.getPayButton();
    }

    clickOnRequestButton() {
        this.elements.getRequestButton().click();
    }

    clickOnPayButton() {
        this.elements.getPayButton().click();
    }
}

export const transactionPage = new Transaction();