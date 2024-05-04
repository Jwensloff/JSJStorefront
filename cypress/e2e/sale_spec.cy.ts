describe("gold", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/products?select=*",
      {
        fixture: "sale_data.json",
      }
    ).as("sale_data");
    cy.visit("http://localhost:3000/sale");
  });
  it("should show sale page content", () => {
    //Header
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="header_logo"]').should("exist");
    cy.get('[data-test="Women\'s"]').should("exist");
    cy.get('[data-test="Men\'s"]').should("exist");
    cy.get('[data-test="Jewelry"]').should("exist");
    cy.get('[data-test="shopping-cart"]').should("exist");
    cy.get('[data-test="search"]').should("exist");
    cy.get("#search").should("have.attr", "placeholder", "Search products...");
    cy.get("#search").type("jacket").should("have.value", "jacket");
    cy.get('[data-test="search"] > .flex > .pr-2').click();
    cy.get("#search").should("have.attr", "placeholder", "Search products...");
    cy.get('[data-test="search-icon"]').should("exist");

    // Hero image
    cy.get('[data-test ="sale-page-hero"]').should("exist");
    cy.get('[data-test ="sale-page-hero"]').should(
      "have.attr",
      "alt",
      "A woman holding multiple shopping bags"
    );
    cy.get('[data-test="sale-page-hero-text"] p')
      .should("contain", "Treat")
      .and("contain", "Yo")
      .and("contain", "Self");

    // Sale page content
    cy.get('[data-test="content-section"]').within(() => {
      cy.get('[data-test="product-link"]')
        .first()
        .should("have.attr", "href", "/product/5");
      cy.get('[data-test="5-image"]')
        .should("have.attr", "alt", "Mens Casual Slim Fit")
        .get('[data-test="5-image"]')
        .should(
          "have.attr",
          "src",
          "/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F71YXzeOuslL._AC_UY879_.jpg&w=640&q=75"
        )
        .get(
          '[data-test="5-individual-product-card"] > .flex-col > :nth-child(3)'
        )
        .should("contain", "$15.99")
        .get(
          '[data-test="5-individual-product-card"] > .flex-col > :nth-child(4)'
        )
        .should("contain", "Rating: 2.1 (430)");

      cy.get('[data-test="product-link"]')
        .last()
        .should("have.attr", "href", "/product/14");
      cy.get('[data-test="14-image"]')
        .should(
          "have.attr",
          "alt",
          "DANVOUY Womens T Shirt Casual Cotton Short"
        )
        .get('[data-test="14-image"]')
        .should(
          "have.attr",
          "src",
          "/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F61pHAEJ4NML._AC_UX679_.jpg&w=640&q=75"
        )
        .get(
          '[data-test="14-individual-product-card"] > .flex-col > :nth-child(3)'
        )
        .should("contain", "$12.99")
        .get(
          '[data-test="14-individual-product-card"] > .flex-col > :nth-child(4)'
        )
        .should("contain", "Rating: 3.1 (145)");
    });
  });
  it("should show individual product upon click", () => {
    cy.intercept("GET", "**/product/5?_rsc=13re1", {
      fixture: "product_5_data.json",
    }).as("sale_product");

    //  Clicking product
    cy.get('[data-test="content-section"]').within(() => {
      cy.get('[data-test="product-link"]').first().click();
      cy.wait("@sale_product");
      cy.url().should("eq", "http://localhost:3000/product/5");
    });
    cy.go("back");
    cy.url().should("eq", "http://localhost:3000/sale");
  });
});
