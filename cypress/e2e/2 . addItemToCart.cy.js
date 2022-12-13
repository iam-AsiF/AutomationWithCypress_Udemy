/// <reference types="cypress" />

describe('Buying item from GreenKart', () => {
  it('Opening practice website GreenKart from rahul shetty', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    cy.get('.search-keyword').type('ca').click().wait(2000);

    cy.get('.products')
      .find('.product')
      .each(($el, index, $list) => {
        const vegName = $el.find('.product-name').text();
        if (vegName.includes('Cashews')) {
          // now we need to 'wrap()' the element becasue its a promise? - asynchronous operation
          cy.wrap($el).contains('ADD TO CART').click();
        }
      });
    cy.get('.cart-icon').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
  });
});
