/// <reference types="cypress"/>

describe('login tests', () => {

    it('should log in demo account', () => {
        cy.openLoginPage() 
        cy.get('form').then( input => {
            cy.wrap(input).get('[data-cy="username"]').type('demo')
            cy.wrap(input).get('[data-cy="password"]').type('demo')
            cy.wrap(input).get('[data-cy="login-submit-button"]').click()
        })
    })

})