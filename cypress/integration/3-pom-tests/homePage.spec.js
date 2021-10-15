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

        })

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

        })

        it('should delete a bank account', () => {

            let bank = 'BAC SAN JOSE';

            homePage.clickBankAccountButton();

            cy.get('[data-test^=bankaccount-list-item]')
            .filter(`:contains("${bank}")`, { timeout: 10000 })
            //.first()
            .find('button')
            .click({multiple : true});

            cy.contains(`${bank}`+' (Deleted)').should('be.visible');
        })

        it('should complete a request transaction', () => {

            let amount = 5;
            let description = "Test Bryan"
            
            headerPage.clickNewTranxButton();

            transactionPage.titlesDisplayed().should('be.visible');

            transactionPage.clickOnFirstUserAvailable();

            transactionPage.typeAmountAndDesc({
                amount: amount,
                desc: description
            });

            transactionPage.buttonRequestEnabled().should('be.enabled');

            transactionPage.clickOnRequestButton();

            transactionPage.elements.getTranxSubmitted().should('be.visible');

            cy.contains(`Requested $${amount}.00 for ${description}`).should('be.visible');

            //Requested $3.00 for TEST 1
            //Paid $3.00 for Test Bryan
        })

        it('should complete a payment transaction', () => {
            let amount = 5;
            let description = "Test Bryan"
            
            headerPage.clickNewTranxButton();

            transactionPage.titlesDisplayed().should('be.visible');

            transactionPage.clickOnFirstUserAvailable();

            transactionPage.typeAmountAndDesc({
                amount: amount,
                desc: description
            });

            transactionPage.buttonPayEnabled().should('be.enabled');

            transactionPage.clickOnPayButton();

            transactionPage.elements.getTranxSubmitted().should('be.visible');

            cy.contains(`Paid $${amount}.00 for ${description}`).should('be.visible');
        })

        it('should display a container list', () => {

            homePage.getContainerTranxList().should('be.visible');

            homePage.elements.getListTranx().should('have.length.greaterThan',0);

            //getListTranx: () => cy.get('[data-test^=transaction-item')
            cy.get(homePage.elements.getListTranx).each(($el) => {
                cy.wrap($el).filter('div[class="MuiAvatar-root MuiAvatar-circular"]').should('be.visible');
            })
        })

        it('should like the tranx', () => {

            homePage.getContainerTranxList().should('be.visible');

            homePage.elements.getListTranx().should('have.length.greaterThan',0);

            homePage.elements.getListTranx().first().click();

            homePage.elements.getTranxDetailTitle().should('be.visible');

            homePage.clickOnLikeButton();

            //homePage.elements.getLikesCount().should('have.value',1);

            cy.contains(1).should('be.visible');

        })

        it('should type a comment inside a Tranx', () => {

            let comment = 'This is a test comment'

            homePage.getContainerTranxList().should('be.visible');

            homePage.elements.getListTranx().should('have.length.greaterThan',0);

            homePage.elements.getListTranx().first().click();

            homePage.elements.getTranxDetailTitle().should('be.visible');

            homePage.typeTranxComment({
                comment:comment
            });

            homePage.typeReturnComment();

            cy.contains(comment).should('be.visible');

        })
    })
})