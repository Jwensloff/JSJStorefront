describe("template spec", () => {
  beforeEach(() => {

    cy.visit("http://localhost:3000/");
  });

  it("should contain the landing page content", () => {
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="header_logo"]').should("exist");
    cy.get('[data-test="Women\'s"]').should("exist");
    cy.get('[data-test="Men\'s"]').should("exist");
    cy.get('[data-test="Jewelry"]').should("exist");
    cy.get('[data-test="shopping-cart"]').should("exist");

    cy.get('[data-test="search"]').should("exist");
    cy.get("#search").should("have.attr", "placeholder", "Search products...");
    cy.get('[data-test="search-icon"]').should("exist");

    cy.get('[data-test="landing-page-hero"]').should("exist");
    cy.get('[data-test="top-rated-btn"]')
      .should("exist")
      .and("have.attr", "href")
      .and("include", "/top-rated");
    cy.get('[data-test="sale-btn"]')
      .should("exist")
      .and("have.attr", "href")
      .and("include", "/sale");
    cy.get('[data-test="gold-btn"]')
      .should("exist")
      .and("have.attr", "href")
      .and("include", "/gold");
  });
});
