describe("top rated", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/products?select=*",
      {
        fixture: "top_rated_mock_data.json",
      }
    ).as("top_rated_data");
    cy.visit("http://localhost:3000/top-rated");
  });
  it("should show top-rated page content", () => {
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
    cy.get('[data-test ="top-rated-page-hero"]').should("exist");
    cy.get('[data-test ="top-rated-page-hero"]').should(
      "have.attr",
      "alt",
      "A woman posing on some stairs"
    );

    // Sale page content
    cy.get('[data-test="content-section"]').within(() => {
      cy.get('[data-test="product-link"]')
        .first()
        .should("have.attr", "href", "/product/2");
      cy.get('[data-test="2-image"]')
        .should("have.attr", "alt", "Mens Casual Premium Slim Fit T-Shirts")
        .get('[data-test="2-image"]')
        .should(
          "have.attr",
          "src",
          "/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg&w=640&q=75"
        )
        .get(
          '[data-test="2-individual-product-card"] > .flex-col > :nth-child(3)'
        )
        .should("contain", "$22.3")
        .get(
          '[data-test="2-individual-product-card"] > .flex-col > :nth-child(4)'
        )
        .should("contain", "Rating: 4.1 (146)");

      cy.get('[data-test="product-link"]')
        .last()
        .should("have.attr", "href", "/product/13");
      cy.get('[data-test="13-image"]')
        .should("have.attr", "alt", "Opna Women's Short Sleeve Moisture")
        .get('[data-test="13-image"]')
        .should(
          "have.attr",
          "src",
          "/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F51eg55uWmdL._AC_UX679_.jpg&w=640&q=75"
        )
        .get(
          '[data-test="13-individual-product-card"] > .flex-col > :nth-child(3)'
        )
        .should("contain", "$7.95")
        .get(
          '[data-test="13-individual-product-card"] > .flex-col > :nth-child(4)'
        )
        .should("contain", "Rating: 4.5 (146)");
    });
  });

  it("should show individual product upon click", () => {
    cy.intercept("GET", "**/product/2?_rsc=10idk", {
      fixture: "product_2_data.json",
    }).as("top-rated-product");

    //  Clicking product
    cy.get('[data-test="content-section"]').within(() => {
      cy.get('[data-test="product-link"]').first().click();
      cy.wait("@top-rated-product");
      cy.url().should("eq", "http://localhost:3000/product/2");
    });
    cy.go("back");
    cy.url().should("eq", "http://localhost:3000/top-rated");
  });
});
