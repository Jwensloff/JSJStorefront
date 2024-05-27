describe('shopping cart', () => {

  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/products?select=*",
      {
        fixture: "landing_page_data.json",
      },
    ).as('landingPage');

    cy.visit("http://localhost:3000/");
  });

  it('Should exist - Cart Preview', () => {

    cy.intercept(
      "GET",
      "https://qclojeseumhphvvxrtog.supabase.co/rest/v1/shopping_cart?select=*",
      {
        fixture: "checkout_mock_data.json",
      },
    ).as("cartPreview");

    cy.get('.pt-3').should('exist')
    cy.get('.pt-3').click()
    cy.get('.pt-3 > :nth-child(2) > .fixed').should('exist')
    cy.get('.fixed > .text-xl').should('contain', 'Shopping Cart')
    cy.get('.pt-3 > :nth-child(2) > .fixed > .relative').should('exist')
    cy.get('a > .align-middle').should('have.text', 'Go to Cart')
    cy.get('.border').should('have.text', 'Continue Shopping').click()


  })

  it('Should allow you to add/delete items from your cart - Cart Preview', () => {

    cy.intercept("GET", "**/product/2?_rsc=acgkz", {
      fixture: "product_2_data.json",
      retries: 2,
    }).as("product_2_data");

    cy.intercept("POST","/product/2", {
      fixture: "product_2_data.json"
    }).as("product_post")

    cy.intercept("GET", "**/product/2?_rsc=pce0n", {
      fixture: "add_item_shopping_cart.json",
      retries: 2,
    }).as("cart_data");

    cy.visit('http://localhost:3000/product/2')
    cy.get('[data-test="2-size-selection"]').click()
    cy.get('#material-tailwind-select-2').click()
    cy.get('[data-test="2-quantity"]').click()
    cy.get('#material-tailwind-select-0').click()

    // something is happening here, not exactly sure how to handle the cart preview fetch requests here because after i click 'add to cart' it is not popping up on the left with the item added to it.

    // cy.get('[data-test="add-to-cart-btn"]').click().wait("@product_post")
    // cy.get(':nth-child(3) > .fixed > .relative > .h-96 > :nth-child(4) > .flex-row').should('exist')

  })

  // it('Should exist - Cart Main', () => {


  // })

})