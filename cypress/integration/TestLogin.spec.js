/// <reference types="cypress"/>

describe('login tests', () => {

    it('should log in demo account', () => {
        cy.openLoginPage() 
        cy.get('form').then( input => {
            cy.wrap(input).get('#username').type('demo')
            cy.wrap(input).get('#password').type('demo')
            cy.wrap(input).get('button').click()
        })
    })

})