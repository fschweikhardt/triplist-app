/// <reference types="cypress"/>

describe('login tests', () => {

    it('should fail login', () => {
        cy.openLoginPage() 
        //no username

        //no password

        //incorrect username and password
        cy.get('form').then( input => {
            cy.wrap(input).get('[data-cy="username"]').type(Math.random())
            cy.wrap(input).get('[data-cy="password"]').type(Math.random())
            cy.wrap(input).get('[data-cy="login-submit-button"]').click()
            //wait for response
            cy.on('window:alert', res => {
                expect(cy.wrap(res)).to.have.text('try again please')
            })
        })
        

    })
    
    it('should log in demo account', () => {
        cy.get('form').then( input => {
            cy.wrap(input).get('[data-cy="username"]').type('demo')
            cy.wrap(input).get('[data-cy="password"]').type('demo')
            cy.wrap(input).get('[data-cy="login-submit-button"]').click()
        })
    })

})