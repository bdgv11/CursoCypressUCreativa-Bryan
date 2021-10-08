/// <reference types="Cypress" />

import { homePage } from "../../page-objects/home-page";
import { loginPage } from "../../page-objects/login-page";
import { bankAccount } from "../../page-objects/bankAccount-page";

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

            //Validate bank account title
            //
            //

            bankAccount.clickCreateBankAccountButton();

            //Validate Create Bank Accouunt title
            //
            //

            bankAccount.typeNewBankAccount({
                bankName: bank,
                routingNumber: routingNum,
                accountNumber: accountNum
            });

            bankAccount.clickSaveNewAccount();

            cy.contains('li',bank);

        });

        it('should delete a bank account', () => {

            let bank = 'BANCO NACIONAL DE CR';
            let routingNum = '123456789';
            let accountNum = '123456789';

            homePage.clickBankAccountButton();

            //Validate bank account title
            //
            //

            bankAccount.clickCreateBankAccountButton();

            //Validate Create Bank Accouunt title
            //
            //

            bankAccount.typeNewBankAccount({
                bankName: bank,
                routingNumber: routingNum,
                accountNumber: accountNum
            });

            bankAccount.clickSaveNewAccount();

            cy.contains('li',bank);

        });
    });
});