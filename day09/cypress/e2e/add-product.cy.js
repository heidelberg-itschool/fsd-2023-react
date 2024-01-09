describe('adding a product in card', () => {
  it('click add product', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('[data-cy="add-to-card"]').first().click();

    cy.get('[data-cy="card-link"]').click();
    cy.get('.cocktail').should('have.length', 1);

    cy.get('[data-cy="products-link"]').click();
    cy.get('[data-cy="add-to-card"]').first().click();

    cy.get('[data-cy="card-link"]').click();
    cy.get('.cocktail').should('have.length', 1);

    cy.get('[data-cy="quantity"]').should('have.text', '2');
  })

  it('click add multiple product', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('[data-cy="add-to-card"]').first().click();

    cy.get('[data-cy="card-link"]').click();
    cy.get('.cocktail').should('have.length', 1);

    cy.get('[data-cy="products-link"]').click();
    cy.get('[data-cy="add-to-card"]').eq(1).click();

    cy.get('[data-cy="card-link"]').click();
    cy.get('.cocktail').should('have.length', 2);

   cy.get('[data-cy="quantity"]').first().should('have.text', '1');
  })
})