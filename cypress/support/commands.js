import { global, timeout } from '../fixtures/global'

const googleUrl = "https://www.google.com/"

Cypress.Commands.add('accessGoogle', () => {
    cy.log('Accessing Google')
    cy.visit(googleUrl, {timeout: timeout.very_long})
    cy.get('textarea[class="gLFyf"]').click().then(() =>{
        cy.get('textarea[class="gLFyf"]').type('sigit' + '{enter}')
    })
  })