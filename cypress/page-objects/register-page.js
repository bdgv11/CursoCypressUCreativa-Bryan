<reference types="Cypress" />

export const registerPage = new RegisterPage();

class RegisterPage{

    url = '/register';

    elements = {
        getFirstNameField: () => cy.get('[id="firstName"'),
        getLastNameField: () => cy.get('[id="lastName"'),
        getUserNameField: () => cy.get('[id="username"]'),
        getPasswordField: () => cy.get('[id="password"]'),
        getConfirmPassword: () => cy.get('[id="confirmPassword"]'),
        getSignUpButton: () => cy.get('[data-test="signup-submit"]')        
    };

    //Methods

    visit(){
        cy.visit(this.url);
    }
}

export const registerPage = RegisterPage();