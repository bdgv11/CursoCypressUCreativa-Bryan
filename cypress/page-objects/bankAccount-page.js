/// <reference types="Cypress" />

class BankAccount{

    url = '/bankaccounts';

    //Web Elements
    elements = {
        getBankAccountTitle: () => cy.contains('h2.MuiTypography-root','Bank Accounts'),
        getCreateBankAccountButton: () => cy.contains('span.MuiButton-label','Create'),        
        
        //Create Bank Account form
        getCreateBankTitle: () => cy.get('h2.MuiTypography-root','Create Bank Account'),
        getBankName: () => cy.get('[id="bankaccount-bankName-input"]'),
        getRoutingNumber: () => cy.get('[id="bankaccount-routingNumber-input"]'),
        getAccountNumber: () => cy.get('[id="bankaccount-accountNumber-input"]'),
        getSaveAccountButton: () => cy.contains('span.MuiButton-label','Save')
    };

    //Methods

    visit(){
        cy.visit(this.url);
    }

    clickCreateBankAccountButton(){
        this.elements.getCreateBankAccountButton().click();
    }

    typeNewBankAccount({bankName = ' ', routingNumber = ' ', accountNumber = ' '} = {}){
        this.elements.getBankName().clear().type(bankName);
        this.elements.getRoutingNumber().clear().type(routingNumber);
        this.elements.getAccountNumber().clear().type(accountNumber);
    }

    clickSaveNewAccount(){
        this.elements.getSaveAccountButton().click();
    }

};

export const bankAccount = new BankAccount();