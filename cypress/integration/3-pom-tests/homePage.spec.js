/// <reference types="Cypress" />

import { homePage } from "../../page-objects/home-page";
import { loginPage } from "../../page-objects/login-page";
import { bankAccount } from "../../page-objects/bankAccount-page";
import { headerPage } from "../../page-objects/header-page";
import { transactionPage } from "../../page-objects/transaction-page";

describe('Home Page Test', () => {
    
    context('Home Page Tests - Project Test Cases', () => {

        beforeEach(() => {
            homePage.visit();

            loginPage.typeCredentials({
                username: Cypress.env('shawnaUsername'),
                password: Cypress.env('shawnaPassword')
            });
            loginPage.clickSignInButton();
            cy.url().should('include', '/')
            cy.contains(Cypress.env('shawnaUsername')).should('be.visible');

        });

        it('should create a bank account', () => {  

            let bank = 'BAC SAN JOSE';
            let routingNum = '123456789';
            let accountNum = '123456789'

            homePage.clickBankAccountButton();
            bankAccount.clickCreateBankAccountButton();

            bankAccount.typeNewBankAccount({
                bankName: bank,
                routingNumber: routingNum,
                accountNumber: accountNum
            });

            bankAccount.clickSaveNewAccount();

            cy.contains('li',bank);

        });

        it('should delete a bank account', () => {

            let bank = 'BAC SAN JOSE';

            homePage.clickBankAccountButton();

            cy.get('[data-test^=bankaccount-list-item]')
            .filter(`:contains("${bank}")`, { timeout: 10000 })
            //.first()
            .find('button')
            .click({multiple : true});

            cy.contains(`${bank}`+' (Deleted)').should('be.visible');
        });

        it('should complete a request transaction', () => {

            let amount = 5;
            let description = "Test Bryan"
            
            headerPage.clickNewTranxButton();

            expect(true, transactionPage.titlesDisplayed()).to.be.true;

            transactionPage.clickOnFirstUserAvailable();

            transactionPage.typeAmountAndDesc({
                amount: amount,
                desc: description
            });

            expect(true, transactionPage.buttonRequestEnabled()).to.be.true;

            transactionPage.clickOnRequestButton();

            transactionPage.elements.getTranxSubmitted().should('be.visible');

            cy.contains('Requested $'+`${amount}`+'.00 for '+ `${description}`).should('be.visible');

            //Requested $3.00 for TEST 1
            //Paid $3.00 for Test Bryan
        });

        it('should complete a payment transaction', () => {
            let amount = 5;
            let description = "Test Bryan"
            
            headerPage.clickNewTranxButton();

            expect(true, transactionPage.titlesDisplayed()).to.be.true;

            transactionPage.clickOnFirstUserAvailable();

            transactionPage.typeAmountAndDesc({
                amount: amount,
                desc: description
            });

            expect(true, transactionPage.buttonPayEnabled()).to.be.true;

            transactionPage.clickOnPayButton();

            transactionPage.elements.getTranxSubmitted().should('be.visible');

            cy.contains('Paid $'+`${amount}`+'.00 for '+ `${description}`).should('be.visible');
        });
    });
});