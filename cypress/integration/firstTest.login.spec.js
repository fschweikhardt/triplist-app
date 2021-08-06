/// <reference types="cypress"/>

/*global cy*/
/*eslint no-undef: "error"*/

describe('first cypress tests on trip list', () => {

    it.only('should log in demo account', () => {
        
        cy.visit('/')
        cy.contains('button', 'GET STARTED').click()
        cy.contains('button', 'LOG IN').click()

    })

})