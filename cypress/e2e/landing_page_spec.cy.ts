describe("template spec", () => {
  it("should contain the landing page content", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="header_logo"]').should("exist");
    cy.get('[data-test="Women\'s"]').should("exist");
    cy.get('[data-test="Men\'s"]').should("exist");
    cy.get('[data-test="Jewelry"]').should("exist");
    cy.get('[data-test="shopping-cart"]').should("exist");

    cy.get('[data-test="search"]').should("exist");
    cy.get("#search").should("have.attr", "placeholder", "Search products...");
    cy.get('[data-test="search-icon"]').should("exist");

  });
});
