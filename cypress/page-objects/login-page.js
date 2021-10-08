/// <reference types="Cypress" />

class LoginPage{

    url = "signin";

    //Web elements
    elements = {
        getUserName: () => cy.get('#username'),
        getPassword: () => cy.get('#password'),
        getSignInButton: () => cy.get('[data-test="signin-submit"]')
    };

    //Methods
    visit(){
        cy.visit(this.url);
    }

    typeCredentials({username = ' ', password = ' '} = {}){ //This parameters means will be ' ' (empty) as default... 
        this.elements.getUserName().clear().type(username);
        this.elements.getPassword().clear().type(password);
    }

    clickSignInButton(){
        this.elements.getSignInButton().click();
    }
}

//This is to get methods between all the project, just call loginPage instance
export const loginPage = new LoginPage();