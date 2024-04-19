describe("footer", () => {
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

  it("should navigate users to the proper pages", () => {
    cy.get('[data-test="footer"]').should("exist");

    //womens page intercept
    cy.intercept("GET", "/womens?_rsc=acgkz", {
      fixture: "womens_clothing_mock_data.json",
    }).as("womens_page_data");

    // mens page intercept
    cy.intercept("GET", "/mens?_rsc=1lth5", {
      fixture: "mens_clothing_mock_data.json",
    }).as("mens_page_data");

    // jewelry intercept
    cy.intercept("GET", "/jewelry?_rsc=1gprc", {
      fixture: "jewelry_mock_data.json",
    }).as("jewelry_page_data");

    // careers intercept
    cy.intercept("GET", "/careers-home?_rsc=bmzfm", {
      fixture: "career_preview_mock_data.json",
    }).as("career_preview_page_data");

    // womens page
    cy.get('[data-test="womens-link"]').click();
    cy.wait("@womens_page_data");
    cy.url().should("include", "/womens");

    // mens page
    cy.get('[data-test="mens-link"]').click();
    cy.wait("@mens_page_data");
    cy.url().should("include", "/mens");

    // mens page
    cy.get('[data-test="jewelry-link"]').click();
    cy.wait("@jewelry_page_data");
    cy.url().should("include", "/jewelry");

    // careers
    cy.get('[data-test="careers-link"]').click();
    cy.wait("@career_preview_page_data");
    cy.url().should("include", "/careers-home");

    // order status
    cy.get('[data-test="order-status"]').click();
    cy.url().should("include", "/order-status");

    // returns/exchanges
    cy.get('[data-test="returns-exchanges"]').click();
    cy.url().should("include", "/returns-&-exchanges");

    // size chart
    cy.get('[data-test="size-chart-link"]').click();
    cy.url().should("include", "/size-chart");

    // FAQs
    cy.get('[data-test="faq"]').click();
    cy.url().should("include", "/FAQs");

    // contact
    cy.get('[data-test="contact"]').click();
    cy.url().should("include", "/contact");


  // social media links
    cy.get('[data-test="instagram-link"]').click();
    cy.url().should("include", "/fallback");

    cy.get('[data-test="twitter-link"]').click();
    cy.url().should("include", "/fallback");

    cy.get('[data-test="facebook-link"]').click();
    cy.url().should("include", "/fallback");
  });
});
