describe('navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('products navigation', () => {
    cy.get('[data-cy="products-link"]').click();
    cy.url().should('eq', 'http://localhost:3000/products')
  })

  it('card navigation', () => {
    cy.get('[data-cy="card-link"]').click();
    cy.url().should('eq', 'http://localhost:3000/card')
  })
})