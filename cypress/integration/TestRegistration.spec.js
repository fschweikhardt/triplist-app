/// <reference types="cypress" />

describe('registration tests', () => {
    it('should go to registration page', () => {
        cy.openRegistrationPage()
        cy.wait(1000)
    })
})