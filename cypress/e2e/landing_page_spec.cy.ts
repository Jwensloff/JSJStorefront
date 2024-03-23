describe("template spec", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/products?select=*",
      {
        fixture: "landing_page_data.json",
      }
    );

    cy.visit("http://localhost:3000/");
  });

  it.skip("should contain the landing page content", () => {
    // Header
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="header_logo"]').should("exist");
    cy.get('[data-test="Women\'s"]').should("exist");
    cy.get('[data-test="Men\'s"]').should("exist");
    cy.get('[data-test="Jewelry"]').should("exist");
    cy.get('[data-test="shopping-cart"]').should("exist");
    cy.get('[data-test="search"]').should("exist");
    cy.get("#search").should("have.attr", "placeholder", "Search products...");
    cy.get('[data-test="search-icon"]').should("exist");

    // Hero image
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

    // Landing page content
    cy.get('[data-test="top-rated-link"]')
      .should("exist")
      .and("contain", "Shop Top Rated");
    cy.get('[data-test="11-card"]')
      .should("exist")
      .and("contain", "MBJ Women's Solid Short Sleeve Boat Neck V")
      .and("contain", "$9.85")
      .find('[data-test="11-card-image"]')
      .should("exist");
    cy.get('[data-test="11-card-button"]').should("exist");

    cy.get('[data-test="shop-sale-link"]')
      .should("exist")
      .and("contain", "Shop Sale Items");
    cy.get('[data-test="14-card"]')
      .should("exist")
      .and("contain", "DANVOUY Womens T Shirt Casual Cotton Short")
      .and("contain", "$12.99")
      .find('[data-test="14-card-image"]')
      .should("exist");
    cy.get('[data-test="14-card-button"]').should("exist");

    cy.get('[data-test="shop-gold-link"]')
      .should("exist")
      .and("contain", "Shop Gold");
    cy.get('[data-test="7-card"]')
      .should("exist")
      .and("contain", "Solid Gold Petite Micropave")
      .and("contain", "$168")
      .find('[data-test="7-card-image"]')
      .should("exist");
    cy.get('[data-test="7-card-button"]').should("exist");

    // Footer
    cy.get('[data-test="footer"]')
      .should("exist")
      .and("contain", "Shop")
      .and("contain", "Women's")
      .and("contain", "Men's")
      .and("contain", "Jewelry")
      .and("contain", "Company")
      .and("contain", "Careers")
      .and("contain", "Help")
      .and("contain", "Returns")
      .and("contain", "FAQs")
      .and("contain", "Contact Us");
  });

  it.skip("Should allow a user to search for products", () => {
    cy.intercept("GET", "/search-results/jacket?_rsc=acgkz", {
      fixture: "search_results.json",
    }).as("search_results");
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist");

    cy.get("#search").should("have.attr", "placeholder", "Search products...");
    cy.get("#search").type("jacket").should("have.value", "jacket");
    cy.get('[data-test="search-icon"]').click();

    cy.url().should("include", "/search-results/jacket");
    cy.get('[data-test="3-individual-product-card"]')
      .should("exist")
      .and("contain", "Mens Cotton Jacket")
      .and("contain", "Rating: 4.7");

    cy.get('[data-test="6-individual-product-card"]')
      .should("exist")
      .and(
        "contain",
        "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"
      )
      .and("contain", "Rating: 2.6");

    cy.get('[data-test="9-individual-product-card"]')
      .should("exist")
      .and(
        "contain",
        "Rain Jacket Women Windbreaker Striped Climbing Raincoats"
      )
      .and("contain", "Rating: 3.8");
  });

  it.skip("should display error when there is nothing that matches the search criteria", () => {
    cy.intercept("GET", "/search-results/randommmmm?_rsc=acgkz", {
      fixture: "search_results.json",
    }).as("search_results");
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist");

    cy.get("#search").should("have.attr", "placeholder", "Search products...");
    cy.get("#search").type("randommmmm").should("have.value", "randommmmm");
    cy.get('[data-test="search-icon"]').click();
    cy.get('[data-test="search-error"]')
      .should("exist")
      .and(
        "contain",
        "Sorry, no products match your search. Please try something else!"
      );
  });
});
