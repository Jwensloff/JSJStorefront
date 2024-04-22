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

    // size chart
    cy.get('[data-test="size-chart-link"]').click();
    cy.url().should("include", "/size-chart");

    // FAQs

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

  it.skip("Should allow a user navigate to the order status page and navigate to the fallback page", () => {
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

    cy.url().should("include", "/fallback");
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

  it.skip("should allow a user to look at returns page", () => {
    cy.get('[data-test="returns-exchanges"]').click();
    cy.url().should("include", "/returns-&-exchanges");
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist");
    cy.get('[data-test="returns-exchanges-text"]')
      .should("exist")
      .and("contain", "Return and Exchanges");

    cy.get('[data-test="return-section"] h2')
      .should("exist")
      .and("have.text", "Start a Return");

    cy.get('[data-test="return-section"] p')
      .should("exist")
      .and(
        "have.text",
        "Start a return today for any items you purchased from JSJ."
      )
      .click();

    cy.url().should("include", "/fallback");
    cy.go(-1);
    cy.url().should("include", "/returns-&-exchanges");
    cy.get('[data-test="gift-section"] h2')
      .should("exist")
      .and("have.text", "Gift Returns");
    cy.get('[data-test="gift-section"] p')
      .should("exist")
      .and(
        "have.text",
        "Returning a gift? Our return process is quick and easy."
      );
  });

  it.skip("Should display the womens and mens size chart", () => {
    cy.get('[data-test="size-chart-link"]').click();
    cy.url().should("include", "/size-chart");
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist");
    cy.get('[data-test="womens-size-chart"]').should("exist");
    cy.get('[data-test="mens-size-chart"]').should("exist");
  });

  it("shold allow a user to navigate to and interact with the FAQ page", () => {
    cy.get('[data-test="faq"]').click();
    cy.url().should("include", "/FAQs");
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist");

    cy.get('[data-test="faq-text"]')
      .should("exist")
      .and("contain", "Frequently Asked Questions");
    cy.get('[data-test="QA-summary"]').should("exist").and("have.length", 6);
    cy.get('[data-test="QA-summary"]')
      .first()
      .should("contain", "How do I know what size I am?");
    cy.get('[data-test="arrow"]').should("exist").and("have.length", 6);
    cy.get('[data-test="arrow"]').first().click();
    cy.get('[data-test="QA-answer"]')
      .first()
      .should("be.visible")
      .and(
        "contain",
        "We would recommend that you refer to our sizing guide which can be found here"
      );
    cy.get('[data-test="size-link"]').click();
    cy.url().should("include", "/size-chart");
    cy.go(-1);
    cy.url().should("include", "/FAQs");

    cy.get('[data-test="QA-summary"]')
      .eq(1)
      .should("exist")
      .and("contain", "What is your return policy?");
    cy.get('[data-test="arrow"]').eq(1).click();
    cy.get('[data-test="QA-answer"]')
      .eq(1)
      .should("be.visible")
      .and("contain", "If you are not 100% satisfied with your purchase");
    cy.get('[data-test="return-link"]').click();
    cy.url().should("include", "/returns-&-exchanges");
    cy.go(-1);
    cy.url().should("include", "/FAQs");

    cy.get('[data-test="QA-summary"]')
      .last()
      .should("contain", "Can I contact these impressive developers?");
    cy.get('[data-test="arrow"]').last().click();
    cy.get('[data-test="QA-answer"]')
      .last()
      .should("be.visible")
      .and(
        "contain",
        "Absolutely! We would love to hear from you! You can reach us here"
      );
  });
});
