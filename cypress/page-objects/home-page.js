/// <reference types="Cypress" />

class HomePage {

    url = '/'

    //Web elements

    elements = {
        getUserBalance: () => cy.get('[data-test="sidenav-user-balance"]'),
        getHomeButton: () => cy.contains('div.MuiListItemText-root span.MuiTypography-root', 'Home'),
        getMyAccountButton: () => cy.contains('div.MuiListItemText-root span.MuiTypography-root', 'My Account'),
        getBankAccountButton: () => cy.contains('div.MuiListItemText-root span.MuiTypography-root', 'Bank Accounts'),
        getNotifications: () => cy.contains('div.MuiListItemText-root span.MuiTypography-root', 'Notifications'),
        getLogoutButton: () => cy.contains('div.MuiListItemText-root span.MuiTypography-root', 'Logout'),

        //Tranx List
        getTranxContainer: () => cy.get('div[class="ReactVirtualized__Grid__innerScrollContainer"]'),
        getListTranx: () => cy.get('[data-test^=transaction-item]'),
        getTranxDetailTitle: () => cy.get('[data-test="transaction-detail-header"]'),
        getLikesCount: () => cy.get('[data-test^=transaction-like-count]'),
        getLikeButton: () => cy.get('[data-test^=transaction-like-button]'),
        getInputCommentField: () => cy.get('[data-test^=transaction-comment-input]'),
        getTranxLikesCountDetails: () => cy.get('[data-test^=transaction-like-count]')
    };

    //Methods

    visit() {
        cy.visit(this.url);
    }

    clickHomeButton() {
        this.elements.getHomeButton().click();
    }

    clickMyAccountButton() {
        this.elements.getMyAccountButton().click();
    }

    clickBankAccountButton() {
        this.elements.getBankAccountButton().click();
    }

    clickNotificationButton() {
        this.elements.getNotifications().click();
    }

    clickLogout() {
        this.elements.clickLogout().click();
    }

    //Tranx List
    getContainerTranxList() {
        return this.elements.getTranxContainer();
    }

    clickOnFirstListTranx() {
        this.elements.getListTranx().first().click();
    }

    //Tranx Details

    clickOnLikeButton() {

        if (this.elements.getLikeButton().should('be.enabled')) {

            this.elements.getLikeButton().click();
        }
    }

    typeTranxComment({ comment = ' ' } = {}) {
        this.elements.getInputCommentField().clear().type(comment);
    }

    typeReturnComment() {
        this.elements.getInputCommentField().type('{enter}');
    }
}

export const homePage = new HomePage();