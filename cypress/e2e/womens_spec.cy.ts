describe("womens", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/products?select=*",
      {
        fixture: "womens_clothing_mock_data.json",
      },
    ).as("womens_clothing");
    cy.visit("http://localhost:3000/womens");
  });
  it("should show women's page content", () => {
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
    cy.get('[data-test ="womens-page-hero"]').should("exist");
    cy.get('[data-test ="womens-page-hero"]').should(
      "have.attr",
      "alt",
      "A woman sitting on a car"
    );
    cy.get('[data-test="womens-page-hero-text"]')
      .should("contain", "Find")
      .and("contain", "Your")
      .and("contain", "Style");

    // Women's page content
    cy.get('[data-test="content-section"]').within(() => {
      cy.get('[data-test="product-link"]')
        .first()
        .should("have.attr", "href", "/product/6");
      cy.get('[data-test="6-image"]')
        .should(
          "have.attr",
          "alt",
          "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"
        )
        .get('[data-test="6-image"]')
        .should(
          "have.attr",
          "src",
          "/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F51Y5NI-I5jL._AC_UX679_.jpg&w=640&q=75"
        )
        .get(
          '[data-test="6-individual-product-card"] > .flex-col > :nth-child(3)'
        )
        .should("contain", "$56.99")
        .get(
          '[data-test="6-individual-product-card"] > .flex-col > :nth-child(4)'
        )
        .should("contain", "Rating: 2.6 (235)");

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
    cy.intercept("GET", "**/product/9?_rsc=1lth5", {
      fixture: "product_2_data.json",
    }).as("womens_product");

    //  Clicking product
    cy.get('[data-test="content-section"]').within(() => {
      cy.get('[data-test="product-link"]').eq(1).click();
      cy.wait("@womens_product");
      cy.url().should("eq", "http://localhost:3000/product/9");
    });
    cy.go("back");
    cy.url().should("eq", "http://localhost:3000/womens");
  });
});
