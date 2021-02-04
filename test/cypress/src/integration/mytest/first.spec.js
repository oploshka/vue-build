describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.get('input[name="login"]').type('test');
    cy.get('input[name="password"]').type('test');
    cy.contains('ВОЙТИ')
      .click();
  });
});
