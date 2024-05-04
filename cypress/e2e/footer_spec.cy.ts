describe("footer", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/products?select=*",
      {
        fixture: "landing_page_data.json",
      },
    );

    cy.visit("http://localhost:3000/");
  });

  it("Should allow users to navigate to careers page, select a job, and apply", () => {
    // careers intercept
    cy.intercept("GET", "/careers-home?_rsc=acgkz", {
      fixture: "career_preview_mock_data.json",
    }).as("career_preview_page_data");

    cy.get('[data-test="footer"]').should("exist");
    cy.get('[data-test="footer"]').should("contain", "Company");

    // career home page
    cy.get('[data-test="careers-link"]').click();
    cy.url().should("include", "/careers-home");
    cy.get('[data-test="career-page-hero"]')
      .should("exist")
      .and("contain", "Grow")
      .and("contain", "Collaborate")
      .and("contain", "Achieve");
    cy.get('[data-test="career-page-text"]')
      .should("exist")
      .and("contain", "Open Positions");
    cy.get('[data-test="career-card"]').should("exist").and("have.length", 2);
    cy.get('[data-test="career-name"]')
      .eq(0)
      .should("exist")
      .and("contain", "Software Engineer");
    cy.get('[data-test="career-name"]')
      .eq(1)
      .should("exist")
      .and("contain", "Sales Manager");

    cy.get('[data-test="career-description"]')
      .eq(0)
      .should("exist")
      .and(
        "contain",
        "We are seeking a talented and motivated Software Engineer to join our growing team.",
      );
    cy.get('[data-test="career-description"]')
      .eq(1)
      .should("exist")
      .and(
        "contain",
        "We are seeking a driven and results-oriented Sales Manager to lead and motivate our sales team in achieving ambitious sales goals.",
      );

    // navigate to the software engineering job
    cy.get('[data-test="learn-more-btn"]').eq(0).click();
    cy.url().should("include", "/job/2");
    cy.get('[data-test="individual-job"] h2')
      .should("exist")
      .and("contain", "Software Engineer");
    cy.get('[data-test="individual-job"] p')
      .eq(0)
      .should("contain", "Location");
    cy.get('[data-test="individual-job"] p')
      .eq(1)
      .should("contain", "California, USA");
    cy.get('[data-test="individual-job"] p').eq(2).should("contain", "Remote");
    cy.get('[data-test="individual-job"] p').eq(3).should("contain", "Yes");
    cy.get('[data-test="individual-job"] p')
      .eq(4)
      .should("contain", "Job Type");
    cy.get('[data-test="individual-job"] p')
      .eq(5)
      .should("contain", "Full-time");
    cy.get('[data-test="individual-job"] p').eq(6).should("contain", "Salary");
    cy.get('[data-test="individual-job"] p').eq(7).should("contain", "100000");
    cy.get('[data-test="individual-job"] p')
      .eq(8)
      .should("contain", "Expected Start");
    cy.get('[data-test="individual-job"] p')
      .eq(9)
      .should("contain", "May - 2024");
    cy.get('[data-test="individual-job"] p')
      .eq(10)
      .should(
        "contain",
        "We are seeking a talented and motivated Software Engineer to join our growing team. You will play a key role in developing and maintaining our e-commerce platform, ensuring a high-performing and user-friendly ",
      );

    cy.get('[data-test="individual-job"] p')
      .eq(11)
      .should("contain", "Responsibilities");
    cy.get('[data-test="responsibilities-list"] li')
      .should("exist")
      .and("have.length", 7);
    cy.get('[data-test="responsibilities-list"] li')
      .first()
      .and(
        "contain",
        "Design, develop, and maintain features for our e-commerce platform, utilizing modern web technologies (e.g., React, Node.js, Python)",
      );
    cy.get('[data-test="responsibilities-list"] li')
      .last()
      .and(
        "contain",
        "Stay up-to-date with the latest advancements in e-commerce technologies and best practices",
      );

    cy.get('[data-test="individual-job"] p')
      .eq(12)
      .should("contain", "Qualifications");
    cy.get('[data-test="qualifications-list"] li')
      .should("exist")
      .and("have.length", 9);
    cy.get('[data-test="qualifications-list"] li')
      .first()
      .and(
        "contain",
        "Bachelor's degree in Computer Science, Software Engineering, or a related field (or equivalent Bootcamp experience)",
      );
    cy.get('[data-test="qualifications-list"] li')
      .last()
      .and(
        "contain",
        "Passion for building user-friendly and engaging e-commerce experiences",
      );

    cy.get('[data-test="individual-job"] p')
      .eq(13)
      .should("contain", "Benefits");
    cy.get('[data-test="benefits-list"] li')
      .should("exist")
      .and("have.length", 3);
    cy.get('[data-test="benefits-list"] li')
      .first()
      .and("contain", "Flexible work schedule");
    cy.get('[data-test="benefits-list"] li')
      .last()
      .and("contain", "and competitive salary");
    cy.get('[data-test="apply-btn"]').should("exist").click();
    cy.url().should("include", "/fallback");

    // navigate back to the careers home page
    cy.go(-2);
    cy.url().should("include", "/careers-home");

    //navigate to the sales manager job
    cy.get('[data-test="learn-more-btn"]').eq(1).click();
    cy.url().should("include", "/job/3");

    cy.get('[data-test="individual-job"] h2')
      .should("exist")
      .and("contain", "Sales Manager");
    cy.get('[data-test="individual-job"] p')
      .eq(0)
      .should("contain", "Location");
    cy.get('[data-test="individual-job"] p')
      .eq(1)
      .should("contain", "Texas, USA");
    cy.get('[data-test="individual-job"] p').eq(2).should("contain", "Remote");
    cy.get('[data-test="individual-job"] p').eq(3).should("contain", "Yes");
    cy.get('[data-test="individual-job"] p')
      .eq(4)
      .should("contain", "Job Type");
    cy.get('[data-test="individual-job"] p')
      .eq(5)
      .should("contain", "Full-time");
    cy.get('[data-test="individual-job"] p').eq(6).should("contain", "Salary");
    cy.get('[data-test="individual-job"] p').eq(7).should("contain", "85000");
    cy.get('[data-test="individual-job"] p')
      .eq(8)
      .should("contain", "Expected Start");
    cy.get('[data-test="individual-job"] p')
      .eq(9)
      .should("contain", "June - 2024");
    cy.get('[data-test="individual-job"] p')
      .eq(10)
      .should(
        "contain",
        "We are seeking a driven and results-oriented Sales Manager to lead and motivate our sales team in achieving ambitious sales goals. You will play a crucial role in developing and implementing sales strategies, managing and coaching individual team members, and fostering a positive and collaborative sales environment.",
      );

    cy.get('[data-test="individual-job"] p')
      .eq(11)
      .should("contain", "Responsibilities");
    cy.get('[data-test="responsibilities-list"] li')
      .should("exist")
      .and("have.length", 8);
    cy.get('[data-test="responsibilities-list"] li')
      .first()
      .and(
        "contain",
        "Develop and implement effective sales strategies to achieve company objectives",
      );
    cy.get('[data-test="responsibilities-list"] li')
      .last()
      .and("contain", "Monitor sales performance metrics and reports");

    cy.get('[data-test="individual-job"] p')
      .eq(12)
      .should("contain", "Qualifications");
    cy.get('[data-test="qualifications-list"] li')
      .should("exist")
      .and("have.length", 8);
    cy.get('[data-test="qualifications-list"] li')
      .first()
      .and(
        "contain",
        "Bachelor's degree in Business Administration, Marketing, or a related field (or equivalent experience)",
      );
    cy.get('[data-test="qualifications-list"] li')
      .last()
      .and("contain", "Proficiency in CRM software and sales tools");

    cy.get('[data-test="individual-job"] p')
      .eq(13)
      .should("contain", "Benefits");
    cy.get('[data-test="benefits-list"] li')
      .should("exist")
      .and("have.length", 3);
    cy.get('[data-test="benefits-list"] li')
      .first()
      .and("contain", "Competitive salary and commission structure");
    cy.get('[data-test="benefits-list"] li')
      .last()
      .and("contain", "paid time off");
    cy.get('[data-test="apply-btn"]').should("exist").click();
    cy.url().should("include", "/fallback");
  });

  it("Should allow a user navigate to the order status page and navigate to the fallback page", () => {
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist").and("contain", "Help");

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
      "12345",
    );
    cy.get('label[for="E-mail address"]').should("contain", "E-mail Address");
    cy.get('[data-test="order-status-email-input"]')
      .should("have.value", "")
      .type("useremail@email.com");
    cy.get('[data-test="order-status-email-input"]').should(
      "have.value",
      "useremail@email.com",
    );
    cy.get('[data-test="order-status-submit-btn"]').should("exist").click();

    cy.url().should("include", "/fallback");
    cy.go(-1);
    cy.url().should("include", "/order-status");
    cy.get('[data-test="order-status-cancel-btn"]').should("exist").click();
    cy.url().should("include", "/fallback");
  });

  it("Should allow a user to look at returns page", () => {
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
        "Start a return today for any items you purchased from JSJ.",
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
        "Returning a gift? Our return process is quick and easy.",
      );
  });

  it("Should display the womens and mens size chart", () => {
    cy.get('[data-test="size-chart-link"]').click();
    cy.url().should("include", "/size-chart");
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist");
    cy.get('[data-test="womens-size-chart"]').should("exist");
    cy.get('[data-test="mens-size-chart"]').should("exist");
  });

  it("Should allow a user to navigate to and interact with the FAQ page", () => {
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
        "We would recommend that you refer to our sizing guide which can be found here",
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
        "Absolutely! We would love to hear from you! You can reach us here",
      );
  });

  it("Should navigate users to the contact us page", () => {
    cy.get('[data-test="contact"]').click();
    cy.url().should("include", "/contact");
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist");
    cy.get('[data-test="contact-us-text"]')
      .should("exist")
      .and("contain", "Contact us");
    cy.get('[data-test="contact-card"]').should("exist").and("have.length", 3);
    cy.get('[data-test="contact-card"]')
      .first()
      .should("contain", "Judy Ye")
      .and("contain", "Software Engineer");
    cy.get('[data-test="headshot"]')
      .first()
      .should("have.attr", "alt", "Judy Ye head shot");

    cy.get('[data-test="contact-card"]')
      .eq(1)
      .should("contain", "Scotty Brown")
      .and("contain", "Software Engineer");
    cy.get('[data-test="headshot"]')
      .eq(1)
      .should("have.attr", "alt", "Scotty Brown head shot");

    cy.get('[data-test="contact-card"]')
      .last()
      .should("contain", "Jocelyn Wensloff")
      .and("contain", "Software Engineer");
    cy.get('[data-test="headshot"]')
      .last()
      .should("have.attr", "alt", "Jocelyn Wensloff head shot");

    cy.get('[data-test="linkedin-icon"]').should("exist").and("have.length", 3);
    cy.get('[data-test="github-icon"]').should("exist").and("have.length", 3);
  });

  it("Should bring users to the fallback page if they interact w/ social media icons", () => {
    cy.get('[data-test="footer"]').should("contain", "+1-(800)-123-4567");

    cy.get('[data-test="instagram-link"]').click();
    cy.url().should("include", "/fallback");

    cy.get('[data-test="twitter-link"]').click();
    cy.url().should("include", "/fallback");

    cy.get('[data-test="facebook-link"]').click();
    cy.url().should("include", "/fallback");

    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist");
    cy.get('[data-test="footer"]').should("contain", "Contact Us");

    cy.get('[data-test="fallback-hero"]').should("exist");
    cy.get('[data-test="fallback-hero-text"]').should(
      "contain",
      "Sorry, you have reached the end of the JSJ experience.",
    );
    cy.get('[data-test="fallback-text"]').should("exist");
    cy.get('[data-test="jocey\'s-linkin-link"]').should("exist");
    cy.get('[data-test="scotty\'s-linkin-link"]').should("exist");
    cy.get('[data-test="judy\'s-linkin-link"]').should("exist");
  });
});
