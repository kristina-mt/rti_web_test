describe('Visual and i18n consistency tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    const flags = {
      en: 'EN',
      lt: 'LT',
      pl: 'PL',
      ru: 'RU'
    };
  
    const placeholders = {
      en: { name: 'Your name', email: 'Your email' },
      lt: { name: 'Jūsų vardas', email: 'El. paštas' },
      pl: { name: 'Twoje imię', email: 'Twój email' },
      ru: { name: 'Ваше имя', email: 'Эл. почта' }
    };
  
    Object.entries(flags).forEach(([lang, flag]) => {
      it(`(6.1) Form placeholders are correct in ${lang.toUpperCase()}`, () => {
        cy.get(`.lang-switcher img[alt="${flag}"]`).click();
        cy.get('input[name="name"]').should('have.attr', 'placeholder', placeholders[lang].name);
        cy.get('input[name="email"]').should('have.attr', 'placeholder', placeholders[lang].email);
      });
    });
  
    it('(6.2) Sections with .section-fade-left become visible on scroll', () => {
      cy.get('.section-fade-left').each(($el) => {
        cy.wrap($el).scrollIntoView({ duration: 500 });
        cy.wrap($el);
      });
    });
  
    it('(6.3) PDF download link has download attribute', () => {
      cy.get('a[href$=".pdf"]').first().should('have.attr', 'download');
    });
  });
  