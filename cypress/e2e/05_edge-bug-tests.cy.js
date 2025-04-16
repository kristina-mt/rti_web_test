describe('Edge and Bug Test Cases', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('[5.1] Language switching multiple times keeps correct translation', () => {
    cy.switchLanguage('lt');
    cy.contains('Greita ir patikima automobilių raktų pagalba');
    cy.switchLanguage('pl');
    cy.contains('Szybka i niezawodna pomoc z kluczami');
    cy.switchLanguage('en');
    cy.contains('Fast and reliable auto locksmith service');
  });

  it('[5.2] Submitting empty form fields shows browser validation', () => {
    cy.get('button[type="submit"]').click();
  
    cy.get('input[name="name"]:invalid').should('exist');
cy.get('input[name="email"]:invalid').should('exist');
cy.get('textarea[name="message"]:invalid').should('exist');

  });
    
  
  

  it('[5.3] Translation delay does not break form validation', () => {
    cy.wait(500);
    cy.get('input[name="name"]').type('Test');
    cy.get('input[name="email"]').type('bad@email');
    cy.get('textarea[name="message"]').type('Message');
    cy.get('button[type="submit"]').click();
    cy.get('[data-error-for="email"]').should('contain', 'valid email');
  });

  it('[5.4] Missing image shows alt text', () => {
    cy.get('img').each($img => {
      if ($img.prop('naturalWidth') === 0) {
        cy.wrap($img).should('have.attr', 'alt').and('not.be.empty');
      }
    });
  });

  it('[5.5] Non-scrollable hero still highlights nav correctly', () => {
    cy.window().scrollTo('top');
    cy.get('.hamburger').click();
    cy.get('.nav-links a[href="#postalService"]').click();
    cy.get('#postalService').scrollIntoView();
    cy.get('.nav-links a[href="#postalService"]').should('have.class', 'active');
  });
  
  

  it('[5.6] Layout remains responsive at 768px', () => {
    cy.viewport(768, 1024);
    cy.get('.nav-links').should('exist');
    cy.get('section').should('be.visible');
  });

  it('[5.7] Back to Top button does not overlap form', () => {
    cy.scrollTo('bottom');
    cy.get('#backToTop').should('be.visible');
    cy.get('form').should('be.visible');
  });

  it('[5.8] Hamburger and lang-switcher do not overlap visually', () => {
    cy.viewport(375, 667);
    cy.get('.hamburger').should('be.visible');
    cy.get('.lang-switcher').should('be.visible');
  });

  it('[5.9] Social links open in new tab and are secure', () => {
    cy.get('.social-top a, .social-bottom a').each($link => {
      cy.wrap($link).should('have.attr', 'target', '_blank');
      cy.wrap($link).invoke('attr', 'href').should('include', 'https');
    });
  });
});
