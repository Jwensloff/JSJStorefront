import supabase from "@/src/config/supabaseClient";
describe("template spec", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/products?select=*",
      {
        fixture: "landing_page_data.json",
      }
    ).as("landing_page_data");

    cy.visit("http://localhost:3000/");
    cy.wait("@landing_page_data");
  });

  it("should contain the landing page content", () => {
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
    cy.get('[data-test="11-card-button"]')
      .should("exist")
      .and("contain", "Shop");

    cy.get('[data-test="shop-sale-link"]')
      .should("exist")
      .and("contain", "Shop Sale Items");
    cy.get('[data-test="14-card"]')
      .should("exist")
      .and("contain", "DANVOUY Womens T Shirt Casual Cotton Short")
      .and("contain", "$12.99")
      .find('[data-test="14-card-image"]')
      .should("exist");
    cy.get('[data-test="14-card-button"]')
      .should("exist")
      .and("contain", "Shop");

    cy.get('[data-test="shop-gold-link"]')
      .should("exist")
      .and("contain", "Shop Gold");
    cy.get('[data-test="7-card"]')
      .should("exist")
      .and("contain", "Solid Gold Petite Micropave")
      .and("contain", "$168")
      .find('[data-test="7-card-image"]')
      .should("exist");
    cy.get('[data-test="7-card-button"]')
      .should("exist")
      .and("contain", "Shop");
  });
});
