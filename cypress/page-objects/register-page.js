/// <reference types="Cypress" />

class RegisterPage{

    url = '/signup';

    elements = {
        getFirstNameField: () => cy.get('[name="firstName"]'),
        getLastNameField: () => cy.get('[id="lastName"]'),
        getUserNameField: () => cy.get('[id="username"]'),
        getPasswordField: () => cy.get('[id="password"]'),
        getConfirmPassword: () => cy.get('[id="confirmPassword"]'),
        getSignUpButton: () => cy.get('[data-test="signup-submit"]')        
    };

    //Methods

    visit(){
        cy.visit(this.url);
    }

    typeForm({firstName = ' ', lastName = ' ', userName = ' ', password = ' ', confirmPassword = ' '} = {}){
        this.elements.getFirstNameField().clear().type(firstName);
        this.elements.getLastNameField().clear().type(lastName);
        this.elements.getUserNameField().clear().type(userName);
        this.elements.getPasswordField().clear().type(password);
        this.elements.getConfirmPassword().clear().type(confirmPassword);
    }

    clickSignUpButton(){
        this.elements.getSignUpButton().click();
    }
}

export const registerPage = new RegisterPage();