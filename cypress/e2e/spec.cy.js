describe('pokemon rendering', () => {

  // All Pokemon Are Rendered
  it('all 151 pokemon are rendered', () => {
    cy.visit('http://localhost:5555')
    cy.get('#pokemon-content').children().should('have.length', 151)
  })

  // All Pokemon Have An Add Button
  it('all pokemon have an add button', () => {
    cy.visit('http://localhost:5555')
    cy.get('.save-button').should('have.length', 151)
  })

  // Pokemon Can Be Added To Squad
  it('pokemon are added to squad', () => {
    cy.visit('http://localhost:5555')
    cy.get('.save-button').first().click()

    cy.get('#squad-list').children().should('have.length', 1)
  })

  // Pokemon Can Be Removed From Squad
  it('pokemon are removed from squad', () => {
    cy.visit('http://localhost:5555')
    cy.get('.save-button').first().click()
    cy.get('.save-button').first().click()

    cy.get('#squad-list').should('not.exist')
  })

  // No More Than 6 Pokemon Can Be In Squad
  it('warning modal appears when a seventh pokemon is clicked', () => {
    cy.visit('http://localhost:5555')
    cy.get('.save-button').click({ multiple: true, force: true })

    cy.get('.modal').should('be.visible')
  })
})