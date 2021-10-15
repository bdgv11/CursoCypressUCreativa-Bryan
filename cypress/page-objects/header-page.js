/// <reference types="Cypress" />

class HeaderPage{

    //Web Elements
    elements = {
        getLateralBarMenu: () => cy.get('[data-test="drawer-icon"]'),
        getNewTranxButton: () => cy.contains('span[class="MuiButton-label"]','New')
    };

    //Methods
    clickLateralMenu(){
        this.elements.getLateralBarMenu().click();
    }

    clickNewTranxButton(){
        this.elements.getNewTranxButton().click();
    }
}

export const headerPage = new  HeaderPage();