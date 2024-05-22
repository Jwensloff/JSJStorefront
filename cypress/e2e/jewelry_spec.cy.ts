describe("jewelry", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/products?select=*",
      {
        fixture: "gold_data.json",
      },
    ).as("jewelry_data");
    cy.visit("http://localhost:3000/jewelry");
    cy.intercept("GET", "**/product/7?_rsc=bmzfm", {
      fixture: "product_7_data.json",
    }).as("jewelry_product");
  });
  it("should show jewelry page content", () => {
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
    cy.get('[data-test ="jewelry-page-hero"]').should("exist");
    cy.get('[data-test ="jewelry-page-hero"]').should(
      "have.attr",
      "alt",
      "A photo showing the bottom half of a woman's face in order to focus on her earrings",
    );
    cy.get('[data-test="jewelry-page-hero-text"]')
      .should("contain", "Just")
      .and("contain", "Go")
      .and("contain", "For")
      .and("contain", "It");

    // Jewelry page content
    cy.get('[data-test="content-section"]').within(() => {
      cy.get('[data-test="product-link"]')
        .first()
        .should("have.attr", "href", "/product/7");
      cy.get('[data-test="7-image"]')
        .should("have.attr", "alt", "Solid Gold Petite Micropave")
        .get('[data-test="7-image"]')
        .should(
          "have.attr",
          "src",
          "/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg&w=640&q=75",
        )
        .get(
          '[data-test="7-individual-product-card"] > .flex-col > :nth-child(3)',
        )
        .should("contain", "$168")
        .get(
          '[data-test="7-individual-product-card"] > .flex-col > :nth-child(4)',
        )
        .should("contain", "Rating: 3.9 (70)");

      cy.get('[data-test="product-link"]')
        .last()
        .should("have.attr", "href", "/product/12");
      cy.get('[data-test="12-image"]')
        .should(
          "have.attr",
          "alt",
          "Pierced Owl Rose Gold Plated Stainless Steel Double",
        )
        .get('[data-test="12-image"]')
        .should(
          "have.attr",
          "src",
          "/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg&w=640&q=75",
        )
        .get(
          '[data-test="12-individual-product-card"] > .flex-col > :nth-child(3)',
        )
        .should("contain", "$10.99")
        .get(
          '[data-test="12-individual-product-card"] > .flex-col > :nth-child(4)',
        )
        .should("contain", "Rating: 1.9 (100)");
    });
  });
  it("should show individual product upon click", () => {
    // cy.intercept("GET", "**/product/7?_rsc=bmzfm", {
    //   fixture: "product_7_data.json",
    // }).as("jewelry_product");

    //  Clicking product
    cy.get('[data-test="content-section"]').within(() => {
      cy.get('[data-test="product-link"]').first().click();
      cy.wait("@jewelry_product");
      cy.url().should("eq", "http://localhost:3000/product/7");
    });
    cy.go("back");
    cy.url().should("eq", "http://localhost:3000/jewelry");
  });
});
