

describe('Social Media & Contact Section', () => {
    beforeEach(() => {
      cy.visit('https://rtiautolocksmith.co.uk/');
    });
  
    it('SC01 - Should display social media icons in the header and footer', () => {
      cy.get('.social-top a').should('have.length.at.least', 5);
      cy.get('.social-bottom a').should('have.length.at.least', 5);
    });
  
    it('SC02 - Should open social links in a new tab with correct href', () => {
      const links = [
        { selector: '.facebook', url: 'facebook.com' },
        { selector: '.whatsapp', url: 'wa.me' },
        { selector: '.instagram', url: 'instagram.com' },
        { selector: '.youtube', url: 'youtube.com' },
        { selector: '.google', url: 'g.co' }
      ];
  
      links.forEach(link => {
        cy.get(`.social-top a${link.selector}`).should('have.attr', 'href').and('include', link.url);
        cy.get(`.social-top a${link.selector}`).should('have.attr', 'target', '_blank');
      });
    });
  
    it('SC03 - Should scroll to Contact section when Contact Us link is clicked', () => {
        cy.get('a[href="#contact"]').click({ force: true });
    
        cy.get('#contact').should('be.visible');
      });
      
  });
  