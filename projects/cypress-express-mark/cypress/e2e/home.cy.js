/// <reference types="cypress" />

describe.skip('home', () => {
  it('webapp should be online', () => {
    cy.visit('/')

    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
  })
})