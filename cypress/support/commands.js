
Cypress.Commands.add("submitContactForm", (name, email, message) => {
  cy.get('input[name="name"]').clear().type(name);
  cy.get('input[name="email"]').clear().type(email);
  cy.get('textarea[name="message"]').clear().type(message);
  cy.get('form').submit();
});

Cypress.Commands.add("checkSocialLinks", (links) => {
  links.forEach(({ selector, url }) => {
    cy.get(selector)
      .should("have.attr", "href", url)
      .and("have.attr", "target", "_blank")
      .and("have.attr", "rel").and("include", "noopener");
  });
});

Cypress.Commands.add('switchLanguage', (langCode) => {
  cy.get(`.lang-switcher button[onclick="switchLang('${langCode}')"]`).click();
});
Cypress.Commands.add('selectLanguage', (lang) => {
  const flags = {
    en: 'EN',
    lt: 'LT',
    pl: 'PL',
    ru: 'RU'
  };
  cy.get(`.lang-switcher img[alt="${flags[lang]}"]`).click();
});

Cypress.Commands.add('assertFormPlaceholders', (lang) => {
  const placeholders = {
    en: { name: 'Your name', email: 'Your email' },
    lt: { name: 'Jūsų vardas', email: 'El. paštas' },
    pl: { name: 'Twoje imię', email: 'Twój email' },
    ru: { name: 'Ваше имя', email: 'Эл. почта' }
  };
  cy.get('input[name="name"]').should('have.attr', 'placeholder', placeholders[lang].name);
  cy.get('input[name="email"]').should('have.attr', 'placeholder', placeholders[lang].email);
});
