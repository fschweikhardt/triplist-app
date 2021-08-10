/// <reference types="cypress" />

describe('registration tests', () => {

    it('should go to registration page', () => {
        cy.openRegistrationPage()
    })

    it('try creating new demo account', () => {
        //demo already exists
        cy.get('[data-cy="email"]').type('demo')
        //make sure it doesn't register
        cy.get('[data-cy="registration-submit-button"]').click()
        //check you're still on the registration page
        cy.get('form [data-cy="title"]').should('contain', 'SIGN UP')
        //fill out form
        cy.get('[data-cy="username"]').type('demo')
        cy.get('[data-cy="password"]').type('demo')
        cy.get('[data-cy="registration-submit-button"]').click()
        //check you're still on the registration page
        cy.get('form [data-cy="title"]').should('have.text', 'SIGN UP')
        cy.get('[data-cy="email"]').type('@demo.com')
        cy.get('[data-cy="registration-submit-button"]').click()
        //check for alert from server
        cy.log('ALERT')
        cy.on('window:alert', res => {
            expect(res).to.equal('Choose a different username')
        })

    })


})