describe('Contact Form Validation', () => {
  beforeEach(() => {
    cy.visit('https://rtiautolocksmith.co.uk/');
  });

  it('01 - Shows validation errors on empty submit', () => {
    cy.get('form button[type="submit"]').click();

    cy.get('[data-error-for="name"]')
      .should('exist')
     

    cy.get('[data-error-for="email"]')
      .should('exist')
     

    cy.get('[data-error-for="message"]')
      .should('exist')
      
  });

  it('02 - Shows error for invalid email format', () => {
    cy.get('input[name="name"]').type('Kristina');
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('textarea[name="message"]').type('Test message');
    cy.get('form button[type="submit"]').click();

    cy.get('[data-error-for="email"]')
     
  });

  it('03 - Successfully submits valid form', () => {
    cy.get('input[name="name"]').type('Kristina');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="message"]').type('This is a test message');
    cy.get('form button[type="submit"]').click();

    cy.url().should('include', '/thanks');
    cy.contains('Thank you!').should('be.visible');
  });
});
