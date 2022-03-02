describe('The Home Page', () => {
  beforeEach(() => {
    cy.exec('npm run seed:db');
  })

  it('successfully loads', () => {
    cy.visit('/')
  })
})
