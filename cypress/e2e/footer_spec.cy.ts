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

  it.skip("should navigate users to the proper pages", () => {
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

  it("Should allow a user navigate to the order status page and navigate to the fallback page", () => {
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist");

    cy.get('[data-test="order-status"]').click();
    cy.url().should("include", "/order-status");
    cy.get('[data-test="order-status-text"]')
      .should("exist")
      .and("contain", "View Order Status");
    cy.get('label[for="order number"]').should("contain", "Order Number");
    cy.get('[data-test="order-status-number-input"]')
      .should("have.value", "")
      .type("12345");
    cy.get('[data-test="order-status-number-input"]').should(
      "have.value",
      "12345"
    );
    cy.get('label[for="E-mail address"]').should("contain", "E-mail Address");
    cy.get('[data-test="order-status-email-input"]')
      .should("have.value", "")
      .type("useremail@email.com");
    cy.get('[data-test="order-status-email-input"]').should(
      "have.value",
      "useremail@email.com"
    );
    cy.get('[data-test="order-status-submit-btn"]').should("exist").click();

    cy.url().should("include", "/fallback");

    cy.go(-1);
    cy.url().should("include", "/order-status");
    cy.get('[data-test="order-status-cancel-btn"]').should("exist").click();

    cy.url().should("include", "/fallback")
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist");
    cy.get('[data-test="fallback-hero"]').should("exist");
    cy.get('[data-test="fallback-hero-text"]').should(
      "contain",
      "Sorry, you have reached the end of the JSJ experience."
    );
    cy.get('[data-test="fallback-text"]').should("exist");
    cy.get('[data-test="jocey\'s-linkin-link"]').should("exist");
    cy.get('[data-test="scotty\'s-linkin-link"]').should("exist");
    cy.get('[data-test="judy\'s-linkin-link"]').should("exist");
  });
});
