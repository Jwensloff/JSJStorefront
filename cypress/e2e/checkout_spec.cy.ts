describe("checkout", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/shopping_cart?select=*",
      {
        fixture: "checkout_mock_data.json",
      },
    ).as("checkout");
    cy.visit("http://localhost:3000/checkout");
    cy.intercept("GET", "/fallback?_rsc=14way", { statusCode: 200 });
    cy.intercept("GET", "/fallback?_rsc=1hd51", { statusCode: 200 });
  });
  it("should show checkout page content", () => {
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

    // Delivery Section
    cy.get('[data-test="title"]').should("exist").and("contain", "Checkout");
    cy.get('[data-test="form"]').should("exist");
    cy.get('[data-test="form"] > :nth-child(1)').within(() => {
      cy.get('[data-test="first-name"]')
        .should("have.attr", "id", "first name")
        .get('[data-test="first-name"]')
        .type("Jane")
        .should("have.value", "Jane");
      cy.get('[data-test="last-name"]')
        .should("have.attr", "id", "last name")
        .get('[data-test="last-name"]')
        .type("Smith")
        .should("have.value", "Smith");
      cy.get('[data-test="email"]')
        .should("have.attr", "id", "e-mail address")
        .get('[data-test="email"]')
        .type("janesmith@gmail.com")
        .should("have.value", "janesmith@gmail.com");
      cy.get('[data-test="phone-number"]')
        .should("have.attr", "id", "phone number")
        .get('[data-test="phone-number"]')
        .type("510-123-4567")
        .should("have.value", "510-123-4567");
      cy.get('[data-test="street-address"]')
        .should("have.attr", "id", "street address")
        .get('[data-test="street-address"]')
        .type("1234 Hire Me St.")
        .should("have.value", "1234 Hire Me St.");
      cy.get('[data-test="city"]')
        .should("have.attr", "id", "city")
        .get('[data-test="city"]')
        .type("Brooklyn")
        .should("have.value", "Brooklyn");
      cy.get('[data-test="postal-code"]')
        .should("have.attr", "id", "postal code")
        .get('[data-test="postal-code"]')
        .type("11216")
        .should("have.value", "11216");
      cy.get('[data-test="country"]')
        .should("have.attr", "id", "country")
        .get('[data-test="country"]')
        .type("USA")
        .should("have.value", "USA");
      cy.get('[data-test="state"]')
        .should("have.attr", "id", "state or province")
        .get('[data-test="state"]')
        .type("New York")
        .should("have.value", "New York");
    });

    // Cart Content Section
    cy.get('[data-test="cart-products"]').within(() => {
      cy.get('[data-test="products"]').should("have.length", "3");
      cy.get('[data-test="products"]')
        .first()
        .should("contain", "Mens Casual Slim Fit");
      cy.get('[data-test="image"]')
        .first()
        .should(
          "have.attr",
          "src",
          "/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F71YXzeOuslL._AC_UY879_.jpg&w=256&q=75",
        );
      cy.get('[data-test="price"]').first().should("contain", "$15.99");
      cy.get('[data-test="size"]').first().should("contain", "Small");
      cy.get('[data-test="quantity"]').first().should("contain", "1");

      cy.get('[data-test="products"]')
        .last()
        .should("contain", "Opna Women's Short Sleeve Moisture");
      cy.get('[data-test="image"]')
        .last()
        .should(
          "have.attr",
          "src",
          "/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F51eg55uWmdL._AC_UX679_.jpg&w=256&q=75",
        );

      cy.get('[data-test="price"]').last().should("contain", "$7.95");
      cy.get('[data-test="size"]').last().should("contain", "Medium");
      cy.get('[data-test="quantity"]').last().should("contain", "1");
    });

    // Shipping Section
    cy.get('[data-test="shipping"]')
      .should("contain", "Shipping Method")
      .and("contain", "No Rush")
      .and("contain", "Standard")
      .and("contain", "Express");
    cy.get('[data-test="shipping"] > :nth-child(2)').should("contain", "$5.99");
    cy.get('[data-test="shipping"] > :nth-child(3)').should("contain", "$9.99");
    cy.get('[data-test="shipping"] > :nth-child(4)').should(
      "contain",
      "$19.99",
    );

    // Credit Card Section
    cy.get('[data-test="form"] > :nth-child(3)').within(() => {
      cy.get('[data-test="payment"]').should("contain", "Payment");
      cy.get('[data-test="cc"]').should(
        "have.attr",
        "id",
        "credit card number",
      );
      cy.get('[data-test="name"]').should("have.attr", "id", "name on card");
      cy.get('[data-test="exp"]').should("have.attr", "id", "expiration date");
      cy.get('[data-test="cvv"]').should("have.attr", "id", "CVV");

      cy.get('[data-test="payment"] > :nth-child(1) > .flex').click();
      cy.get('[data-test="cc"]').should("have.value", "1234 5678 9123 4567");
      cy.get('[data-test="name"]').should("have.value", "Rick Roll");
      cy.get('[data-test="exp"]').should("have.value", "01/99");
      cy.get('[data-test="cvv"]').should("have.value", "321");
    });

    // Order Summary Section
    cy.get('[data-test="order-summary"]').within(() => {
      cy.get("h2").should("contain", "Order Summary");
      cy.get('[data-test="subtotal"]')
        .should("contain", "Subtotal")
        .and("contain", "$43.92");
      cy.get('[data-test="shipping"]')
        .should("contain", "Shipping")
        .and("contain", "$0");
      cy.get('[data-test="tax"]')
        .should("contain", "Sales Tax")
        .and("contain", "$3.95");
      cy.get('[data-test="total"]')
        .should("contain", "Total")
        .and("contain", "$47.87");
    });
    cy.get('[type="radio"]').first().check();
    cy.get('[data-test="shipping"]')
      .should("contain", "Shipping")
      .and("contain", "$5.99");

    //  Clicking Buy Now
    cy.get('[data-test="submit"]').click();
    cy.url().should("eq", "http://localhost:3000/fallback");
    cy.go("back");
    cy.url().should("eq", "http://localhost:3000/checkout");
  });
});
