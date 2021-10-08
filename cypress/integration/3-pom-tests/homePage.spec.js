/// <reference types="Cypress" />

import { homePage } from "../../page-objects/home-page";
import { loginPage } from "../../page-objects/login-page"

describe('Home Page Test', () => {
    
    context('Home Page Tests - Project Test Cases', () => {

        beforeEach(() => {
            homePage.visit();
        });

        it('should create a bank account', () => {            
            loginPage.typeCredentials({
                username: Cypress.env('testNewUser'),
                password: Cypress.env('testNewUserPassword')
            });
            loginPage.clickSignInButton();
            cy.url().should('include', '/')
            cy.contains(Cypress.env('testNewUser')).should('be.visible');

            homePage.clickBankAccountButton();

        });
    });
});