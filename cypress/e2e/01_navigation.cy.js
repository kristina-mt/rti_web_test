// Navigation test file placeholder// cypress/e2e/navigation.cy.js

describe("Navigation and Language Switch", () => {
    beforeEach(() => {
      cy.visit("https://rtiautolocksmith.co.uk/");
    });
  
    it("Displays all navbar links on desktop", () => {
      cy.viewport(1280, 720);
      cy.get(".nav-links li a").should("have.length.at.least", 10);
    });
  
    it("Displays hamburger on mobile", () => {
      cy.viewport(375, 667);
      cy.get(".hamburger").should("be.visible");
    });
  
    it("Hamburger opens mobile menu", () => {
      cy.viewport(375, 667);
      cy.get(".hamburger").click();
      cy.get(".nav-links").should("have.class", "show");
    });
  
    it("Active nav link changes on scroll", () => {
      cy.viewport(1280, 720);
      cy.scrollTo("bottom");
      cy.wait(500);
      cy.get(".nav-links a.active").should("exist");
    });
  
    it("Changes language and updates content", () => {
      cy.get('.lang-switcher button img[alt="LT"]').click();
      cy.get("[data-i18n='services-title']").should("contain", "paslaugos");
    });
  });
  