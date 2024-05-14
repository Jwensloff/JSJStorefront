describe("single product page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/products?select=*",
      {
        fixture: "landing_page_data.json",
      }
    );

    cy.visit("http://localhost:3000/");
    cy.intercept("GET", "**/product/2?_rsc=acgkz", {
      fixture: "product_2_data.json",
    }).as("product_2_data");

    cy.url().should("eq", "http://localhost:3000/");

    cy.get('[data-test="2-card"]').click();
  });

  it("", () => {
    cy.wait("@product_2_data");
    cy.url().should("eq", "http://localhost:3000/product/2");

    // header and footer
    cy.get('[data-test="header"]').should("exist");
    cy.get('[data-test="footer"]').should("exist");

    //single page content
    cy.get('[data-test="2-image"]')
      .should("exist")
      .and("be.visible")
      .and("have.attr", "alt", "Mens Casual Premium Slim Fit T-Shirts");
    cy.get('[data-test="single_prod_title"]')
      .should("exist")
      .and("contain", "Mens Casual Premium Slim Fit T-Shirts");
    cy.get('[data-test="single_prod_cost"]')
      .should("exist")
      .and("contain", "$22.30");
    cy.get('[data-test="single_prod_rating"]')
      .should("exist")
      .and("contain", "4/5");
    cy.get('[data-test="single_prod_customer_reviews"]')
      .should("exist")
      .and("contain", "146 Customer Review's");

    // I think because this component is Material Tailwind, testing wasn't as straight forward here

    // Cart button
    cy.get('[data-test="cart-button"]').should("exist");

    // Size
    cy.get('[data-test="2-size-selection"]').should("be.visible");
    cy.get('[data-test="2-size-selection"]').click();
    cy.get('[data-test="2-size-selection"]').parent().as("selectContainer");
    cy.get("@selectContainer")
      .find("label")
      .should("be.visible")
      .and("have.text", "Select Size");
    cy.get('[role="listbox"]').find('[role="option"]').should("have.length", 8);
    cy.get('[role="listbox"]')
      .find('[role="option"]')
      .eq(0)
      .should("contain", "XX-Small");
    cy.get('[role="listbox"]')
      .find('[role="option"]')
      .eq(7)
      .should("contain", "XXX-Large");
    cy.get('[data-test="2-size-selection"]').click();

    // Quantity
    cy.get('[data-test="2-quantity"]').click();
    cy.get('[data-test="2-quantity"]').parent().as("quantityContainer");
    cy.get("@quantityContainer")
      .find("label")
      .should("be.visible")
      .and("have.text", "Quantity");
    cy.get('[role="listbox"]').find('[role="option"]').should("have.length", 5);
    cy.get('[role="listbox"]')
      .find('[role="option"]')
      .eq(0)
      .should("contain", "1");
    cy.get('[role="listbox"]')
      .find('[role="option"]')
      .eq(4)
      .should("contain", "5");
    cy.get('[data-test="2-quantity"]').click();

    // Add to cart button
    cy.get('[data-test="add-to-cart-btn"]').should("exist").and("be.visible");

    //item description
    cy.get('[data-test="2-description"]').should("exist");
    cy.get('[data-test="2-description"] li')
      .should("exist")
      .and("have.length", 6);
    cy.get('[data-test="2-description"] li')
      .eq(0)
      .should("contain", "Slim-fitting style");

    cy.get('[data-test="2-description"] li')
      .eq(5)
      .should(
        "contain",
        "The Henley style round neckline includes a three-button placket"
      );
  });
});
