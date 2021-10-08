/// <reference types="Cypress" />

class HeaderPage{

    //Web Elements
    elements = {
        getLateralBarMenu: () => cy.get('[data-test="drawer-icon"]')
    };

    //Methods
    clickLateralMenu(){
        this.elements.getLateralBarMenu().click();
    }
}

export const headerPage = new  HeaderPage();