describe("mens", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/products?select=*",
      {
        fixture: "mens_clothing_mock_data.json",
      },
    ).as("mens_clothing");
    cy.visit("http://localhost:3000/mens");
  });
  it("should show men's page content", () => {
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
    cy.get('[data-test ="mens-page-hero"]').should("exist");
    cy.get('[data-test ="mens-page-hero"]').should(
      "have.attr",
      "alt",
      "A black and white photo of a stylish man popping his collar",
    );
    cy.get('[data-test="mens-page-hero-text"]')
      .should("contain", "Be")
      .and("contain", "Auth")
      .and("contain", "entic");

    // Men's page content
    cy.get('[data-test="content-section"]').within(() => {
      cy.get('[data-test="product-link"]')
        .first()
        .should("have.attr", "href", "/product/1");
      cy.get('[data-test="1-image"]')
        .should(
          "have.attr",
          "alt",
          "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        )
        .get('[data-test="1-image"]')
        .should(
          "have.attr",
          "src",
          "/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75",
        )
        .get(
          '[data-test="1-individual-product-card"] > .flex-col > :nth-child(3)',
        )
        .should("contain", "$109.95")
        .get(
          '[data-test="1-individual-product-card"] > .flex-col > :nth-child(4)',
        )
        .should("contain", "Rating: 3.9 (120)");

      cy.get('[data-test="product-link"]')
        .last()
        .should("have.attr", "href", "/product/5");
      cy.get('[data-test="5-image"]')
        .should("have.attr", "alt", "Mens Casual Slim Fit")
        .get('[data-test="5-image"]')
        .should(
          "have.attr",
          "src",
          "/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F71YXzeOuslL._AC_UY879_.jpg&w=640&q=75",
        )
        .get(
          '[data-test="5-individual-product-card"] > .flex-col > :nth-child(3)',
        )
        .should("contain", "$15.99")
        .get(
          '[data-test="5-individual-product-card"] > .flex-col > :nth-child(4)',
        )
        .should("contain", "Rating: 2.1 (430)");
    });
  });
  it("should show individual product upon click", () => {
    cy.intercept("GET", "**/product/2?_rsc=1gprc", {
      fixture: "product_2_data.json",
    }).as("mens_product");

    //  Clicking product
    cy.get('[data-test="content-section"]').within(() => {
      cy.get('[data-test="product-link"]').eq(1).click();
      cy.wait("@mens_product");
      cy.url().should("eq", "http://localhost:3000/product/2");
    });
    cy.go("back");
    cy.url().should("eq", "http://localhost:3000/mens");
  });
});
