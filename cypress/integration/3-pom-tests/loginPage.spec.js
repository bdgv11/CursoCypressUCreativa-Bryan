/// <reference types="Cypress" />

//This is the way to call the instance (POM)
import { loginPage } from "../../page-objects/login-page";

describe('Login Page Tests', () => {
    
    context('Login Page - Project Test Case', () => {

        beforeEach(()=> {
            loginPage.visit();
        });

        it('should log in correctly', () => {
            loginPage.typeCredentials({
                username: Cypress.env('shawnaUsername'),
                password: Cypress.env('shawnaPassword')
            });
            loginPage.clickSignInButton();
            cy.url().should('include', '/')
            cy.contains(Cypress.env('shawnaUsername')).should('be.visible');
        });
    })
});