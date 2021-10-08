/// <reference types="Cypress" />

class HomePage{

    url = '/'

    //Web elements

    elements = {
        getUserBalance: () => cy.get('[data-test="sidenav-user-balance"]'),
        getHomeButton: () => cy.contains('div.MuiListItemText-root span.MuiTypography-root','Home'),
        getMyAccountButton: () => cy.contains('div.MuiListItemText-root span.MuiTypography-root', 'My Account'),
        getBankAccountButton: () => cy.contains('div.MuiListItemText-root span.MuiTypography-root','Bank Accounts'),
        getNotifications: () => cy.contains('div.MuiListItemText-root span.MuiTypography-root','Notifications'),
        getLogoutButton: () => cy.contains('div.MuiListItemText-root span.MuiTypography-root','Logout')                
    };    

    //Methods

    visit(){
        cy.visit(this.url);
    }

    clickHomeButton(){
        this.elements.getHomeButton().click();
    }

    clickMyAccountButton(){
        this.elements.getMyAccountButton().click();
    }

    clickBankAccountButton(){
        this.elements.getBankAccountButton().click();
    }

    clickNotificationButton(){
        this.elements.getNotifications().click();
    }

    clickLogout(){
        this.elements.clickLogout().click();
    }
}

export const homePage = new HomePage();