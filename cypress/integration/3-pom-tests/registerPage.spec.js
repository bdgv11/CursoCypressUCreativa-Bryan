/// <reference types="Cypress" />

import { registerPage } from "../../page-objects/register-page"
import { loginPage } from "../../page-objects/login-page";

describe('Register Page Tests', () => {
    context('Register Page - Project Test Case', ()=>{
        beforeEach(() => {
            registerPage.visit();
        });

        it('should create a new user correctly',()=>{
            registerPage.typeForm({
                    firstName: 'Bryan',
                    lastName: 'Guzman',
                    userName: Cypress.env('testNewUser'),
                    password: Cypress.env('testNewUserPassword'),
                    confirmPassword: Cypress.env('testNewUserPassword')
                });
                
            registerPage.clickSignUpButton();
            cy.url().should('include',loginPage.url);

            loginPage.typeCredentials({
                username: Cypress.env('testNewUser'),
                password: Cypress.env('testNewUserPassword')
            });

            loginPage.clickSignInButton();
            cy.contains(Cypress.env('testNewUser')).should('be.visible');            
        });
    });
});