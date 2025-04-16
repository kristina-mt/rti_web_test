

describe("Website Content and Localization", () => {
    beforeEach(() => {
      cy.visit("https://rtiautolocksmith.co.uk/");
    });
  
    it("Displays hero section with title", () => {
      cy.get(".hero h1");
    });
  
    it("Shows 'About Us' text", () => {
      cy.get("#about");
      cy.get("#about [data-i18n='about-text']").should("not.be.empty");
    });
  
    it("Shows postalService section with content", () => {
      cy.get("#postalService");
      cy.get("#postalService h2").should("contain", "Mail-in");
    });
  
    it("Displays key-replacement image and text", () => {
      cy.get("#key-replacement img");
      cy.get("#key-replacement [data-i18n='key-replacement-text']").should("not.be.empty");
    });
  
    it("Changes postalService text when switching language", () => {
      cy.get('.lang-switcher button img[alt="RU"]').click();
      cy.get("#postalService h2").should("contain", "Обслуживание по почте");
    });
  });
  