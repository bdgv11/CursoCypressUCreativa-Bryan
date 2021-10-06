
/// <reference types="Cypress" />

//This is the way to call the instance (POM)
import { loginPage } from "../../page-objects/login-page";

describe('Login Tests', () => {
    context('Login', () => {
        beforeEach(()=> {
            loginPage.visit();
        })

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